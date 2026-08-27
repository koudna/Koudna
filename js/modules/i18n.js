/* =========================================================
   LANGUAGE / i18n
========================================================== */
import { translations } from "../data.js";
import { renderAccountNav } from "./account-modal.js";
import { refreshAllCourseCards } from "./course-card-sync.js";
import { showToast } from "./toast.js";

export let currentLang = localStorage.getItem("kodna-lang") || "ar";

export function t(key) {
    return translations[currentLang][key] || key;
}

export function setLanguage(lang) {
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
    refreshAllCourseCards();
}

export function initLanguageToggle() {
    document.getElementById("langToggle").addEventListener("click", () => {
        setLanguage(currentLang === "ar" ? "en" : "ar");
        showToast(currentLang === "ar" ? "تم التغيير إلى اللغة العربية" : "Switched to English");
    });
}
