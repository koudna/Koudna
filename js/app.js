    /* =========================================================
       SUPABASE CLIENT (real backend auth + database)
    ========================================================== */
    const SUPABASE_URL = "https://lhyhlcpwftnmkqmprhcb.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoeWhsY3B3ZnRubWtxbXByaGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczNjAyNzksImV4cCI6MjEwMjkzNjI3OX0.x12qm5TBi5uXYHEmeDjS4xJECybTkdYkMbR_aBQ3hpw";

    // Guard against the CDN script failing to load (slow/blocked network,
    // in-app browsers, ad blockers, etc). Without this guard, a failed CDN
    // load would throw immediately and silently stop the ENTIRE rest of
    // this script from running — breaking dark mode, language, icons-CSS
    // hookups, animations, everything — not just login. With the guard,
    // the whole site keeps working normally and only auth shows a clear
    // error if the backend is unreachable.
    const authOfflineError = {
        message: "تعذر الاتصال بخدمة التسجيل. جرّب فتح الصفحة في متصفح حقيقي (Safari/Chrome) بدل معاينة داخل التطبيق، وتأكد من اتصالك بالإنترنت."
    };
    const supabaseClient = (window.supabase && typeof window.supabase.createClient === "function")
        ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
        : {
            auth: {
                getSession: async () => ({ data: { session: null } }),
                onAuthStateChange: () => {},
                signInWithPassword: async () => ({ data: {}, error: authOfflineError }),
                signUp: async () => ({ data: {}, error: authOfflineError }),
                signOut: async () => {}
            },
            from: () => ({
                select: () => ({ eq: () => ({ single: async () => ({ data: null, error: authOfflineError }) }) }),
                update: () => ({ eq: () => Promise.resolve({ error: authOfflineError }) })
            })
        };


    let currentLang = localStorage.getItem("kodna-lang") || "ar";

    function t(key) {
        return translations[currentLang][key] || key;
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("kodna-lang", lang);
        const htmlRoot = document.getElementById("htmlRoot");
        htmlRoot.setAttribute("lang", lang);
        htmlRoot.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.getElementById("langToggle").querySelector("span").textContent = lang === "ar" ? "EN" : "AR";
        renderAccountNav();
    }

    document.getElementById("langToggle").addEventListener("click", () => {
        setLanguage(currentLang === "ar" ? "en" : "ar");
        showToast(currentLang === "ar" ? "تم التغيير إلى اللغة العربية" : "Switched to English");
    });

    /* =========================================================
       THEME TOGGLE
    ========================================================== */
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("kodna-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("kodna-theme", isDark ? "dark" : "light");
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    /* =========================================================
       MOBILE MENU
    ========================================================== */
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.setAttribute("aria-expanded", "false");
    if (mobileMenu.id) menuBtn.setAttribute("aria-controls", mobileMenu.id);

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
        const opened = mobileMenu.classList.contains("active");
        menuBtn.setAttribute("aria-expanded", String(opened));
        menuBtn.innerHTML = opened ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll(".mobile-menu a:not(#accountNavBtnMobile)").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    /* =========================================================
       SEARCH & FILTERS
    ========================================================== */
    const searchInput = document.getElementById("courseSearch");
    const courseCards = document.querySelectorAll(".course-card");
    const emptyState = document.getElementById("emptyState");
    let activeFilter = "all";

    function filterCourses() {
        const query = searchInput.value.trim().toLowerCase();
        let visible = 0;

        courseCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const level = card.dataset.level;
            const matchesSearch = title.includes(query);
            const matchesFilter = activeFilter === "all" || level === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.classList.remove("hidden");
                visible++;
            } else {
                card.classList.add("hidden");
            }
        });

        emptyState.style.display = visible === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", filterCourses);

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            activeFilter = button.dataset.filter;
            filterCourses();
        });
    });


    /* =========================================================
       AUTH & STATE MANAGEMENT (real backend: Supabase Auth + Postgres)
       Password hashing happens server-side inside Supabase (bcrypt),
       never in this file. We only keep a synchronous in-memory cache
       of the logged-in user's profile so the rest of the UI code
       (written for synchronous access) keeps working unchanged;
       every mutation is also persisted to the database in the background.
    ========================================================== */
    let currentUserCache = null; // { id, name, email, enrolled }
    let authReady = false;

    function getCurrentUser() {
        return currentUserCache;
    }
    function isLoggedIn() {
        return !!currentUserCache;
    }

    async function loadProfileIntoCache(userId, fallbackEmail) {
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
    function updateCurrentUser(mutatorFn) {
        if (!currentUserCache) return null;
        mutatorFn(currentUserCache);
        supabaseClient
            .from("profiles")
            .update({ enrolled: currentUserCache.enrolled, updated_at: new Date().toISOString() })
            .eq("id", currentUserCache.id)
            .then(({ error }) => { if (error) console.error("Progress sync failed:", error); });
        return currentUserCache;
    }

    async function initAuth() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session?.user) {
            await loadProfileIntoCache(session.user.id, session.user.email);
        }
        authReady = true;
        renderAccountNav();
        refreshAllCourseCards();
    }

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

    /* =========================================================
       AUTH MODAL UI
    ========================================================== */
    const authModal = document.getElementById("authModal");
    const tabLogin = document.getElementById("tabLogin");
    const tabRegister = document.getElementById("tabRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const authError = document.getElementById("authError");
    const authErrorText = document.getElementById("authErrorText");

    function openAuthModal(startTab) {
        showAuthError(null);
        loginForm.reset();
        registerForm.reset();
        switchAuthTab(startTab || "login");
        authModal.classList.add("active");
        document.body.classList.add("menu-open");
    }
    function closeAuthModalFunc() {
        authModal.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
    function switchAuthTab(tab) {
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
    function showAuthError(msg) {
        if (!msg) {
            authError.classList.remove("show");
            authErrorText.textContent = "";
        } else {
            authError.classList.add("show");
            authErrorText.textContent = msg;
        }
    }

    document.getElementById("closeAuthModal").addEventListener("click", closeAuthModalFunc);
    authModal.addEventListener("click", (e) => { if (e.target === authModal) closeAuthModalFunc(); });
    tabLogin.addEventListener("click", () => switchAuthTab("login"));
    tabRegister.addEventListener("click", () => switchAuthTab("register"));

    document.getElementById("forgotPasswordLink").addEventListener("click", () => switchAuthTab("forgot"));
    document.getElementById("backToLoginLink").addEventListener("click", () => switchAuthTab("login"));

    /* Sign in with Google (OAuth via Supabase) */
    async function signInWithGoogle() {
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

    /* Reset password (landing from the email link) */
    const resetPasswordModal = document.getElementById("resetPasswordModal");
    const resetPasswordForm = document.getElementById("resetPasswordForm");
    const resetPasswordError = document.getElementById("resetPasswordError");
    const resetPasswordErrorText = document.getElementById("resetPasswordErrorText");

    function openResetPasswordModal() {
        closeAuthModalFunc();
        resetPasswordModal.classList.add("active");
        document.body.classList.add("menu-open");
    }

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

    function goToPendingCourse() {
        if (!pendingCourseId) return;
        const cid = pendingCourseId; const li = pendingLessonIndex;
        pendingCourseId = null; pendingLessonIndex = null;
        if (li !== null) openCourseLesson(cid, li); else openCoursePage(cid);
    }

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
        showToast(`${t("toastWelcomeBack")}, ${currentUserCache?.name || ""} 👋`);
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

    /* =========================================================
       ACCOUNT MODAL UI
    ========================================================== */
    const accountModal = document.getElementById("accountModal");
    document.getElementById("closeAccountModal").addEventListener("click", closeAccountModalFunc);
    accountModal.addEventListener("click", (e) => { if (e.target === accountModal) closeAccountModalFunc(); });
    document.getElementById("logoutBtn").addEventListener("click", async () => {
        await supabaseClient.auth.signOut();
        currentUserCache = null;
        closeAccountModalFunc();
        renderAccountNav();
        refreshAllCourseCards();
        showToast(t("toastLoggedOut"));
    });

    function closeAccountModalFunc() {
        accountModal.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    function openAccountModal() {
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

    function renderAccountNav() {
        const user = getCurrentUser();
        const label = user ? user.name.split(" ")[0] : t("navAccount");
        document.getElementById("accountNavBtn").textContent = label;
        document.getElementById("accountNavBtnMobile").textContent = label;
    }

    function handleAccountNavClick(e) {
        e.preventDefault();
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        if (isLoggedIn()) openAccountModal();
        else openAuthModal("login");
    }
    document.getElementById("accountNavBtn").addEventListener("click", handleAccountNavClick);
    document.getElementById("accountNavBtnMobile").addEventListener("click", handleAccountNavClick);

    /* =========================================================
       FULL COURSE PAGE
    ========================================================== */
    const coursePage = document.getElementById("coursePage");
    const coursePageBack = document.getElementById("coursePageBack");
    const coursePageIcon = document.getElementById("coursePageIcon");
    const coursePageTitle = document.getElementById("coursePageTitle");
    const coursePageDesc = document.getElementById("coursePageDesc");
    const coursePageLessonCount = document.getElementById("coursePageLessonCount");
    const coursePageLessonLabel = document.getElementById("coursePageLessonLabel");
    const coursePageProgressText = document.getElementById("coursePageProgressText");
    const coursePageProgressBar = document.getElementById("coursePageProgressBar");
    const coursePageLessons = document.getElementById("coursePageLessons");
    const coursePageIcons = document.getElementById("coursePageIcons");
    const coursePageSubtitle = document.getElementById("coursePageSubtitle");
    const courseContinueBtn = document.getElementById("courseContinueBtn");
    let activeCourseId = null;
    let pendingCourseId = null;
    let pendingLessonIndex = null;

    const courseBrandIcons = {
        linux: `<img src="${'data:image/png;base64,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'}" alt="Kali Linux">`,
        javascript: `<img src="${'data:image/png;base64,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'}" alt="JavaScript">`,
        computer: `<img src="${'data:image/png;base64,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'}" alt="C++">`,
        python: `<i class="fa-brands fa-python"></i>`,
        web: `<i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3-alt"></i>`,
        data: `<i class="fa-solid fa-chart-column"></i>`
    };

    function courseIconMarkup(courseId, large = false) {
        const icon = courseBrandIcons[courseId] || `<i class="fa-solid fa-book-open"></i>`;
        if (large) return icon;
        return `<span class="course-mini-icon">${icon}</span>`;
    }

    function getCourseProgress(courseId) {
        const course = catalog[courseId];
        const user = getCurrentUser();
        const completed = user?.enrolled?.[courseId]?.completedLessons || [];
        const total = course?.lessons?.length || 0;
        return { completed, total, pct: total ? Math.round((completed.length / total) * 100) : 0 };
    }

    // Stage 5: keep the learner's resume point with the enrollment record.
    function getResumeLessonIndex(courseId) {
        const course = catalog[courseId];
        if (!course) return 0;
        const record = getCurrentUser()?.enrolled?.[courseId];
        if (!record) return 0;
        const completed = Array.isArray(record.completedLessons) ? record.completedLessons : [];
        const firstIncomplete = course.lessons.findIndex((_, i) => !completed.includes(i));
        if (firstIncomplete === -1) return Math.max(0, course.lessons.length - 1);
        const saved = Number.isInteger(record.lastLessonIndex) ? record.lastLessonIndex : firstIncomplete;
        if (saved >= 0 && saved < course.lessons.length && !completed.includes(saved) && isLessonUnlocked(completed, saved)) return saved;
        return firstIncomplete;
    }

    function saveLessonPosition(courseId, index) {
        updateCurrentUser(u => {
            if (!u.enrolled) u.enrolled = {};
            if (!u.enrolled[courseId]) u.enrolled[courseId] = { completedLessons: [] };
            const rec = u.enrolled[courseId];
            if (!Array.isArray(rec.completedLessons)) rec.completedLessons = [];
            rec.lastLessonIndex = index;
            rec.lastLessonAt = Date.now();
        });
    }

    function markLessonCompleted(courseId, index, moveToNext = true) {
        const course = catalog[courseId];
        if (!course || index < 0 || index >= course.lessons.length) return;
        updateCurrentUser(u => {
            if (!u.enrolled) u.enrolled = {};
            if (!u.enrolled[courseId]) u.enrolled[courseId] = { completedLessons: [] };
            const rec = u.enrolled[courseId];
            if (!Array.isArray(rec.completedLessons)) rec.completedLessons = [];
            if (!rec.completedLessons.includes(index)) rec.completedLessons.push(index);
            rec.completedLessons = [...new Set(rec.completedLessons)]
                .filter(i => Number.isInteger(i) && i >= 0 && i < course.lessons.length)
                .sort((a,b) => a-b);
            const next = index + 1;
            rec.lastLessonIndex = moveToNext && next < course.lessons.length ? next : index;
            rec.lastLessonAt = Date.now();
        });
    }

    function openCourseModal(courseId) {
        openCoursePage(courseId);
    }

    function openCoursePage(courseId) {
        const course = catalog[courseId];
        if (!course) return;
        // Courses that are still being written are not open yet.
        if (course.comingSoon) {
            showToast(currentLang === "ar"
                ? "هذا المسار قيد الإعداد وسيتوفر قريباً 🚧"
                : "This path is being built and will be available soon 🚧");
            return;
        }
        activeCourseId = courseId;
        const progress = getCourseProgress(courseId);

        coursePageIcon.innerHTML = courseIconMarkup(courseId, true);
        coursePageTitle.textContent = course.name[currentLang];
        coursePageDesc.textContent = course.description?.[currentLang] || (currentLang === 'ar' ? 'مسار متكامل للتعلم خطوة بخطوة مع دروس عملية واختبارات.' : 'A complete learning path with practical lessons and quizzes.');
        coursePageLessonCount.textContent = progress.total;
        coursePageLessonLabel.textContent = currentLang === 'ar' ? 'درس' : 'Lessons';
        coursePageProgressText.textContent = progress.pct + '%';
        coursePageProgressBar.style.width = progress.pct + '%';
        coursePageIcons.innerHTML = `<span class="course-mini-icon">${courseIconMarkup(courseId, true)}</span><span class="course-mini-icon"><i class="fa-solid fa-code"></i></span><span class="course-mini-icon"><i class="fa-solid fa-circle-question"></i></span>`;

        const hasEnrollment = !!getCurrentUser()?.enrolled?.[courseId];
        const resumeIndex = hasEnrollment ? getResumeLessonIndex(courseId) : 0;
        const isFinished = hasEnrollment && progress.total > 0 && progress.completed.length >= progress.total;
        courseContinueBtn.disabled = false;
        courseContinueBtn.querySelector('span').textContent = !hasEnrollment ? t('courseStart') : (isFinished ? t('courseFinished') : t('courseContinue'));
        courseContinueBtn.querySelector('i').className = `fa-solid ${isFinished ? 'fa-rotate-right' : 'fa-play'}`;
        coursePageSubtitle.textContent = hasEnrollment
            ? (isFinished ? (currentLang === 'ar' ? 'أكملت المسار. يمكنك مراجعة الدروس في أي وقت.' : 'You completed this path. You can review the lessons anytime.') : (currentLang === 'ar' ? `نقطة المتابعة: ${course.lessons[resumeIndex]?.title?.ar || 'الدرس التالي'}` : `Resume: ${course.lessons[resumeIndex]?.title?.en || 'next lesson'}`))
            : (currentLang === 'ar' ? 'ابدأ من الدرس الأول وتقدم خطوة بخطوة.' : 'Start from the first lesson and progress step by step.');
        courseContinueBtn.onclick = () => {
            if (!isLoggedIn()) { pendingCourseId = courseId; pendingLessonIndex = 0; openAuthModal('login'); return; }
            openCourseLesson(courseId, getResumeLessonIndex(courseId));
        };

        coursePageLessons.innerHTML = '';
        course.lessons.forEach((lesson, i) => {
            const done = progress.completed.includes(i);
            const unlocked = isLessonUnlocked(progress.completed, i);
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'course-lesson-card' + (done ? ' done' : '') + (i === resumeIndex && !isFinished ? ' active' : '') + (!unlocked ? ' locked' : '');
            const title = lesson.title[currentLang];
            const description = lesson.short?.[currentLang] || (currentLang === 'ar' ? 'درس عملي مع شرح وأمثلة واختبار قصير.' : 'Practical lesson with examples and a short quiz.');
            item.innerHTML = `
                <span class="course-lesson-num">${done ? '<i class="fa-solid fa-check"></i>' : i + 1}</span>
                <span class="course-lesson-info"><strong>${title}</strong><span>${description}</span></span>
                <span class="course-lesson-action"><i class="fa-solid ${done ? 'fa-circle-check' : unlocked ? 'fa-play' : 'fa-lock'}"></i></span>
            `;
            item.addEventListener('click', () => openCourseLesson(courseId, i));
            coursePageLessons.appendChild(item);
        });

        coursePage.classList.add('active');
        coursePage.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
        window.scrollTo(0, 0);
    }

    function closeCoursePage() {
        coursePage.classList.remove('active');
        coursePage.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
        activeCourseId = null;
        refreshAllCourseCards();
    }

    function openCourseLesson(courseId, index) {
        const course = catalog[courseId];
        if (!course || !course.lessons[index]) return;
        const user = getCurrentUser();
        if (!user) {
            pendingCourseId = courseId;
            pendingLessonIndex = index;
            openAuthModal('login');
            return;
        }
        if (!user.enrolled?.[courseId]) {
            updateCurrentUser(u => {
                if (!u.enrolled) u.enrolled = {};
                if (!u.enrolled[courseId]) u.enrolled[courseId] = { completedLessons: [] };
            });
        }
        const completed = getCurrentUser().enrolled[courseId].completedLessons || [];
        if (!isLessonUnlocked(completed, index)) {
            showToast(t('lessonLocked'));
            return;
        }
        saveLessonPosition(courseId, index);
        // Close the course page before opening the lesson player.
        // Keep the page state explicit so mobile/iOS cannot show both layers.
        closeCoursePage();
        coursePage.classList.remove('active');
        coursePage.setAttribute('aria-hidden', 'true');
        openLessonPlayer(courseId, index);
    }

    function joinCourse() {
        if (!activeCourseId) return;
        openCourseLesson(activeCourseId, 0);
    }

    coursePageBack.addEventListener('click', closeCoursePage);

    /* =========================================================
       COURSE CARD PROGRESS SYNC
    ========================================================== */
    function refreshAllCourseCards() {
        const user = getCurrentUser();
        document.querySelectorAll(".course-card[data-course]").forEach(card => {
            const cid = card.dataset.course;
            const course = catalog[cid];

            // Courses still being written are marked and made non-interactive.
            if (course && course.comingSoon) {
                card.classList.add("is-coming-soon");
                if (!card.querySelector(".coming-soon-badge")) {
                    const badge = document.createElement("div");
                    badge.className = "coming-soon-badge";
                    badge.textContent = currentLang === "ar" ? "قريباً" : "Coming soon";
                    card.appendChild(badge);
                }
                const bar = card.querySelector(".progress span");
                const label = card.querySelector(".progress-percent");
                if (bar) bar.style.width = "0%";
                if (label) label.textContent = currentLang === "ar" ? "قريباً" : "Soon";
                return;
            }

            let pct = 0;
            if (user && user.enrolled && user.enrolled[cid] && course) {
                const done = (user.enrolled[cid].completedLessons || []).length;
                pct = course.lessons.length ? Math.round((done / course.lessons.length) * 100) : 0;
            }
            const bar = card.querySelector(".progress span");
            const label = card.querySelector(".progress-percent");
            if (bar) bar.style.width = pct + "%";
            if (label) label.textContent = pct + "%";

            const lessonCount = card.querySelector(".lesson-count");
            if (lessonCount && course) {
                const lessonLabel = currentLang === "ar" ? "درس" : "Lessons";
                lessonCount.innerHTML = `<i class="fa-solid fa-book-open"></i> ${course.lessons.length} ${lessonLabel}`;
            }
        });
    }

    /* =========================================================
       LESSON PLAYER
    ========================================================== */
    const lessonOverlay = document.getElementById("lessonOverlay");
    const lessonSidebar = document.getElementById("lessonSidebar");
    const lessonNavList = document.getElementById("lessonNavList");
    const lessonContentWrap = document.getElementById("lessonContentWrap");
    const lessonMain = document.getElementById("lessonMain");
    const lessonReadProgressBar = document.querySelector("#lessonReadProgress span");

    function updateLessonReadProgress() {
        if (!lessonMain || !lessonReadProgressBar) return;
        const scrollable = lessonMain.scrollHeight - lessonMain.clientHeight;
        const pct = scrollable > 0 ? Math.min(100, Math.max(0, (lessonMain.scrollTop / scrollable) * 100)) : 100;
        lessonReadProgressBar.style.width = pct + "%";
    }
    function resetLessonReadProgress() {
        if (lessonMain) lessonMain.scrollTop = 0;
        if (lessonReadProgressBar) lessonReadProgressBar.style.width = "0%";
    }
    if (lessonMain) lessonMain.addEventListener("scroll", updateLessonReadProgress, { passive: true });

    let currentLessonCourseId = null;
    let currentLessonIndex = 0;

    let lessonLastFocusedElement = null;

    function openLessonPlayer(courseId, requestedIndex = null) {
        if (!isLoggedIn()) { pendingCourseId = courseId; pendingLessonIndex = requestedIndex; openAuthModal("login"); return; }
        const user = getCurrentUser();
        if (!user.enrolled || !user.enrolled[courseId]) {
            updateCurrentUser(u => { if (!u.enrolled) u.enrolled = {}; if (!u.enrolled[courseId]) u.enrolled[courseId] = { completedLessons: [] }; });
        }
        lessonLastFocusedElement = document.activeElement;
        currentLessonCourseId = courseId;
        const completed = getCurrentUser().enrolled[courseId].completedLessons || [];
        const course = catalog[courseId];
        let idx = Number.isInteger(requestedIndex) ? requestedIndex : course.lessons.findIndex((_, i) => !completed.includes(i));
        if (idx === -1) idx = course.lessons.length - 1;
        if (!isLessonUnlocked(completed, idx)) idx = course.lessons.findIndex((_, i) => !completed.includes(i));
        if (idx === -1) idx = course.lessons.length - 1;
        currentLessonIndex = idx;
        saveLessonPosition(courseId, currentLessonIndex);

        // Hard-switch from the course view to the lesson view.
        // Do this before rendering so there is never a frame where both are visible.
        coursePage.classList.remove('active');
        coursePage.setAttribute('aria-hidden', 'true');
        document.body.classList.add('lesson-open');
        document.body.classList.add('menu-open');
        lessonOverlay.classList.add('active');
        lessonOverlay.setAttribute('aria-hidden', 'false');
        renderLessonSidebar();
        renderLessonContent();
        window.scrollTo(0, 0);
        const heading = lessonContentWrap.querySelector("h1");
        if (heading) {
            heading.setAttribute("tabindex", "-1");
            heading.focus({ preventScroll: true });
        }
    }

    function closeLessonPlayer() {
        const cid = currentLessonCourseId;
        lessonOverlay.classList.remove("active");
        lessonOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lesson-open');
        document.body.classList.remove("menu-open");
        refreshAllCourseCards();
        if (cid) openCoursePage(cid);
        if (lessonLastFocusedElement && typeof lessonLastFocusedElement.focus === "function") {
            lessonLastFocusedElement.focus({ preventScroll: true });
        }
        lessonLastFocusedElement = null;
    }

    document.getElementById("lessonBackBtn").addEventListener("click", closeLessonPlayer);
    const lessonMenuToggle = document.getElementById("lessonMenuToggle");
    lessonMenuToggle.setAttribute("aria-expanded", "false");
    lessonMenuToggle.setAttribute("aria-controls", "lessonSidebar");
    lessonMenuToggle.addEventListener("click", () => {
        lessonSidebar.classList.toggle("open");
        lessonMenuToggle.setAttribute("aria-expanded", String(lessonSidebar.classList.contains("open")));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (lessonSidebar.classList.contains("open")) {
            lessonSidebar.classList.remove("open");
            lessonMenuToggle.setAttribute("aria-expanded", "false");
            return;
        }
        if (lessonOverlay.classList.contains("active")) {
            closeLessonPlayer();
            return;
        }
        if (coursePage.classList.contains("active")) {
            closeCoursePage();
        }
    });

    function isLessonUnlocked(completed, index) {
        if (index === 0) return true;
        return completed.includes(index - 1);
    }

    function renderLessonSidebar() {
        const course = catalog[currentLessonCourseId];
        const user = getCurrentUser();
        const completed = user.enrolled[currentLessonCourseId].completedLessons || [];
        const pct = course.lessons.length ? Math.round((completed.length / course.lessons.length) * 100) : 0;

        document.getElementById("lessonSidebarTitle").textContent = course.name[currentLang];
        document.getElementById("lessonSidebarProgress").textContent =
            `${completed.length} ${t("lessonOf")} ${course.lessons.length} ${t("lessonsCompleted")}`;
        const ring = document.getElementById("lessonProgressRing");
        ring.style.setProperty("--ring-pct", (pct * 3.6) + "deg");
        document.getElementById("lessonProgressRingText").textContent = pct + "%";

        lessonNavList.innerHTML = "";
        course.lessons.forEach((lesson, i) => {
            const done = completed.includes(i);
            const unlocked = isLessonUnlocked(completed, i);
            const btn = document.createElement("button");
            btn.className = "lesson-nav-item" + (done ? " done" : "") + (i === currentLessonIndex ? " active" : "") + (!unlocked ? " locked" : "");
            btn.innerHTML = `<span class="lesson-nav-check">${done ? '<i class="fa-solid fa-check"></i>' : (i + 1)}</span><span>${lesson.title[currentLang]}</span>`;
            btn.addEventListener("click", () => {
                if (!unlocked) { showToast(t("lessonLocked")); return; }
                currentLessonIndex = i;
                saveLessonPosition(currentLessonCourseId, currentLessonIndex);
                lessonSidebar.classList.remove("open");
                renderLessonSidebar();
                renderLessonContent();
            });
            lessonNavList.appendChild(btn);
        });

        const activeItem = lessonNavList.querySelector(".lesson-nav-item.active");
        if (activeItem) activeItem.scrollIntoView({ block: "nearest" });
    }

    function estimateReadMinutes(text, hasCode) {
        const words = (text || "").replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
        const minutes = Math.max(1, Math.round(words / 180) + (hasCode ? 1 : 0));
        return minutes;
    }

    function renderLessonContent() {
        const course = catalog[currentLessonCourseId];
        const lesson = course.lessons[currentLessonIndex];
        const user = getCurrentUser();
        const completed = user.enrolled[currentLessonCourseId].completedLessons || [];
        const isDone = completed.includes(currentLessonIndex);
        const unlocked = isLessonUnlocked(completed, currentLessonIndex);

        if (!unlocked) {
            lessonContentWrap.innerHTML = `<div class="lesson-locked-msg"><i class="fa-solid fa-lock"></i>${t("lessonLocked")}</div>`;
            return;
        }

        const bodyText = lesson.body?.[currentLang] || lesson.body?.ar || '';
        // Code blocks are stored inside body.code in the catalog data.
        const codeText = lesson.code || lesson.body?.code || '';
        const readMinutes = estimateReadMinutes(bodyText, !!codeText);
        const readTimeLabel = currentLang === 'ar' ? `${readMinutes} دقائق قراءة` : `${readMinutes} min read`;

        let html = `
            <div class="lesson-meta-row">
                <div class="lesson-eyebrow" style="margin-bottom:0;">${course.name[currentLang]} · ${currentLang === 'ar' ? 'الدرس' : 'Lesson'} ${currentLessonIndex + 1}</div>
                <span class="lesson-read-time"><i class="fa-regular fa-clock"></i> ${readTimeLabel}</span>
            </div>
            <h1>${lesson.title[currentLang]}</h1>
            <div class="lesson-body">${bodyText}</div>
        `;
        if (codeText) {
            const langLabel = currentLessonCourseId === "python" ? "Python"
                : currentLessonCourseId === "javascript" ? "JavaScript"
                : currentLessonCourseId === "web" ? "HTML/CSS"
                : currentLessonCourseId === "linux" ? "Bash"
                : currentLessonCourseId === "data" ? "Python"
                : "Code";
            html += `
                <div class="lesson-code-card">
                    <div class="lesson-code-header">
                        <span class="lesson-code-lang"><span class="lesson-code-dots"><span></span><span></span><span></span></span> ${langLabel}</span>
                        <button type="button" class="lesson-code-copy" id="lessonCodeCopyBtn"><i class="fa-regular fa-copy"></i><span>${currentLang === 'ar' ? 'نسخ' : 'Copy'}</span></button>
                    </div>
                    <div class="lesson-code">${codeText}</div>
                </div>
            `;
        }

        if (lesson.quiz) {
            const q = lesson.quiz.q[currentLang];
            const opts = lesson.quiz.options[currentLang];
            const markers = currentLang === 'ar' ? ["أ", "ب", "ج", "د"] : ["A", "B", "C", "D"];
            html += `
                <div class="lesson-quiz" id="quizBox">
                    <h4><i class="fa-solid fa-circle-question" style="color:var(--primary);"></i> ${t("quizCheck")}: ${q}</h4>
                    <div id="quizOptions">
                        ${opts.map((opt, i) => `<div class="quiz-option" data-index="${i}"><span class="quiz-option-marker">${markers[i] || (i + 1)}</span><span>${opt}</span></div>`).join("")}
                    </div>
                    <div class="quiz-feedback" id="quizFeedback"></div>
                </div>
            `;
        }

        html += `
            <div class="lesson-footer-nav">
                <button class="btn btn-ghost" id="prevLessonBtn" ${currentLessonIndex === 0 ? "disabled" : ""}>
                    <i class="fa-solid fa-arrow-right"></i> ${t("btnPrevLesson")}
                </button>
                <button class="btn ${isDone ? 'btn-ghost' : 'btn-success'}" id="completeLessonBtn" ${isDone ? "disabled" : ""}>
                    ${isDone ? t("btnCompleted") : t("btnCompleteLesson")} <i class="fa-solid fa-check"></i>
                </button>
                <button class="btn btn-primary" id="nextLessonBtn" ${currentLessonIndex === course.lessons.length - 1 ? "disabled" : ""}>
                    ${t("btnNextLesson")} <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>
        `;

        const nextLesson = course.lessons[currentLessonIndex + 1];
        if (nextLesson) {
            html += `
                <div class="lesson-up-next" id="lessonUpNextCard">
                    <div class="lesson-up-next-icon"><i class="fa-solid fa-arrow-${currentLang === 'ar' ? 'left' : 'right'}"></i></div>
                    <div class="lesson-up-next-info">
                        <div class="lesson-up-next-label">${currentLang === 'ar' ? 'الدرس القادم' : 'Up next'}</div>
                        <div class="lesson-up-next-title">${nextLesson.title[currentLang]}</div>
                    </div>
                </div>
            `;
        }

        lessonContentWrap.innerHTML = html;
        resetLessonReadProgress();

        // Copy-code button
        const copyBtn = document.getElementById("lessonCodeCopyBtn");
        if (copyBtn) {
            copyBtn.addEventListener("click", async () => {
                const codeEl = lessonContentWrap.querySelector(".lesson-code");
                const rawText = codeEl ? codeEl.textContent : "";
                try {
                    await navigator.clipboard.writeText(rawText);
                    copyBtn.classList.add("copied");
                    copyBtn.querySelector("span").textContent = currentLang === 'ar' ? 'تم النسخ' : 'Copied';
                    setTimeout(() => {
                        copyBtn.classList.remove("copied");
                        copyBtn.querySelector("span").textContent = currentLang === 'ar' ? 'نسخ' : 'Copy';
                    }, 1800);
                } catch (e) { /* clipboard unavailable, ignore silently */ }
            });
        }

        // Up next card click
        const upNextCard = document.getElementById("lessonUpNextCard");
        if (upNextCard) {
            upNextCard.addEventListener("click", () => {
                document.getElementById("nextLessonBtn").click();
            });
        }

        // Quiz interaction
        if (lesson.quiz) {
            const optionsEls = lessonContentWrap.querySelectorAll(".quiz-option");
            const feedbackEl = document.getElementById("quizFeedback");
            const explanation = lesson.quiz.explanation?.[currentLang] || lesson.quiz.explanation?.ar || "";
            optionsEls.forEach(el => {
                el.addEventListener("click", () => {
                    if (feedbackEl.dataset.answered === "true") return;
                    const idx = Number(el.dataset.index);
                    const correct = idx === lesson.quiz.correct;
                    if (correct) {
                        el.classList.add("correct");
                        feedbackEl.textContent = t("quizCorrect");
                        feedbackEl.style.color = "var(--success)";
                        feedbackEl.classList.add("show");
                        feedbackEl.dataset.answered = "true";
                        // Show the explanation once the learner gets it right
                        if (explanation) appendQuizExplanation(explanation);
                    } else {
                        el.classList.add("wrong");
                        feedbackEl.textContent = t("quizWrong");
                        feedbackEl.style.color = "var(--danger)";
                        feedbackEl.classList.add("show");
                    }
                });
            });
        }

        function appendQuizExplanation(text) {
            const box = document.getElementById("quizBox");
            if (!box || box.querySelector(".quiz-explanation")) return;
            const div = document.createElement("div");
            div.className = "quiz-explanation";
            div.innerHTML = `<i class="fa-solid fa-lightbulb"></i><span>${text}</span>`;
            box.appendChild(div);
        }

        document.getElementById("prevLessonBtn").addEventListener("click", () => {
            if (currentLessonIndex > 0) {
                currentLessonIndex--;
                saveLessonPosition(currentLessonCourseId, currentLessonIndex);
                renderLessonSidebar();
                renderLessonContent();
            }
        });
        document.getElementById("nextLessonBtn").addEventListener("click", () => {
            const currentUser = getCurrentUser();
            if (!currentUser || !currentUser.enrolled?.[currentLessonCourseId]) return;

            const record = currentUser.enrolled[currentLessonCourseId];
            const completed = record.completedLessons || [];
            const nextIndex = currentLessonIndex + 1;

            if (nextIndex >= course.lessons.length) return;

            // Stage 5: moving forward completes the current lesson and saves the resume point.
            markLessonCompleted(currentLessonCourseId, currentLessonIndex, true);

            const updatedCompleted = getCurrentUser().enrolled[currentLessonCourseId].completedLessons || [];
            if (!isLessonUnlocked(updatedCompleted, nextIndex)) {
                showToast(t("lessonLocked"));
                return;
            }

            currentLessonIndex = nextIndex;
            saveLessonPosition(currentLessonCourseId, currentLessonIndex);
            renderLessonSidebar();
            renderLessonContent();
            lessonMain.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.getElementById("completeLessonBtn").addEventListener("click", () => {
            markLessonCompleted(currentLessonCourseId, currentLessonIndex, true);
            renderLessonSidebar();
            renderLessonContent();
            refreshAllCourseCards();
            showToast(currentLang === 'ar' ? 'أحسنت! تم إكمال الدرس ✓' : 'Great! Lesson completed ✓');
        });
    }

    /* =========================================================
       FAQ ACCORDION
    ========================================================== */
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const wasActive = item.classList.contains("active");
            document.querySelectorAll(".faq-item").forEach(faq => faq.classList.remove("active"));
            if (!wasActive) item.classList.add("active");
        });
    });

    /* =========================================================
       TOAST NOTIFICATIONS
    ========================================================== */
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    let toastTimer;

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    /* =========================================================
       SCROLL PROGRESS & BACK TO TOP
    ========================================================== */
    const scrollProgress = document.getElementById("scrollProgress");
    const backTop = document.getElementById("backTop");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / documentHeight) * 100;
        scrollProgress.style.width = progress + "%";

        if (scrollTop > 500) {
            backTop.classList.add("visible");
        } else {
            backTop.classList.remove("visible");
        }
    });

    backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* =========================================================
       REVEAL ON SCROLL & STATS ANIMATION
    ========================================================== */
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => revealObserver.observe(element));

    const counters = document.querySelectorAll("[data-count]");
    let countersStarted = false;

    function animateCounters() {
        if (countersStarted) return;
        countersStarted = true;
        counters.forEach(counter => {
            const target = Number(counter.dataset.count);
            let current = 0;
            const stepTime = Math.max(Math.floor(1400 / target), 10);
            const timer = setInterval(() => {
                current += Math.ceil(target / 80);
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = current.toLocaleString(currentLang === 'ar' ? "ar" : "en-US");
            }, stepTime);
        });
    }

    const statsSection = document.querySelector(".stats-section");
    const statsObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateCounters();
            statsObserver.disconnect();
        }
    }, { threshold: .3 });

    statsObserver.observe(statsSection);

    /* =========================================================
       INIT
    ========================================================== */
    setLanguage(currentLang);
    refreshAllCourseCards();
    initAuth(); // restores the logged-in session (if any) from Supabase

    setTimeout(() => {
        showToast(currentLang === 'ar' ? "مرحباً بك في كودنا 👋 ابدأ رحلتك التعليمية!" : "Welcome to Kodna 👋 Start your learning journey!");
    }, 1800);
