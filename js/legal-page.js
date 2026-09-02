/* =========================================================
   LEGAL / STATIC PAGES i18n  (contact.html, privacy.html)
   Self-contained — does NOT import the large data.js catalog.
   Shares the localStorage key "kodna-lang" with the main site
   so the language choice persists across navigation.
========================================================== */

const dict = {
    ar: {
        /* shared chrome */
        logoText: "كودنا",
        backToSite: "رجوع للموقع",
        copyright: "© 2026 كودنا — جميع الحقوق محفوظة.",

        /* contact.html */
        contactDocTitle: "تواصل معنا | كودنا",
        contactH1: "تواصل معنا",
        contactLead: "لديك سؤال، اقتراح، أو مشكلة تقنية؟ راسلنا وسنرد عليك في أقرب وقت ممكن.",
        contactCardTitle: "البريد الإلكتروني",
        contactCardDesc: "لأي سؤال، اقتراح، أو مشكلة تقنية",
        contactNote: 'نرد عادةً خلال 24 إلى 48 ساعة. إذا كان سؤالك متعلقاً بحسابك (تسجيل الدخول، كلمة المرور، التقدّم في الدروس)، يمكنك تجربة زر "نسيت كلمة المرور" في نافذة تسجيل الدخول أولاً.',

        /* privacy.html */
        privacyDocTitle: "سياسة الخصوصية | كودنا",
        privacyH1: "سياسة الخصوصية",
        privacyUpdated: "آخر تحديث: أغسطس 2026",
        privacyIntro: "كودنا (koudna.com) منصة عربية لتعلم البرمجة. توضح هذه الصفحة نوع المعلومات التي نجمعها، وسبب جمعها، وكيفية استخدامها.",
        privacyH2_1: "1. المعلومات التي نجمعها",
        privacyP1: "عند إنشاء حساب في المنصة، نقوم بجمع:",
        privacyLi1a: "الاسم الكامل والبريد الإلكتروني اللذين تقدّمهما عند التسجيل",
        privacyLi1b: "كلمة المرور (مشفّرة بالكامل، بحيث لا نستطيع نحن أنفسنا الاطلاع عليها)",
        privacyLi1c: "تقدّمك في الدروس والمسارات التعليمية (لحفظ نقطة توقفك ومتابعتها لاحقاً)",
        privacyP1b: 'يتم تخزين هذه البيانات بأمان عبر <a href="https://supabase.com" target="_blank" rel="noopener">Supabase</a>، ولا نقوم ببيعها أو مشاركتها مع أي طرف ثالث لأغراض تجارية.',
        privacyH2_2: "2. ملفات الـ Cookies",
        privacyP2: "نستخدم ملفات الـ Cookies لحفظ تفضيلاتك (مثل اللغة) وتحسين تجربتك على الموقع. بعض هذه الملفات تأتي من خدمات طرف ثالث نستخدمها، مثل Google.",
        privacyH2_3: "3. الإعلانات — Google AdSense",
        privacyP3: 'تستخدم كودنا خدمة <strong>Google AdSense</strong> لعرض الإعلانات. تستخدم Google وشركاؤها ملفات Cookies (بما في ذلك ملف DoubleClick DART) لعرض إعلانات مبنية على زياراتك لهذا الموقع ومواقع أخرى على الإنترنت.',
        privacyLi3a: 'يمكنك تعطيل الإعلانات المخصصة (Personalized ads) من <a href="https://adssettings.google.com" target="_blank" rel="noopener">إعدادات إعلانات Google</a>',
        privacyLi3b: 'يمكنك الاطلاع على كيفية استخدام Google لبياناتك عبر <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">سياسة Google للشركاء</a>',
        privacyLi3c: "قد يستخدم موردون آخرون للإعلانات ملفات DART لعرض إعلانات مبنية على زياراتك السابقة لهذا الموقع أو مواقع أخرى",
        privacyH2_4: "4. حقوقك",
        privacyP4: "يمكنك في أي وقت أن تطلب منا الاطلاع على بياناتك، أو تعديلها، أو حذفها. يكفي أن ترسل لنا رسالة بريد إلكتروني وسنتعامل مع طلبك في أقرب وقت ممكن.",
        privacyH2_5: "5. أمان البيانات",
        privacyP5: "نستخدم تشفيراً كاملاً لكلمات المرور، إلى جانب الحماية على مستوى الصفوف (Row Level Security) في قاعدة البيانات، بحيث لا يستطيع أي مستخدم الاطلاع على بيانات مستخدم آخر.",
        privacyH2_6: "6. الأطفال",
        privacyP6: "منصة كودنا غير موجهة للأطفال دون سن 13 عاماً، ولا نقوم عن قصد بجمع معلومات من هذه الفئة العمرية.",
        privacyH2_7: "7. تحديثات السياسة",
        privacyP7: "قد نقوم بتعديل هذه الصفحة من وقت لآخر. سيظهر أي تغيير مهم هنا مع تاريخ التحديث الجديد.",
        privacyH2_8: "8. تواصل معنا",
        privacyP8: 'لديك سؤال حول الخصوصية؟ راسلنا على <a href="mailto:abdelilahbougtib@icloud.com">abdelilahbougtib@icloud.com</a>، أو قم بزيارة <a href="/contact.html">صفحة تواصل معنا</a>.',
    },
    en: {
        /* shared chrome */
        logoText: "Kodna",
        backToSite: "Back to site",
        copyright: "© 2026 Kodna — All rights reserved.",

        /* contact.html */
        contactDocTitle: "Contact Us | Kodna",
        contactH1: "Contact Us",
        contactLead: "Have a question, suggestion, or technical issue? Send us a message and we'll get back to you as soon as possible.",
        contactCardTitle: "Email",
        contactCardDesc: "For any question, suggestion, or technical issue",
        contactNote: 'We usually reply within 24 to 48 hours. If your question is about your account (login, password, lesson progress), try the "Forgot password" button in the login window first.',

        /* privacy.html */
        privacyDocTitle: "Privacy Policy | Kodna",
        privacyH1: "Privacy Policy",
        privacyUpdated: "Last updated: August 2026",
        privacyIntro: "Kodna (koudna.com) is an Arabic platform for learning programming. This page explains what information we collect, why we collect it, and how we use it.",
        privacyH2_1: "1. Information we collect",
        privacyP1: "When you create an account on the platform, we collect:",
        privacyLi1a: "The full name and email address you provide at sign-up",
        privacyLi1b: "Your password (fully encrypted, so even we cannot read it)",
        privacyLi1c: "Your progress through the lessons and learning paths (to save where you stopped and let you resume later)",
        privacyP1b: 'This data is stored securely via <a href="https://supabase.com" target="_blank" rel="noopener">Supabase</a>, and we never sell it or share it with any third party for commercial purposes.',
        privacyH2_2: "2. Cookies",
        privacyP2: "We use cookies to save your preferences (such as language) and improve your experience on the site. Some of these cookies come from third-party services we use, such as Google.",
        privacyH2_3: "3. Advertising — Google AdSense",
        privacyP3: 'Kodna uses <strong>Google AdSense</strong> to display ads. Google and its partners use cookies (including the DoubleClick DART cookie) to serve ads based on your visits to this site and other sites on the internet.',
        privacyLi3a: 'You can disable personalized ads from <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a>',
        privacyLi3b: 'You can review how Google uses your data via the <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">Google partner sites policy</a>',
        privacyLi3c: "Other ad vendors may use DART cookies to serve ads based on your prior visits to this site or other sites",
        privacyH2_4: "4. Your rights",
        privacyP4: "At any time you can ask us to access, correct, or delete your data. Just send us an email and we'll handle your request as soon as possible.",
        privacyH2_5: "5. Data security",
        privacyP5: "We use full encryption for passwords, together with Row Level Security in the database, so that no user can access another user's data.",
        privacyH2_6: "6. Children",
        privacyP6: "Kodna is not directed at children under 13 years old, and we do not knowingly collect information from this age group.",
        privacyH2_7: "7. Policy updates",
        privacyP7: "We may update this page from time to time. Any significant change will appear here with the new update date.",
        privacyH2_8: "8. Contact us",
        privacyP8: 'Have a question about privacy? Email us at <a href="mailto:abdelilahbougtib@icloud.com">abdelilahbougtib@icloud.com</a>, or visit the <a href="/contact.html">contact page</a>.',
    },
};

function readLang() {
    try {
        const inEn = /^\/en(\/|$)/.test(location.pathname);
        if (inEn) return "en";
        const v = localStorage.getItem("kodna-lang");
        return v === "en" || v === "ar" ? v : "ar";
    } catch {
        return "ar";
    }
}

/* Given a target language, compute the URL of *this same page* under
   that language's /en prefix (or without it for Arabic). */
function urlForLang(targetLang) {
    const path = location.pathname;
    const inEn = /^\/en(\/|$)/.test(path);
    const rest = path.replace(/^\/en/, "") || "/";
    if (targetLang === "en") return inEn ? path : "/en" + rest;
    return rest;
}

function applyLang(lang) {
    const table = dict[lang];
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (table[key] != null) el.innerHTML = table[key];
    });

    const titleKey = document.querySelector("title")?.getAttribute("data-i18n");
    if (titleKey && table[titleKey]) document.title = table[titleKey];

    const toggle = document.getElementById("langToggle");
    if (toggle) {
        const span = toggle.querySelector("span");
        if (span) span.textContent = lang === "ar" ? "EN" : "AR";
    }

    const homeHref = lang === "en" ? "/en/" : "/";
    document.getElementById("contactLogoLink")?.setAttribute("href", homeHref);
    document.getElementById("legalBackLink")?.setAttribute("href", homeHref);

    try { localStorage.setItem("kodna-lang", lang); } catch { /* ignore */ }
}

let current = readLang();
applyLang(current);

document.getElementById("langToggle")?.addEventListener("click", () => {
    location.href = urlForLang(current === "ar" ? "en" : "ar") + location.hash;
});
