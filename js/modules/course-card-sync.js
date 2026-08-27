/* =========================================================
   COURSE CARD PROGRESS SYNC  (+ localized title / description / duration)
========================================================== */
import { getCurrentUser } from "./auth-state.js";
import { catalog } from "../data.js";
import { currentLang } from "./i18n.js";

export function refreshAllCourseCards() {
    const user = getCurrentUser();
    document.querySelectorAll(".course-card[data-course]").forEach(card => {
        const cid = card.dataset.course;
        const course = catalog[cid];
        if (!course) return;

        // Localized text pulled straight from the catalog (single source of truth).
        const titleEl = card.querySelector("h3");
        if (titleEl && course.name) titleEl.textContent = course.name[currentLang] || course.name.ar;

        const descEl = card.querySelector(":scope > p");
        if (descEl && course.description) descEl.textContent = course.description[currentLang] || course.description.ar;

        const hoursEl = card.querySelector(".course-hours");
        if (hoursEl && course.hours) hoursEl.textContent = course.hours[currentLang] || course.hours.ar;

        const lessonLabel = currentLang === "ar" ? "درس" : "Lessons";
        const lessonCount = card.querySelector(".lesson-count");

        // Courses still being written are marked and made non-interactive.
        if (course.comingSoon) {
            card.classList.add("is-coming-soon");
            if (!card.querySelector(".coming-soon-badge")) {
                const badge = document.createElement("div");
                badge.className = "coming-soon-badge";
                card.appendChild(badge);
            }
            card.querySelector(".coming-soon-badge").textContent = currentLang === "ar" ? "قريباً" : "Coming soon";

            const bar = card.querySelector(".progress span");
            const label = card.querySelector(".progress-percent");
            if (bar) bar.style.width = "0%";
            if (label) label.textContent = currentLang === "ar" ? "قريباً" : "Soon";
            if (lessonCount) lessonCount.innerHTML = `<i class="fa-solid fa-book-open"></i> ${course.lessons.length} ${lessonLabel}`;
            return;
        }

        let pct = 0;
        if (user && user.enrolled && user.enrolled[cid]) {
            const done = (user.enrolled[cid].completedLessons || []).length;
            pct = course.lessons.length ? Math.round((done / course.lessons.length) * 100) : 0;
        }
        const bar = card.querySelector(".progress span");
        const label = card.querySelector(".progress-percent");
        if (bar) bar.style.width = pct + "%";
        if (label) label.textContent = pct + "%";

        if (lessonCount) {
            lessonCount.innerHTML = `<i class="fa-solid fa-book-open"></i> ${course.lessons.length} ${lessonLabel}`;
        }
    });
}
