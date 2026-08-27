/* =========================================================
   FULL COURSE PAGE
========================================================== */
import { getCurrentUser, isLoggedIn, updateCurrentUser } from "./auth-state.js";
import { catalog } from "../data.js";
import { t, currentLang } from "./i18n.js";
import { showToast } from "./toast.js";
import { openAuthModal } from "./auth-modal.js";
import { openLessonPlayer, isLessonUnlocked } from "./lesson-player.js";
import { refreshAllCourseCards } from "./course-card-sync.js";

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

export function setPendingCourse(courseId, lessonIndex) {
    pendingCourseId = courseId;
    pendingLessonIndex = lessonIndex;
}

const courseBrandIcons = {
    linux: `<img src="assets/icons/linux.png" alt="Kali Linux">`,
    javascript: `<img src="assets/icons/javascript.png" alt="JavaScript">`,
    computer: `<img src="assets/icons/cpp.png" alt="C++">`,
    python: `<i class="fa-brands fa-python"></i>`,
    web: `<i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3-alt"></i>`,
    data: `<i class="fa-solid fa-chart-column"></i>`
};

export function courseIconMarkup(courseId, large = false) {
    const icon = courseBrandIcons[courseId] || `<i class="fa-solid fa-book-open"></i>`;
    if (large) return icon;
    return `<span class="course-mini-icon">${icon}</span>`;
}

export function getCourseProgress(courseId) {
    const course = catalog[courseId];
    const user = getCurrentUser();
    const completed = user?.enrolled?.[courseId]?.completedLessons || [];
    const total = course?.lessons?.length || 0;
    return { completed, total, pct: total ? Math.round((completed.length / total) * 100) : 0 };
}

// Stage 5: keep the learner's resume point with the enrollment record.
export function getResumeLessonIndex(courseId) {
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

export function saveLessonPosition(courseId, index) {
    updateCurrentUser(u => {
        if (!u.enrolled) u.enrolled = {};
        if (!u.enrolled[courseId]) u.enrolled[courseId] = { completedLessons: [] };
        const rec = u.enrolled[courseId];
        if (!Array.isArray(rec.completedLessons)) rec.completedLessons = [];
        rec.lastLessonIndex = index;
        rec.lastLessonAt = Date.now();
    });
}

export function markLessonCompleted(courseId, index, moveToNext = true) {
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

export function openCoursePage(courseId) {
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
        if (!isLoggedIn()) { setPendingCourse(courseId, 0); openAuthModal('login'); return; }
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

export function closeCoursePage() {
    coursePage.classList.remove('active');
    coursePage.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    activeCourseId = null;
    refreshAllCourseCards();
}

export function openCourseLesson(courseId, index) {
    const course = catalog[courseId];
    if (!course || !course.lessons[index]) return;
    const user = getCurrentUser();
    if (!user) {
        setPendingCourse(courseId, index);
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

export function goToPendingCourse() {
    if (!pendingCourseId) return;
    const cid = pendingCourseId; const li = pendingLessonIndex;
    pendingCourseId = null; pendingLessonIndex = null;
    if (li !== null) openCourseLesson(cid, li); else openCoursePage(cid);
}

export function initCoursePage() {
    coursePageBack.addEventListener('click', closeCoursePage);

    document.querySelectorAll(".course-card[data-course] .course-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const card = link.closest(".course-card[data-course]");
            openCoursePage(card.dataset.course);
        });
    });
}
