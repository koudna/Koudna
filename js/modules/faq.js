/* =========================================================
   FAQ ACCORDION
========================================================== */
export function initFaqAccordion() {
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const wasActive = item.classList.contains("active");
            document.querySelectorAll(".faq-item").forEach(faq => faq.classList.remove("active"));
            if (!wasActive) item.classList.add("active");
        });
    });
}
