/* =========================================================
   ACCOUNT MODAL UI
========================================================== */
import { supabaseClient } from "./supabase-client.js";
import { getCurrentUser, isLoggedIn, clearCurrentUser } from "./auth-state.js";
import { t, currentLang } from "./i18n.js";
import { showToast } from "./toast.js";
import { catalog } from "../data.js";
import { openCoursePage } from "./course-page.js";
import { openAuthModal } from "./auth-modal.js";
import { refreshAllCourseCards } from "./course-card-sync.js";

const accountModal = document.getElementById("accountModal");

export function closeAccountModalFunc() {
    accountModal.classList.remove("active");
    document.body.classList.remove("menu-open");
}

export function openAccountModal() {
    const user = getCurrentUser();
    if (!user) { openAuthModal("login"); return; }

    document.getElementById("accountAvatar").textContent = user.name.trim().charAt(0).toUpperCase();
    document.getElementById("accountName").textContent = user.name;
    document.getElementById("accountEmail").textContent = user.email;

    const enrolledIds = Object.keys(user.enrolled || {});
    let totalLessonsDone = 0;
    let totalProgress = 0;
    const listEl = document.getElementById("accountCoursesList");
    listEl.innerHTML = "";

    if (enrolledIds.length === 0) {
        listEl.innerHTML = `<div class="account-empty">${t("accountEmptyCourses")}</div>`;
    } else {
        enrolledIds.forEach(cid => {
            const course = catalog[cid];
            if (!course) return;
            const done = (user.enrolled[cid].completedLessons || []).length;
            const total = course.lessons.length;
            const pct = total ? Math.round((done / total) * 100) : 0;
            totalLessonsDone += done;
            totalProgress += pct;

            const item = document.createElement("div");
            item.className = "account-course-item";
            item.innerHTML = `
                <div class="account-course-icon ${course.icon}"><i class="${course.iconClass}"></i></div>
                <div class="account-course-info">
                    <strong>${course.name[currentLang]}</strong>
                    <div class="progress"><span style="width:${pct}%"></span></div>
                </div>
                <span style="font-size:12px; color:var(--text-light); flex-shrink:0;">${pct}%</span>
            `;
            item.addEventListener("click", () => {
                closeAccountModalFunc();
                openCoursePage(cid);
            });
            listEl.appendChild(item);
        });
    }

    document.getElementById("statEnrolled").textContent = enrolledIds.length;
    document.getElementById("statLessonsDone").textContent = totalLessonsDone;
    document.getElementById("statAvgProgress").textContent = enrolledIds.length ? Math.round(totalProgress / enrolledIds.length) + "%" : "0%";

    accountModal.classList.add("active");
    document.body.classList.add("menu-open");
}

export function renderAccountNav() {
    const user = getCurrentUser();
    const label = user ? user.name.split(" ")[0] : t("navAccount");
    document.getElementById("accountNavBtn").textContent = label;
    document.getElementById("accountNavBtnMobile").textContent = label;
}

export function handleAccountNavClick(e) {
    e.preventDefault();
    document.getElementById("mobileMenu").classList.remove("active");
    document.body.classList.remove("menu-open");
    if (isLoggedIn()) openAccountModal();
    else openAuthModal("login");
}

export function initAccountModal() {
    document.getElementById("closeAccountModal").addEventListener("click", closeAccountModalFunc);
    accountModal.addEventListener("click", (e) => { if (e.target === accountModal) closeAccountModalFunc(); });
    document.getElementById("logoutBtn").addEventListener("click", async () => {
        await supabaseClient.auth.signOut();
        clearCurrentUser();
        closeAccountModalFunc();
        renderAccountNav();
        refreshAllCourseCards();
        showToast(t("toastLoggedOut"));
    });

    document.getElementById("accountNavBtn").addEventListener("click", handleAccountNavClick);
    document.getElementById("accountNavBtnMobile").addEventListener("click", handleAccountNavClick);
}
