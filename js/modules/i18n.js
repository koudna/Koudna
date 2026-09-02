/* =========================================================
   LANGUAGE / i18n
========================================================== */
import { translations } from "../data.js";
import { renderAccountNav } from "./account-modal.js";
import { refreshAllCourseCards } from "./course-card-sync.js";

export let currentLang = localStorage.getItem("kodna-lang") || "ar";

export function t(key) {
    return translations[currentLang][key] || key;
}

/* Given a target language, compute the URL of *this same page* under
   that language's /en prefix (or without it for Arabic). Keeps language
   and URL in sync so /en/... stays a real, crawlable, shareable page. */
function urlForLang(targetLang) {
    const path = location.pathname;
    const inEn = /^\/en(\/|$)/.test(path);
    const rest = path.replace(/^\/en/, "") || "/";
    if (targetLang === "en") return inEn ? path : "/en" + rest;
    return rest;
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
        const target = currentLang === "ar" ? "en" : "ar";
        location.href = urlForLang(target) + location.hash;
    });
}
