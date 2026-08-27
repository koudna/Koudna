/* =========================================================
   COURSE CARD PROGRESS SYNC
========================================================== */
import { getCurrentUser } from "./auth-state.js";
import { catalog } from "../data.js";
import { currentLang } from "./i18n.js";

export function refreshAllCourseCards() {
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
