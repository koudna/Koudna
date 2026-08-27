/* =========================================================
   SCROLL PROGRESS & BACK TO TOP
========================================================== */
export function initScrollTop() {
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
}
