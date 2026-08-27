import { initLanguageToggle, setLanguage, currentLang } from "./modules/i18n.js";
import { initMobileMenu } from "./modules/mobile-menu.js";
import { initSearchFilters } from "./modules/search-filters.js";
import { initAuthStateListener, initAuth } from "./modules/auth-state.js";
import { initAuthModal } from "./modules/auth-modal.js";
import { initAccountModal } from "./modules/account-modal.js";
import { initCoursePage } from "./modules/course-page.js";
import { refreshAllCourseCards } from "./modules/course-card-sync.js";
import { initLessonPlayer } from "./modules/lesson-player.js";
import { initFaqAccordion } from "./modules/faq.js";
import { showToast } from "./modules/toast.js";
import { initScrollTop } from "./modules/scroll-top.js";
import { initRevealAndStats } from "./modules/reveal-stats.js";

initLanguageToggle();
initMobileMenu();
initSearchFilters();
initAuthStateListener();
initAuthModal();
initAccountModal();
initCoursePage();
initLessonPlayer();
initFaqAccordion();
initScrollTop();
initRevealAndStats();

/* =========================================================
   INIT
========================================================== */
setLanguage(currentLang);
refreshAllCourseCards();
initAuth(); // restores the logged-in session (if any) from Supabase

setTimeout(() => {
    showToast(currentLang === 'ar' ? "مرحباً بك في كودنا 👋 ابدأ رحلتك التعليمية!" : "Welcome to Kodna 👋 Start your learning journey!");
}, 1800);
