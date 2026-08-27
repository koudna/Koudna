/* =========================================================
   MOBILE MENU
========================================================== */
export function initMobileMenu() {
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
}
