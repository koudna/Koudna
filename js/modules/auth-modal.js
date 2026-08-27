/* =========================================================
   AUTH MODAL UI
========================================================== */
import { supabaseClient } from "./supabase-client.js";
import { t, currentLang } from "./i18n.js";
import { showToast } from "./toast.js";
import { getCurrentUser, loadProfileIntoCache } from "./auth-state.js";
import { renderAccountNav } from "./account-modal.js";
import { refreshAllCourseCards } from "./course-card-sync.js";
import { goToPendingCourse } from "./course-page.js";

const authModal = document.getElementById("authModal");
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const authError = document.getElementById("authError");
const authErrorText = document.getElementById("authErrorText");

export function openAuthModal(startTab) {
    showAuthError(null);
    loginForm.reset();
    registerForm.reset();
    switchAuthTab(startTab || "login");
    authModal.classList.add("active");
    document.body.classList.add("menu-open");
}
export function closeAuthModalFunc() {
    authModal.classList.remove("active");
    document.body.classList.remove("menu-open");
}
export function switchAuthTab(tab) {
    showAuthError(null);
    const isLogin = tab === "login";
    const isForgot = tab === "forgot";
    tabLogin.classList.toggle("active", isLogin);
    tabRegister.classList.toggle("active", !isLogin && !isForgot);
    loginForm.classList.toggle("active", isLogin);
    registerForm.classList.toggle("active", !isLogin && !isForgot);
    forgotPasswordForm.classList.toggle("active", isForgot);
    document.querySelector(".auth-tabs").style.display = isForgot ? "none" : "flex";
}
export function showAuthError(msg) {
    if (!msg) {
        authError.classList.remove("show");
        authErrorText.textContent = "";
    } else {
        authError.classList.add("show");
        authErrorText.textContent = msg;
    }
}

/* Sign in with Google (OAuth via Supabase) */
export async function signInWithGoogle() {
    showAuthError(null);
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin + window.location.pathname }
    });
    if (error) {
        showAuthError(currentLang === "ar"
            ? "تعذّر تسجيل الدخول بجوجل، حاول مرة أخرى"
            : "Google sign-in failed — please try again");
    }
    // On success the browser navigates to Google, then returns here and
    // initAuth() picks up the restored session automatically.
}

/* Reset password (landing from the email link) */
const resetPasswordModal = document.getElementById("resetPasswordModal");
const resetPasswordForm = document.getElementById("resetPasswordForm");
const resetPasswordError = document.getElementById("resetPasswordError");
const resetPasswordErrorText = document.getElementById("resetPasswordErrorText");

export function openResetPasswordModal() {
    closeAuthModalFunc();
    resetPasswordModal.classList.add("active");
    document.body.classList.add("menu-open");
}

export function initAuthModal() {
    document.getElementById("closeAuthModal").addEventListener("click", closeAuthModalFunc);
    authModal.addEventListener("click", (e) => { if (e.target === authModal) closeAuthModalFunc(); });
    tabLogin.addEventListener("click", () => switchAuthTab("login"));
    tabRegister.addEventListener("click", () => switchAuthTab("register"));

    document.getElementById("forgotPasswordLink").addEventListener("click", () => switchAuthTab("forgot"));
    document.getElementById("backToLoginLink").addEventListener("click", () => switchAuthTab("login"));

    document.getElementById("googleLoginBtn").addEventListener("click", signInWithGoogle);
    document.getElementById("googleRegisterBtn").addEventListener("click", signInWithGoogle);

    forgotPasswordForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("forgotEmail").value.trim().toLowerCase();
        if (!email) { showAuthError(t("errFillFields")); return; }

        const submitBtn = forgotPasswordForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + window.location.pathname + "?resetPassword=1"
        });
        submitBtn.disabled = false;

        if (error) {
            showAuthError(currentLang === "ar" ? "تعذّر إرسال الرابط، تأكد من صحة البريد" : "Couldn't send the link — check the email address");
            return;
        }
        showToast(currentLang === "ar" ? "تفقّد بريدك الإلكتروني لإعادة تعيين كلمة المرور 📩" : "Check your email for the reset link 📩");
        switchAuthTab("login");
    });

    resetPasswordForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const newPassword = document.getElementById("resetPasswordNew").value;
        resetPasswordError.classList.remove("show");
        if (!newPassword || newPassword.length < 6) {
            resetPasswordErrorText.textContent = currentLang === "ar" ? "لازم 6 أحرف على الأقل" : "Must be at least 6 characters";
            resetPasswordError.classList.add("show");
            return;
        }
        const submitBtn = resetPasswordForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
        submitBtn.disabled = false;

        if (error) {
            resetPasswordErrorText.textContent = currentLang === "ar" ? "تعذّر حفظ كلمة المرور، أعد المحاولة" : "Couldn't save the password — try again";
            resetPasswordError.classList.add("show");
            return;
        }
        resetPasswordModal.classList.remove("active");
        document.body.classList.remove("menu-open");
        // clean the URL so a page refresh doesn't reopen this modal
        window.history.replaceState({}, document.title, window.location.pathname);
        showToast(currentLang === "ar" ? "تم تحديث كلمة المرور بنجاح ✅" : "Password updated successfully ✅");
    });

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;
        if (!email || !password) { showAuthError(t("errFillFields")); return; }

        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        submitBtn.disabled = false;

        if (error || !data.user) {
            showAuthError(t("errInvalidLogin"));
            return;
        }
        await loadProfileIntoCache(data.user.id, data.user.email);
        closeAuthModalFunc();
        renderAccountNav();
        refreshAllCourseCards();
        showToast(`${t("toastWelcomeBack")}, ${getCurrentUser()?.name || ""} 👋`);
        goToPendingCourse();
    });

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim().toLowerCase();
        const password = document.getElementById("registerPassword").value;

        if (!name || !email || !password) { showAuthError(t("errFillFields")); return; }
        if (password.length < 6) { showAuthError(t("errPasswordShort")); return; }

        const submitBtn = registerForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        // Password hashing (bcrypt) happens entirely inside Supabase Auth's
        // server — the plain password is sent over HTTPS and never stored
        // or hashed by this front-end code.
        const { data, error } = await supabaseClient.auth.signUp({
            email, password,
            options: { data: { name } }
        });
        submitBtn.disabled = false;

        if (error) {
            const msg = /already|registered|exists/i.test(error.message) ? t("errEmailExists") : error.message;
            showAuthError(msg);
            return;
        }

        if (data.session) {
            // Email confirmation is disabled on this project -> signed in immediately.
            await loadProfileIntoCache(data.user.id, data.user.email);
            closeAuthModalFunc();
            renderAccountNav();
            refreshAllCourseCards();
            showToast(t("toastAccountCreated"));
            goToPendingCourse();
        } else {
            // Email confirmation is required before the account can log in.
            closeAuthModalFunc();
            showToast(currentLang === "ar"
                ? "تفقّد بريدك الإلكتروني لتأكيد الحساب قبل تسجيل الدخول"
                : "Check your email to confirm your account before logging in");
        }
    });
}
