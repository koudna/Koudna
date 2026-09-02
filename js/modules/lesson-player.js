/* =========================================================
   LESSON PLAYER
========================================================== */
import { isLoggedIn, getCurrentUser, updateCurrentUser } from "./auth-state.js";
import { catalog } from "../data.js";
import { currentLang, t } from "./i18n.js";
import { showToast } from "./toast.js";
import { openAuthModal } from "./auth-modal.js";
import {
    closeCoursePage,
    openCoursePage,
    saveLessonPosition,
    markLessonCompleted,
    setPendingCourse
} from "./course-page.js";
import { refreshAllCourseCards } from "./course-card-sync.js";

const coursePage = document.getElementById("coursePage");
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

let currentLessonCourseId = null;
let currentLessonIndex = 0;

let lessonLastFocusedElement = null;

export function isLessonUnlocked(completed, index) {
    if (index === 0) return true;
    return completed.includes(index - 1);
}

export function openLessonPlayer(courseId, requestedIndex = null) {
    if (!isLoggedIn()) { setPendingCourse(courseId, requestedIndex); openAuthModal("login"); return; }
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

export function closeLessonPlayer() {
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

function appendQuizExplanation(text) {
    const box = document.getElementById("quizBox");
    if (!box || box.querySelector(".quiz-explanation")) return;
    const div = document.createElement("div");
    div.className = "quiz-explanation";
    div.innerHTML = `<i class="fa-solid fa-lightbulb"></i><span>${text}</span>`;
    box.appendChild(div);
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
    // Code blocks: `code` is either a bilingual { ar, en } object or (legacy)
    // a plain string shared by both languages.
    const codeText = (typeof lesson.code === 'object' && lesson.code !== null)
        ? (lesson.code[currentLang] || lesson.code.ar || '')
        : (lesson.code || lesson.body?.code || '');
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

export function initLessonPlayer() {
    if (lessonMain) lessonMain.addEventListener("scroll", updateLessonReadProgress, { passive: true });

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
}
