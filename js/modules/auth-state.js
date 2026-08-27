/* =========================================================
   AUTH & STATE MANAGEMENT (real backend: Supabase Auth + Postgres)
   Password hashing happens server-side inside Supabase (bcrypt),
   never in this file. We only keep a synchronous in-memory cache
   of the logged-in user's profile so the rest of the UI code
   (written for synchronous access) keeps working unchanged;
   every mutation is also persisted to the database in the background.
========================================================== */
import { supabaseClient } from "./supabase-client.js";
import { renderAccountNav } from "./account-modal.js";
import { refreshAllCourseCards } from "./course-card-sync.js";
import { openResetPasswordModal } from "./auth-modal.js";

let currentUserCache = null; // { id, name, email, enrolled }
let authReady = false;

export function getCurrentUser() {
    return currentUserCache;
}
export function isLoggedIn() {
    return !!currentUserCache;
}
export function clearCurrentUser() {
    currentUserCache = null;
}

export async function loadProfileIntoCache(userId, fallbackEmail) {
    const { data, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
    if (error || !data) {
        console.error("Failed to load profile:", error);
        currentUserCache = null;
        return null;
    }
    currentUserCache = {
        id: data.id,
        name: data.name,
        email: data.email || fallbackEmail,
        enrolled: data.enrolled || {}
    };
    migrateStaleProgress();
    return currentUserCache;
}

/* When a course's curriculum is rewritten, old completed-lesson indexes
   point at entirely different lessons. Reset that course's progress once
   so learners don't see brand-new lessons pre-marked as finished. */
const CURRICULUM_VERSIONS = { python: 2 };

function migrateStaleProgress() {
    if (!currentUserCache?.enrolled) return;
    let changed = false;
    Object.keys(CURRICULUM_VERSIONS).forEach(courseId => {
        const rec = currentUserCache.enrolled[courseId];
        if (!rec) return;
        if (rec.curriculumVersion !== CURRICULUM_VERSIONS[courseId]) {
            rec.completedLessons = [];
            rec.lastLessonIndex = 0;
            rec.curriculumVersion = CURRICULUM_VERSIONS[courseId];
            changed = true;
        }
    });
    if (changed) {
        supabaseClient
            .from("profiles")
            .update({ enrolled: currentUserCache.enrolled, updated_at: new Date().toISOString() })
            .eq("id", currentUserCache.id)
            .then(({ error }) => { if (error) console.error("Progress reset sync failed:", error); });
    }
}

// Mutates the in-memory profile immediately (so UI stays synchronous)
// then pushes the change to Supabase in the background.
export function updateCurrentUser(mutatorFn) {
    if (!currentUserCache) return null;
    mutatorFn(currentUserCache);
    supabaseClient
        .from("profiles")
        .update({ enrolled: currentUserCache.enrolled, updated_at: new Date().toISOString() })
        .eq("id", currentUserCache.id)
        .then(({ error }) => { if (error) console.error("Progress sync failed:", error); });
    return currentUserCache;
}

export async function initAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session?.user) {
        await loadProfileIntoCache(session.user.id, session.user.email);
    }
    authReady = true;
    renderAccountNav();
    refreshAllCourseCards();
}

export function initAuthStateListener() {
    supabaseClient.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_OUT") {
            currentUserCache = null;
            renderAccountNav();
            refreshAllCourseCards();
        }
        if (event === "PASSWORD_RECOVERY") {
            openResetPasswordModal();
        }
    });
}
