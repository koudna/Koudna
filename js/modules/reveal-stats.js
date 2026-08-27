/* =========================================================
   REVEAL ON SCROLL & STATS ANIMATION
========================================================== */
import { currentLang } from "./i18n.js";

export function initRevealAndStats() {
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
}
