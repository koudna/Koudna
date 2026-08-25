/* ==========================================================
   DICTIONARY (translations) & COURSE CATALOG DATA
   Pure data — no logic here. Loaded before app.js.
   ========================================================== */

    const translations = {
        ar: {
            pageTitle: "كودنا | تعلم البرمجة من الصفر حتى الاحتراف",
            logoText: "كودنا",
            navReferences: "المنهج والمرجعية",
            navPaths: "المسارات",
            navWhy: "لماذا كودنا؟",
            navAbout: "عن المنصة",
            navFaq: "الأسئلة",
            navAccount: "حسابي",
            heroBadge: "منصة عربية لتعلم البرمجة",
            heroTitle: "تعلم البرمجة <span>خطوة بخطوة</span> حتى الاحتراف",
            heroDesc: "ابدأ من الصفر، افهم أساسيات الحاسوب والبرمجة، ثم انتقل إلى بايثون، تطوير الويب، علم البيانات ولينكس بطريقة عملية ومبسطة.",
            heroBtnStart: "ابدأ التعلم الآن",
            heroBtnAbout: "تعرف على كودنا",
            heroBtnReferences: "منهجنا ومرجعيتنا",
            stat1: "مسارات تعليمية",
            stat2: "درساً عملياً",
            stat3: "باللغة العربية",
            coursesLabel: "تعلم بطريقة منظمة",
            coursesTitle: "المسارات التعليمية",
            coursesDesc: "اختر المسار المناسب لك وابدأ رحلتك في عالم البرمجة وعلوم الحاسوب.",
            searchPlaceholder: "ابحث عن مسار مثل Python أو Linux...",
            filterAll: "الكل",
            filterBeginner: "مبتدئ",
            filterInter: "متوسط",
            filterAdv: "متقدم",
            levelBeginner: "مبتدئ",
            levelInter: "متوسط",
            levelAdv: "متقدم",
            progressText: "التقدم",
            startPath: "ابدأ المسار",
            emptySearch: "لم نجد أي مسار يطابق بحثك.",
            whyLabel: "لماذا تختار كودنا؟",
            whyTitle: "تعلم بطريقة مختلفة",
            whyDesc: "صممنا المنصة لتكون بسيطة للمبتدئ، وعملية لمن يريد تطوير مهاراته.",
            feat1Title: "من الصفر",
            feat1Desc: "لا تحتاج إلى خبرة مسبقة. ابدأ من الأساسيات خطوة بخطوة.",
            feat2Title: "تعلم عملي",
            feat2Desc: "ركز على التطبيق والمشاريع بدلاً من الحفظ والنظريات فقط.",
            feat3Title: "بالعربية",
            feat3Desc: "محتوى واضح ومبسط باللغة العربية للمبتدئين والطلاب.",
            feat4Title: "تابع تقدمك",
            feat4Desc: "تابع مستوى تقدمك في كل مسار واعرف دائماً أين وصلت.",
            statUser: "طالب مستفيد",
            statLesson: "درس تعليمي",
            statExercise: "تمرين عملي",
            statRate: "نسبة رضا %",
            aboutLabel: "عن كودنا",
            aboutTitle: "البرمجة أصبحت أسهل مما تتخيل.",
            aboutDesc: "كودنا هي منصة تعليمية عربية تهدف إلى جعل تعلم البرمجة وعلوم الحاسوب متاحاً للجميع، من خلال محتوى واضح وتدريجي يركز على الفهم والتطبيق.",
            check1: "دروس مرتبة من السهل إلى المتقدم",
            check2: "أمثلة عملية ومشاريع تطبيقية",
            check3: "واجهة بسيطة وسهلة الاستخدام",
            check4: "محتوى عربي موجه للمبتدئين",
            faqLabel: "الأسئلة الشائعة",
            faqTitle: "لديك سؤال؟",
            faqDesc: "إليك إجابات عن بعض الأسئلة التي قد تخطر في بالك قبل بدء التعلم.",
            faq1Q: "هل أحتاج إلى خبرة سابقة؟",
            faq1A: "لا. بعض المسارات مصممة خصيصاً للمبتدئين وتبدأ من المفاهيم الأساسية قبل الانتقال إلى المواضيع المتقدمة.",
            faq2Q: "هل يمكنني التعلم من الهاتف؟",
            faq2A: "نعم. تصميم كودنا متجاوب مع الهواتف والأجهزة اللوحية والحواسيب.",
            faq3Q: "ما اللغة المستخدمة في الدروس؟",
            faq3A: "المحتوى الأساسي باللغة العربية، مع استخدام المصطلحات الإنجليزية البرمجية عند الحاجة.",
            faq4Q: "ما المسار الذي أبدأ به؟",
            faq4A: "إذا كنت جديداً تماماً على الحاسوب، ابدأ بمسار أساسيات الحاسوب. أما إذا كنت مستعداً للبرمجة، فيمكنك البدء بمسار Python.",
            ctaTitle: "مستعد لكتابة أول سطر برمجي؟",
            ctaDesc: "لا تنتظر الوقت المثالي. ابدأ الآن وابنِ مهاراتك خطوة بخطوة.",
            ctaBtn: "استكشف المسارات",
            footerCol1Title: "المنصة",
            footerCol2Title: "المسارات",
            footerCol3Title: "تواصل معنا",
            supportLink: "الدعم والمساعدة",
            footerPrivacy: "سياسة الخصوصية",
            footerDesc: "منصة عربية لتعلم البرمجة وعلوم الحاسوب بطريقة بسيطة وعملية، من الصفر حتى الاحتراف.",
            copyright: "© 2026 كودنا — جميع الحقوق محفوظة.",

            authTitle: "مرحباً بعودتك",
            authTabLogin: "تسجيل الدخول",
            authTabRegister: "إنشاء حساب",
            fieldEmail: "البريد الإلكتروني",
            fieldPassword: "كلمة المرور",
            fieldName: "الاسم الكامل",
            authSubmitLogin: "تسجيل الدخول",
            authSubmitRegister: "إنشاء الحساب",
            authDemoNote: "بياناتك مخزّنة بأمان في قاعدة بيانات حقيقية (Supabase)، وكلمة المرور مشفّرة بالكامل.",
            authForgotPassword: "نسيت كلمة المرور؟",
            authOr: "أو",
            authGoogleBtn: "المتابعة باستخدام Google",
            authForgotNote: "أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور.",
            authSubmitForgot: "إرسال رابط إعادة التعيين",
            authBackToLogin: "رجوع لتسجيل الدخول",
            resetPasswordTitle: "تعيين كلمة مرور جديدة",
            resetPasswordNewLabel: "كلمة المرور الجديدة",
            resetPasswordSubmit: "حفظ كلمة المرور",
            errEmailExists: "هذا البريد الإلكتروني مسجل مسبقاً، جرّب تسجيل الدخول.",
            errInvalidLogin: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
            errFillFields: "يرجى تعبئة جميع الحقول.",
            errPasswordShort: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
            toastWelcomeBack: "مرحباً بعودتك",
            toastAccountCreated: "تم إنشاء الحساب بنجاح 🎉",
            toastLoggedOut: "تم تسجيل الخروج",
            toastLoginRequired: "سجّل الدخول أولاً لتبدأ هذا المسار",

            accountTitle: "حسابي",
            accountStatEnrolled: "مسارات",
            accountStatLessons: "دروس مكتملة",
            accountStatProgress: "متوسط التقدم",
            accountCoursesTitle: "مساراتي",
            accountEmptyCourses: "لم تنضم لأي مسار بعد. اختر مساراً وابدأ رحلتك!",
            logoutBtn: "تسجيل الخروج",

            lessonBack: "رجوع للمسارات",
            lessonOf: "من",
            lessonsCompleted: "دروس مكتملة",
            lessonLocked: "أكمل الدرس السابق أولاً لفتح هذا الدرس.",
            lessonComingSoonTitle: "هذا الدرس قيد الإعداد",
            lessonComingSoonBody: "فريق كودنا يعمل على إضافة هذا الدرس قريباً. تابع الدروس المتاحة الآن في هذا المسار.",
            quizCheck: "تحقق من فهمك",
            quizCorrect: "إجابة صحيحة! أحسنت 👏",
            quizWrong: "إجابة غير صحيحة، حاول مرة أخرى.",
            btnPrevLesson: "الدرس السابق",
            btnNextLesson: "الدرس التالي",
            btnCompleteLesson: "إكمال الدرس",
            btnCompleted: "تم الإكمال ✓",
            courseStart: "ابدأ المسار",
            courseContinue: "تابع من حيث توقفت",
            courseFinished: "أعد المراجعة",
            courseFinishedTitle: "أنهيت كل الدروس المتاحة 🎉",
            courseFinishedBody: "أحسنت! أكملت جميع الدروس المتاحة حالياً في هذا المسار. المزيد من الدروس قادم قريباً.",
            modalJoinBtn: "الانضمام للمسار الآن",
            modalContinueBtn: "متابعة المسار",
            modalDescJoined: "أنت مسجّل في هذا المسار. إليك دروسه:"
        },
        en: {
            pageTitle: "Kodna | Learn Programming from Scratch to Mastery",
            logoText: "Kodna",
            navPaths: "Paths",
            navWhy: "Why Kodna?",
            navAbout: "About",
            navFaq: "FAQ",
            navAccount: "Account",
            heroBadge: "Arabic Programming Platform",
            heroTitle: "Learn Programming <span>Step by Step</span> to Mastery",
            heroDesc: "Start from scratch, grasp computer and coding fundamentals, then advance to Python, Web Development, Data Science, and Linux practically.",
            heroBtnStart: "Start Learning Now",
            heroBtnAbout: "Discover Kodna",
            stat1: "Learning Paths",
            stat2: "Practical Lessons",
            stat3: "In Arabic Language",
            coursesLabel: "Learn Organised",
            coursesTitle: "Learning Paths",
            coursesDesc: "Choose the right path for you and start your journey in computer science.",
            searchPlaceholder: "Search path like Python or Linux...",
            filterAll: "All",
            filterBeginner: "Beginner",
            filterInter: "Intermediate",
            filterAdv: "Advanced",
            levelBeginner: "Beginner",
            levelInter: "Intermediate",
            levelAdv: "Advanced",
            progressText: "Progress",
            startPath: "Start Path",
            emptySearch: "No path matches your search.",
            whyLabel: "Why Choose Kodna?",
            whyTitle: "Learn Differently",
            whyDesc: "Designed to be simple for beginners and practical for skill development.",
            feat1Title: "From Scratch",
            feat1Desc: "No prior experience required. Start from the basics step by step.",
            feat2Title: "Practical Learning",
            feat2Desc: "Focus on real applications and projects rather than dry theory.",
            feat3Title: "In Arabic",
            feat3Desc: "Clear and simplified content in Arabic for learners.",
            feat4Title: "Track Progress",
            feat4Desc: "Monitor your progression in each path and see how far you've come.",
            statUser: "Active Students",
            statLesson: "Lessons",
            statExercise: "Exercises",
            statRate: "Satisfaction %",
            aboutLabel: "About Kodna",
            aboutTitle: "Programming is easier than you think.",
            aboutDesc: "Kodna is an Arabic educational platform aiming to make coding accessible to everyone through clear, structured content.",
            check1: "Lessons structured from easy to advanced",
            check2: "Practical examples and projects",
            check3: "Simple and clean interface",
            check4: "Arabic content tailored for beginners",
            faqLabel: "FAQ",
            faqTitle: "Got Questions?",
            faqDesc: "Here are answers to some common questions before you start.",
            faq1Q: "Do I need prior experience?",
            faq1A: "No. Selected paths are designed for complete beginners starting from core concepts.",
            faq2Q: "Can I learn on mobile?",
            faq2A: "Yes. Kodna is fully responsive on mobile, tablets, and desktops.",
            faq3Q: "What language is used?",
            faq3A: "Core content is in Arabic, integrating essential English technical terminology.",
            faq4Q: "Which path should I begin with?",
            faq4A: "If you are entirely new to computers, start with Computer Basics. If ready to code, jump into Python.",
            ctaTitle: "Ready to Write Your First Line of Code?",
            ctaDesc: "Don't wait for the perfect time. Start now and build your skills step by step.",
            ctaBtn: "Explore Paths",
            footerCol1Title: "Platform",
            footerCol2Title: "Paths",
            footerCol3Title: "Contact Us",
            supportLink: "Support & Help",
            footerPrivacy: "Privacy Policy",
            footerDesc: "An Arabic platform to learn programming and computer science simply and practically.",
            copyright: "© 2026 Kodna — All rights reserved.",

            authTitle: "Welcome back",
            authTabLogin: "Log In",
            authTabRegister: "Sign Up",
            fieldEmail: "Email address",
            fieldPassword: "Password",
            fieldName: "Full name",
            authSubmitLogin: "Log In",
            authSubmitRegister: "Create account",
            authDemoNote: "Your data is stored securely in a real database (Supabase), with your password fully encrypted.",
            authForgotPassword: "Forgot password?",
            authOr: "or",
            authGoogleBtn: "Continue with Google",
            authForgotNote: "Enter your email and we'll send you a password reset link.",
            authSubmitForgot: "Send reset link",
            authBackToLogin: "Back to login",
            resetPasswordTitle: "Set a new password",
            resetPasswordNewLabel: "New password",
            resetPasswordSubmit: "Save password",
            errEmailExists: "This email is already registered, try logging in instead.",
            errInvalidLogin: "Incorrect email or password.",
            errFillFields: "Please fill in all fields.",
            errPasswordShort: "Password must be at least 6 characters.",
            toastWelcomeBack: "Welcome back",
            toastAccountCreated: "Account created successfully 🎉",
            toastLoggedOut: "Logged out",
            toastLoginRequired: "Log in first to start this path",

            accountTitle: "My Account",
            accountStatEnrolled: "Paths",
            accountStatLessons: "Lessons done",
            accountStatProgress: "Avg. progress",
            accountCoursesTitle: "My paths",
            accountEmptyCourses: "You haven't joined a path yet. Pick one and start your journey!",
            logoutBtn: "Log out",

            lessonBack: "Back to paths",
            lessonOf: "of",
            lessonsCompleted: "lessons completed",
            lessonLocked: "Finish the previous lesson to unlock this one.",
            lessonComingSoonTitle: "This lesson is coming soon",
            lessonComingSoonBody: "The Kodna team is working on this lesson. Continue with the lessons already available in this path.",
            quizCheck: "Check your understanding",
            quizCorrect: "Correct! Well done 👏",
            quizWrong: "Not quite, try again.",
            btnPrevLesson: "Previous lesson",
            btnNextLesson: "Next lesson",
            btnCompleteLesson: "Complete lesson",
            btnCompleted: "Completed ✓",
            courseStart: "Start path",
            courseContinue: "Continue where you left off",
            courseFinished: "Review again",
            courseFinishedTitle: "You finished all available lessons 🎉",
            courseFinishedBody: "Great work! You completed every lesson currently available in this path. More are coming soon.",
            modalJoinBtn: "Join this path",
            modalContinueBtn: "Continue path",
            modalDescJoined: "You're enrolled in this path. Here are its lessons:"
        }
    };

    /* =========================================================
       COURSE CATALOG (metadata + real lesson content)
    ========================================================== */
    const CODE = (arHtml) => arHtml; // helper no-op, code kept literal below

    const catalog = {
        python: {
            name: { ar: "لغة بايثون Python", en: "Python" },
            icon: "python", iconClass: "fa-brands fa-python",
            description: { ar: 'مسار بايثون الكامل من الصفر إلى الاحتراف: شرح معمّق، أخطاء شائعة، تمارين تطبيقية ومشاريع حقيقية.', en: 'Learn Python from zero to practical projects, covering core syntax, functions, OOP and projects.' },
            lessons: [

/* ---------- الدرس 1 ---------- */
{
    title: { ar: "ما هي البرمجة ولماذا بايثون؟", en: "What is programming and why Python?" },
    body: {
        ar: `
<p>تخيّل أنك تشرح لصديق كيف يُعِدّ كوب شاي. ستقول له: اغلِ الماء، ضع كيس الشاي في الكوب، اسكب الماء، انتظر ثلاث دقائق، أضف السكر. هذه <strong>خوارزمية</strong>: سلسلة خطوات مرتبة تؤدي إلى نتيجة.</p>

<p>البرمجة هي نفس الفكرة تماماً، لكن المستمع هذه المرة هو الحاسوب. والفرق الوحيد أن الحاسوب دقيق إلى حدّ مزعج: لن يفهم "انتظر قليلاً"، بل يريد "انتظر 180 ثانية". لن يخمّن ما تقصده، ولن يتجاوز خطأً صغيراً. هو ينفّذ ما تقوله حرفياً، لا أكثر ولا أقل.</p>

<p>لهذا نحتاج <strong>لغة برمجة</strong>: طريقة كتابة دقيقة يفهمها الحاسوب، ويستطيع الإنسان قراءتها في الوقت نفسه.</p>

<h3>لماذا بايثون تحديداً؟</h3>

<p>هناك مئات لغات البرمجة، لكن بايثون أصبحت الخيار الأول للمبتدئين لأسباب عملية:</p>

<ul>
    <li><strong>قريبة من اللغة الإنجليزية العادية.</strong> لطباعة كلمة على الشاشة تكتب <code>print("مرحبا")</code>. في لغات أخرى قد تحتاج خمسة أسطر لفعل الشيء ذاته.</li>
    <li><strong>لا تضيّع وقتك في التفاصيل.</strong> لغات مثل C تطلب منك إدارة الذاكرة يدوياً؛ بايثون تتكفّل بذلك عنك، فتركّز أنت على حل المشكلة.</li>
    <li><strong>مكتبات جاهزة لكل شيء.</strong> تريد تحليل بيانات؟ بناء موقع؟ ذكاء اصطناعي؟ أتمتة مهام مملة؟ هناك مكتبة جاهزة تختصر عليك شهوراً من العمل.</li>
    <li><strong>مطلوبة في سوق العمل.</strong> تستخدمها Google وNetflix وInstagram وNASA، وهي اللغة الأولى في مجالات الذكاء الاصطناعي وتحليل البيانات.</li>
</ul>

<h3>ماذا يمكنك أن تبني بها فعلاً؟</h3>

<ul>
    <li><strong>أتمتة المهام المتكررة:</strong> إعادة تسمية آلاف الملفات، تجميع بيانات من مواقع، إرسال تقارير تلقائية.</li>
    <li><strong>تحليل البيانات:</strong> قراءة ملفات Excel ضخمة واستخراج نتائج ورسوم بيانية منها.</li>
    <li><strong>مواقع وتطبيقات ويب:</strong> عبر أُطر مثل Django وFlask.</li>
    <li><strong>الذكاء الاصطناعي:</strong> تدريب نماذج للتعرّف على الصور أو فهم النصوص.</li>
    <li><strong>ألعاب وبرامج سطح المكتب</strong> للتدريب والمشاريع الصغيرة.</li>
</ul>

<h3>كيف يفهم الحاسوب كودك؟</h3>

<p>الحاسوب لا يفهم بايثون مباشرة — هو لا يفهم إلا الأصفار والواحدات. لذلك يوجد برنامج وسيط اسمه <strong>مفسّر بايثون (Python Interpreter)</strong>، وظيفته قراءة كودك سطراً سطراً وترجمته إلى لغة الآلة وتنفيذه فوراً.</p>

<p>هذه نقطة مهمة: بايثون <strong>لغة مُفسَّرة</strong>، أي أنها تُنفَّذ سطراً بسطر. الفائدة أنك ترى نتيجة كودك مباشرة دون انتظار. والنتيجة الجانبية أن التنفيذ أبطأ قليلاً من لغات أخرى — وهو فرق لن تلاحظه إطلاقاً في مشاريعك الأولى.</p>

<h3>توقعات واقعية قبل أن نبدأ</h3>

<p>لن تتعلم البرمجة بالقراءة وحدها، تماماً كما لا تتعلم السباحة بمشاهدة الفيديوهات. القاعدة الوحيدة التي تهم: <strong>اكتب كل مثال بيدك</strong>، ثم غيّر فيه وشاهد ماذا يحدث. الأخطاء التي ستواجهها ليست فشلاً — هي الطريقة الأساسية التي ستتعلم بها.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>البرمجة = إعطاء الحاسوب خطوات دقيقة لتنفيذ مهمة</li>
    <li>بايثون سهلة القراءة، وغنية بالمكتبات، ومطلوبة في سوق العمل</li>
    <li>مفسّر بايثون يقرأ كودك سطراً سطراً ويترجمه للحاسوب</li>
    <li>التعلم الحقيقي يأتي من الكتابة والتجريب، لا من القراءة فقط</li>
</ul>
`,
        en: `<p>Programming is giving a computer a precise series of steps to accomplish a task. Python is the most beginner-friendly language: it reads almost like English, handles technical details for you, has libraries for everything, and is in high demand.</p>`
    },
    code: `<span class="cm"># هذا هو أول برنامج ستكتبه — سطر واحد فقط</span>
<span class="fn">print</span>(<span class="st">"Hello, World"</span>)

<span class="cm"># قارن: نفس البرنامج بلغة Java يحتاج خمسة أسطر</span>
<span class="cm"># public class Main {</span>
<span class="cm">#     public static void main(String[] args) {</span>
<span class="cm">#         System.out.println("Hello World");</span>
<span class="cm">#     }</span>
<span class="cm"># }</span>`,
    quiz: {
        q: {
            ar: "ماذا يعني أن بايثون لغة «مُفسَّرة» (Interpreted)؟",
            en: "What does it mean that Python is an interpreted language?"
        },
        options: {
            ar: [
                "أنها تُترجم كاملة إلى ملف تنفيذي قبل التشغيل",
                "أن مفسّراً يقرأ الكود وينفّذه سطراً سطراً",
                "أنها تعمل فقط داخل المتصفح",
                "أنها تحتاج إلى ترجمة يدوية من المبرمج"
            ],
            en: [
                "It compiles fully to an executable before running",
                "An interpreter reads and runs the code line by line",
                "It only runs inside a browser",
                "The programmer must translate it manually"
            ]
        },
        correct: 1,
        explanation: {
            ar: "المفسّر يقرأ الكود سطراً بسطر ويترجمه وينفّذه فوراً، لذلك ترى النتيجة مباشرة دون خطوة بناء منفصلة.",
            en: "The interpreter reads, translates and executes line by line, so you see results immediately without a separate build step."
        }
    }
},

/* ---------- الدرس 2 ---------- */
{
    title: { ar: "تثبيت بايثون وإعداد بيئة العمل", en: "Installing Python & setting up your environment" },
    body: {
        ar: `
<p>قبل أن تكتب أي كود، تحتاج إلى شيئين على جهازك: <strong>مفسّر بايثون</strong> الذي ينفّذ الكود، و<strong>محرّر نصوص</strong> تكتب فيه.</p>

<h3>أولاً: تثبيت بايثون</h3>

<p>اذهب إلى الموقع الرسمي <strong>python.org</strong> ثم قسم Downloads. الموقع يتعرّف على نظامك تلقائياً ويعرض عليك أحدث نسخة. حمّلها وشغّل ملف التثبيت.</p>

<p><strong>نقطة حاسمة لمستخدمي ويندوز:</strong> في أول شاشة من التثبيت، ستجد مربع اختيار صغير في الأسفل مكتوب عليه <strong>"Add Python to PATH"</strong>. ضع علامة عليه قبل الضغط على Install. إذا نسيته، سيعمل بايثون لكن الطرفية لن تجده، وستواجه رسالة "python is not recognized" لاحقاً.</p>

<p>على macOS، بايثون موجود مسبقاً لكنه نسخة قديمة يستخدمها النظام. حمّل النسخة الحديثة من الموقع الرسمي ولا تحذف القديمة. على لينكس، بايثون 3 مثبّت غالباً بالفعل.</p>

<h3>ثانياً: تأكد أن التثبيت نجح</h3>

<p>افتح <strong>الطرفية</strong> (Terminal على macOS ولينكس، أو Command Prompt / PowerShell على ويندوز) واكتب أمر التحقق من النسخة. إذا ظهر لك رقم مثل <code>Python 3.12.1</code>، فقد نجح كل شيء.</p>

<p>إذا لم يعمل الأمر <code>python</code>، جرّب <code>python3</code> بدلاً منه — هذا شائع جداً على macOS ولينكس.</p>

<h3>ثالثاً: محرّر الكود</h3>

<p>يمكنك تقنياً الكتابة في Notepad، لكنك لن تفعل. المحرّر الجيد يلوّن الكود، وينبّهك على الأخطاء قبل التشغيل، ويكمل الكلمات نيابة عنك.</p>

<p><strong>الخيار الموصى به: Visual Studio Code</strong> — مجاني، خفيف، والأكثر استخداماً بين المطورين. حمّله من <strong>code.visualstudio.com</strong>، ثم من قسم Extensions ثبّت إضافة <strong>Python</strong> الرسمية من Microsoft.</p>

<h3>طريقتان لتشغيل الكود</h3>

<p><strong>الطريقة الأولى — الوضع التفاعلي (REPL):</strong> اكتب <code>python</code> في الطرفية وحدها، فتظهر لك ثلاث علامات <code>&gt;&gt;&gt;</code>. هنا تكتب سطراً وترى نتيجته فوراً. ممتاز للتجريب السريع، لكن ما تكتبه لا يُحفَظ. للخروج اكتب <code>exit()</code>.</p>

<p><strong>الطريقة الثانية — ملف بايثون:</strong> أنشئ ملفاً باسم <code>hello.py</code> (الامتداد <code>.py</code> إلزامي)، اكتب فيه كودك واحفظه، ثم شغّله من الطرفية. هذه هي الطريقة التي ستستخدمها لكل مشاريعك.</p>

<h3>مشكلة شائعة وحلّها</h3>

<p>إذا ظهرت لك رسالة <code>'python' is not recognized as an internal or external command</code> على ويندوز، فالسبب شبه المؤكد هو نسيان علامة "Add Python to PATH". الحل الأسرع: أعد تشغيل ملف التثبيت، اختر <strong>Modify</strong>، وفعّل الخيار.</p>

<h3>بديل سريع بلا تثبيت</h3>

<p>إذا أردت البدء فوراً دون أي تثبيت، يمكنك استخدام محررات تعمل في المتصفح مثل <strong>Replit</strong> أو <strong>Google Colab</strong>. مفيدة للتجريب، لكن أنصحك بالتثبيت المحلي لأنه ما ستستخدمه في العمل الحقيقي.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>حمّل بايثون من python.org، ولا تنسَ "Add Python to PATH" على ويندوز</li>
    <li>تأكد من التثبيت بأمر <code>python --version</code> في الطرفية</li>
    <li>VS Code هو المحرّر الموصى به، مع إضافة Python الرسمية</li>
    <li>الوضع التفاعلي للتجريب، وملفات <code>.py</code> للمشاريع الحقيقية</li>
</ul>
`,
        en: `<p>Download Python from python.org. On Windows, make sure to check "Add Python to PATH" during installation. Verify with <code>python --version</code>. Install VS Code as your editor with the official Python extension.</p>`
    },
    code: `<span class="cm"># 1) تحقق من نسخة بايثون في الطرفية</span>
python --version
<span class="cm"># الناتج المتوقع: Python 3.12.1</span>

<span class="cm"># على macOS أو لينكس قد تحتاج python3</span>
python3 --version


<span class="cm"># 2) الوضع التفاعلي: اكتب python ثم جرّب</span>
<span class="cm"># >>> 2 + 3</span>
<span class="cm"># 5</span>
<span class="cm"># >>> print("تجربة")</span>
<span class="cm"># تجربة</span>
<span class="cm"># >>> exit()</span>


<span class="cm"># 3) تشغيل ملف: أنشئ hello.py وبداخله</span>
<span class="fn">print</span>(<span class="st">"My first program"</span>)

<span class="cm"># ثم في الطرفية داخل نفس المجلد:</span>
<span class="cm"># python hello.py</span>`,
    quiz: {
        q: {
            ar: "على ويندوز، ظهرت لك رسالة 'python is not recognized' بعد التثبيت. ما السبب الأرجح؟",
            en: "On Windows you see 'python is not recognized' after installing. What is the likely cause?"
        },
        options: {
            ar: [
                "نسيان تفعيل خيار Add Python to PATH أثناء التثبيت",
                "أن بايثون لا يعمل على ويندوز",
                "أن الملف يجب أن ينتهي بـ .txt",
                "أن الطرفية لا تدعم البرمجة"
            ],
            en: [
                "Forgetting to check Add Python to PATH during installation",
                "Python does not run on Windows",
                "The file must end with .txt",
                "The terminal does not support programming"
            ]
        },
        correct: 0,
        explanation: {
            ar: "خيار Add Python to PATH هو ما يجعل الطرفية قادرة على العثور على بايثون. الحل: أعد تشغيل المثبّت واختر Modify ثم فعّل الخيار.",
            en: "Add Python to PATH is what lets the terminal find Python. Fix: re-run the installer, choose Modify, and enable it."
        }
    }
},

/* ---------- الدرس 3 ---------- */
{
    title: { ar: "أول برنامج: print والتعليقات", en: "Your first program: print and comments" },
    body: {
        ar: `
<p>الآن وبيئتك جاهزة، لنكتب أول برنامج حقيقي. سنبدأ بالدالة الأكثر استخداماً على الإطلاق في رحلتك: <strong>print</strong>.</p>

<h3>ما الذي تفعله print؟</h3>

<p>وظيفتها بسيطة: تأخذ ما تضعه بين قوسيها وتعرضه على الشاشة. هي نافذتك لرؤية ما يجري داخل برنامجك.</p>

<p>لاحظ ثلاثة أجزاء في <code>print("مرحبا")</code>:</p>

<ul>
    <li><strong>اسم الدالة</strong> <code>print</code> — مكتوب بحروف صغيرة دائماً، فبايثون حسّاس لحالة الأحرف. <code>Print</code> بحرف كبير سيسبب خطأ.</li>
    <li><strong>القوسان</strong> <code>()</code> — كل دالة في بايثون تُستدعى بقوسين بعد اسمها.</li>
    <li><strong>علامتا التنصيص</strong> <code>" "</code> — تخبران بايثون أن ما بينهما نصّ وليس أمراً.</li>
</ul>

<h3>لماذا علامات التنصيص مهمة؟</h3>

<p>هذه نقطة تربك المبتدئين. قارن بين السطرين:</p>

<ul>
    <li><code>print("2 + 3")</code> → يطبع <strong>2 + 3</strong> كنص حرفي</li>
    <li><code>print(2 + 3)</code> → يطبع <strong>5</strong> لأنه حسبها كعملية</li>
</ul>

<p>القاعدة: ما بين علامتي تنصيص يُعامَل كنصّ، وما خارجهما يُعامَل كقيمة أو أمر.</p>

<p>يمكنك استخدام علامة مفردة <code>'</code> أو مزدوجة <code>"</code> — كلاهما يعمل. المهم أن تبدأ وتنتهي بالنوع نفسه. الفائدة العملية: إذا كان نصّك يحتوي على علامة تنصيص مزدوجة، استخدم المفردة في التغليف، والعكس صحيح.</p>

<h3>طباعة عدة أشياء في سطر واحد</h3>

<p>يمكنك تمرير أكثر من قيمة إلى <strong>print</strong> مفصولة بفاصلة، وسيضع بايثون مسافة تلقائياً بينها.</p>

<h3>التعليقات: رسائل للبشر لا للحاسوب</h3>

<p>أي سطر يبدأ بعلامة <strong>#</strong> يتجاهله بايثون تماماً. هذه <strong>تعليقات</strong>، وهي موجّهة لك ولمن يقرأ كودك لاحقاً.</p>

<p>قد تظن أنك لن تحتاجها لأنك تفهم كودك. الحقيقة أنك ستعود إلى كودك بعد شهر ولن تتذكر لماذا كتبته بهذه الطريقة. التعليق الجيد لا يشرح <em>ماذا</em> يفعل السطر (فهذا واضح من الكود)، بل يشرح <strong>لماذا</strong> فعلته هكذا.</p>

<p>تعليق سيئ: <code># نطبع الاسم</code> فوق سطر <code>print(name)</code> — لا يضيف شيئاً.<br>
تعليق جيد: <code># نستخدم الاسم الأول فقط لأن النظام القديم لا يقبل المسافات</code></p>

<h3>الأخطاء الثلاثة الأكثر شيوعاً في أول يوم</h3>

<ul>
    <li><strong>نسيان قوس الإغلاق:</strong> <code>print("مرحبا"</code> ← بايثون سينتظر بقية الجملة ويعطيك <code>SyntaxError</code>.</li>
    <li><strong>خلط أنواع التنصيص:</strong> <code>print("مرحبا')</code> ← يجب أن يتطابق النوع في البداية والنهاية.</li>
    <li><strong>حرف كبير في اسم الدالة:</strong> <code>Print("مرحبا")</code> ← بايثون لا يعرف <code>Print</code>، يعرف <code>print</code> فقط.</li>
</ul>

<p>لا تخف من رسائل الخطأ. اقرأ آخر سطر منها — غالباً يخبرك بنوع الخطأ ورقم السطر الذي يحتاج إصلاحاً.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>print()</code> تعرض القيم على الشاشة، وهي أداتك لرؤية ما يجري</li>
    <li>ما بين علامتي التنصيص نصّ حرفي، وما خارجهما يُحسَب</li>
    <li>يمكن طباعة عدة قيم بفصلها بفواصل</li>
    <li><code>#</code> تبدأ تعليقاً يتجاهله بايثون، واشرح به <strong>لماذا</strong> لا <em>ماذا</em></li>
    <li>بايثون حسّاس لحالة الأحرف: <code>print</code> وليس <code>Print</code></li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اكتب برنامجاً يطبع بطاقة تعريف بك في أربعة أسطر: الاسم، المدينة، الهواية، وجملة عن هدفك من تعلم البرمجة. أضف تعليقاً في أعلى الملف يوضح ما يفعله البرنامج.</p>

<p>ثم جرّب متعمداً: احذف قوساً وشغّل البرنامج، واقرأ رسالة الخطأ بتمعّن. التعوّد على قراءة الأخطاء مبكراً سيوفّر عليك ساعات لاحقاً.</p>
`,
        en: `<p><code>print()</code> displays values on screen. Text goes inside quotes; anything outside is evaluated. Comments start with <code>#</code> and are ignored by Python — use them to explain <em>why</em>, not <em>what</em>.</p>`
    },
    code: `<span class="cm"># برنامجي الأول — يطبع تحية</span>
<span class="fn">print</span>(<span class="st">"Hello, World"</span>)


<span class="cm"># الفرق بين النص والعملية الحسابية</span>
<span class="fn">print</span>(<span class="st">"2 + 3"</span>)   <span class="cm"># يطبع: 2 + 3</span>
<span class="fn">print</span>(2 + 3)     <span class="cm"># يطبع: 5</span>


<span class="cm"># طباعة عدة قيم — بايثون يضع مسافة بينها تلقائياً</span>
<span class="fn">print</span>(<span class="st">"My name is"</span>, <span class="st">"Ahmed"</span>, <span class="st">"and I am"</span>, 25)
<span class="cm"># الناتج: My name is Ahmed and I am 25</span>


<span class="cm"># استخدام النوعين من التنصيص معاً</span>
<span class="fn">print</span>(<span class="st">'The teacher said: "Practice makes perfect"'</span>)


<span class="cm"># سطر فارغ للفصل بين الأقسام</span>
<span class="fn">print</span>()
<span class="fn">print</span>(<span class="st">"Program finished"</span>)`,
    quiz: {
        q: {
            ar: "ما الفرق بين print(\"5 + 5\") و print(5 + 5)؟",
            en: "What is the difference between print(\"5 + 5\") and print(5 + 5)?"
        },
        options: {
            ar: [
                "لا يوجد فرق، كلاهما يطبع 10",
                "الأول يطبع 5 + 5 كنص، والثاني يطبع 10",
                "الأول يطبع 10، والثاني يسبب خطأ",
                "كلاهما يطبع 5 + 5"
            ],
            en: [
                "No difference, both print 10",
                "The first prints 5 + 5 as text, the second prints 10",
                "The first prints 10, the second errors",
                "Both print 5 + 5"
            ]
        },
        correct: 1,
        explanation: {
            ar: "ما بين علامتي التنصيص يُعامَل كنصّ حرفي فيُطبع كما هو، أما خارجهما فيحسبه بايثون كعملية رياضية.",
            en: "Anything inside quotes is literal text and printed as-is; outside quotes Python evaluates it as an expression."
        }
    }
},

/* ---------- الدرس 4 ---------- */
{
    title: { ar: "المتغيرات وأنواع البيانات", en: "Variables and data types" },
    body: {
        ar: `
<p>حتى الآن كانت برامجنا تطبع قيماً ثابتة ثم تنساها فوراً. لبناء شيء مفيد، نحتاج إلى <strong>تخزين</strong> القيم لاستخدامها لاحقاً. هذا دور <strong>المتغيرات</strong>.</p>

<h3>ما هو المتغير؟</h3>

<p>تخيّله صندوقاً له اسم، تضع فيه قيمة وتستدعيها باسمه متى شئت. في بايثون تُنشئ المتغير بمجرد إسناد قيمة إليه بعلامة <code>=</code>:</p>

<p>انتبه لاتجاه القراءة: <code>name = "أحمد"</code> تُقرأ <strong>"خزّن النص أحمد في المتغير name"</strong>، وليس "name يساوي أحمد". علامة <code>=</code> هنا ليست مساواة رياضية بل <strong>عملية إسناد</strong>.</p>

<p>لهذا فإن سطراً مثل <code>count = count + 1</code> منطقي تماماً في البرمجة رغم أنه مستحيل رياضياً: خذ القيمة الحالية، أضف واحداً، ثم أعِد تخزين الناتج في نفس المتغير.</p>

<h3>قواعد تسمية المتغيرات</h3>

<ul>
    <li>يبدأ بحرف أو شرطة سفلية <code>_</code>، ولا يبدأ برقم أبداً</li>
    <li>يتكوّن من حروف وأرقام وشرطات سفلية فقط — لا مسافات ولا رموز</li>
    <li>حسّاس لحالة الأحرف: <code>age</code> و<code>Age</code> متغيران مختلفان تماماً</li>
    <li>لا يمكن استخدام كلمات بايثون المحجوزة مثل <code>if</code> و<code>print</code> و<code>for</code></li>
</ul>

<p><strong>نصيحة عملية:</strong> اختر أسماء تشرح نفسها. <code>x</code> لا يعني شيئاً بعد أسبوعين، بينما <code>student_age</code> واضح فوراً. العرف في بايثون هو الأحرف الصغيرة مع شرطة سفلية بين الكلمات (يسمّى snake_case).</p>

<h3>الأنواع الأربعة الأساسية</h3>

<p>كل قيمة في بايثون لها <strong>نوع</strong> يحدد ما يمكن فعله بها:</p>

<ul>
    <li><strong>int</strong> — عدد صحيح بلا فاصلة: <code>25</code>, <code>-7</code>, <code>1000</code></li>
    <li><strong>float</strong> — عدد عشري: <code>3.14</code>, <code>-0.5</code>, <code>99.0</code></li>
    <li><strong>str</strong> — نصّ بين علامتي تنصيص: <code>"مرحبا"</code>, <code>'123'</code></li>
    <li><strong>bool</strong> — قيمة منطقية، إما <code>True</code> أو <code>False</code> (بحرف كبير في البداية إلزامياً)</li>
</ul>

<p>لاحظ أن <code>"123"</code> بين تنصيص هو <strong>نصّ</strong> وليس رقماً، رغم أنه يبدو رقماً. هذا مصدر أخطاء شائع سنعود إليه.</p>

<h3>بايثون يستنتج النوع تلقائياً</h3>

<p>في لغات مثل Java تُضطر لكتابة نوع المتغير صراحة. في بايثون لا داعي: اكتب <code>age = 25</code> وسيفهم أنه <code>int</code>، واكتب <code>age = "25"</code> وسيفهم أنه <code>str</code>. للتأكد من نوع أي قيمة استخدم الدالة <code>type()</code>.</p>

<h3>المتغيرات قابلة لتغيير النوع</h3>

<p>يمكنك إعادة استخدام نفس المتغير بنوع مختلف تماماً: <code>data = 10</code> ثم <code>data = "نص"</code> — بايثون يسمح بذلك. مرن، لكنه سلاح ذو حدّين: تغيير نوع متغير في منتصف البرنامج يجعل الكود صعب التتبّع. الأفضل أن تُبقي كل متغير على نوعه.</p>

<h3>خطأ شائع: جمع نصّ مع رقم</h3>

<p>محاولة <code>"العمر: " + 25</code> ستعطيك <code>TypeError</code>. السبب أن <code>+</code> تعني "دمج" مع النصوص و"جمع" مع الأرقام، وبايثون لا يعرف أيهما تقصد.</p>

<p>لديك حلّان: إما تحويل الرقم إلى نصّ بـ <code>str(25)</code>، أو استخدام <strong>f-string</strong> وهي الطريقة الحديثة والأنظف: ضع حرف <code>f</code> قبل علامة التنصيص، ثم اكتب اسم المتغير بين قوسين معقوفين داخل النصّ.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>المتغير صندوق مسمّى تخزن فيه قيمة، و<code>=</code> هي عملية إسناد لا مساواة</li>
    <li>الأنواع الأساسية: <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code></li>
    <li>بايثون يستنتج النوع تلقائياً، و<code>type()</code> تكشفه لك</li>
    <li>أسماء المتغيرات حسّاسة لحالة الأحرف، واختر أسماء تشرح نفسها</li>
    <li>لدمج نصّ مع رقم استخدم <code>f-string</code> أو <code>str()</code></li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>أنشئ أربعة متغيرات: اسمك (نصّ)، عمرك (عدد صحيح)، طولك بالمتر (عدد عشري)، وهل تحب البرمجة (قيمة منطقية). ثم اطبع جملة واحدة تجمعها كلها باستخدام f-string، واطبع نوع كل متغير باستخدام <code>type()</code>.</p>
`,
        en: `<p>Variables store values using <code>=</code>, which is assignment, not equality. The four core types are <code>int</code>, <code>float</code>, <code>str</code> and <code>bool</code>. Python infers types automatically; use <code>type()</code> to check. Use f-strings to combine text and numbers.</p>`
    },
    code: `<span class="cm"># إنشاء متغيرات بأنواع مختلفة</span>
<span class="kw">name</span> = <span class="st">"Sarah"</span>          <span class="cm"># str  — نصّ</span>
<span class="kw">age</span> = 22                <span class="cm"># int  — عدد صحيح</span>
<span class="kw">height</span> = 1.68           <span class="cm"># float — عدد عشري</span>
<span class="kw">is_student</span> = <span class="kw">True</span>      <span class="cm"># bool — منطقي</span>


<span class="cm"># فحص النوع</span>
<span class="fn">print</span>(<span class="fn">type</span>(age))        <span class="cm"># &lt;class 'int'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="st">"25"</span>))       <span class="cm"># &lt;class 'str'&gt; — لاحظ الفرق!</span>


<span class="cm"># خطأ شائع: دمج نصّ مع رقم مباشرة</span>
<span class="cm"># print("Age: " + age)   ← TypeError</span>

<span class="cm"># الحل 1: التحويل بـ str()</span>
<span class="fn">print</span>(<span class="st">"Age: "</span> + <span class="fn">str</span>(age))

<span class="cm"># الحل 2 (الأفضل): f-string</span>
<span class="fn">print</span>(<span class="st">f"My name is {name} and I am {age} years old"</span>)
<span class="fn">print</span>(<span class="st">f"My height is {height}m, student: {is_student}"</span>)


<span class="cm"># إعادة الإسناد — القيمة القديمة تُستبدل</span>
<span class="kw">score</span> = 10
<span class="kw">score</span> = score + 5       <span class="cm"># منطقي في البرمجة: خذ 10 وأضف 5</span>
<span class="fn">print</span>(score)             <span class="cm"># 15</span>`,
    quiz: {
        q: {
            ar: "ما نوع القيمة المخزّنة في المتغير:  x = \"100\"  ؟",
            en: "What is the type of the value in:  x = \"100\"  ?"
        },
        options: {
            ar: [
                "int لأنها تحتوي أرقاماً",
                "float لأنها قيمة عددية",
                "str لأنها بين علامتي تنصيص",
                "bool"
            ],
            en: [
                "int because it contains digits",
                "float because it is numeric",
                "str because it is inside quotes",
                "bool"
            ]
        },
        correct: 2,
        explanation: {
            ar: "وجود علامتي التنصيص يجعلها نصّاً مهما بدت رقمية. لإجراء عمليات حسابية عليها ستحتاج تحويلها بـ int() أولاً.",
            en: "The quotes make it a string no matter how numeric it looks. To do math with it you must convert it with int() first."
        }
    }
},

/* ---------- الدرس 5 ---------- */
{
    title: { ar: "السلاسل النصية والتعامل معها", en: "Strings and how to work with them" },
    body: {
        ar: `
<p>النصوص هي أكثر أنواع البيانات التي ستتعامل معها: أسماء مستخدمين، رسائل، محتوى ملفات، ردود من الإنترنت. لذلك تقدّم بايثون أدوات غنية للتعامل معها.</p>

<h3>إنشاء النصوص</h3>

<p>تُنشأ بعلامة تنصيص مفردة أو مزدوجة. وللنصوص متعددة الأسطر استخدم ثلاث علامات <code>"""</code> في البداية والنهاية، وسيحتفظ بايثون بالأسطر كما كتبتها.</p>

<h3>الدمج والتكرار</h3>

<p>علامة <code>+</code> تدمج نصّين، وعلامة <code>*</code> تكرّر النصّ عدداً من المرات. مفيدة لرسم فواصل بسيطة في الطرفية.</p>

<h3>الفهرسة: الوصول إلى حرف محدد</h3>

<p>كل حرف في النصّ له <strong>رقم موضع (index)</strong>، والعدّ يبدأ من <strong>صفر</strong> لا من واحد. هذه نقطة تربك المبتدئين دائماً: في <code>"بايثون"</code> الحرف الأول موضعه <code>0</code>.</p>

<p>وهناك ميزة أنيقة: الأرقام السالبة تعدّ من النهاية. <code>text[-1]</code> هو آخر حرف دائماً، مهما كان طول النصّ.</p>

<h3>التقطيع (Slicing): استخراج جزء</h3>

<p>الصيغة <code>text[start:end]</code> تعطيك المقطع من <code>start</code> حتى <code>end</code> <strong>دون أن تشمل</strong> <code>end</code>. هذا "الاستثناء للنهاية" مربك في البداية لكنه مقصود: يجعل <code>text[0:3]</code> تعطي ثلاثة أحرف بالضبط.</p>

<p>يمكنك حذف أحد الرقمين: <code>text[:3]</code> تعني "من البداية"، و<code>text[3:]</code> تعني "حتى النهاية".</p>

<h3>الدوال الأكثر استخداماً</h3>

<ul>
    <li><code>len(text)</code> — عدد الأحرف</li>
    <li><code>text.upper()</code> / <code>text.lower()</code> — تحويل حالة الأحرف (للنصوص اللاتينية)</li>
    <li><code>text.strip()</code> — إزالة المسافات الزائدة من الطرفين</li>
    <li><code>text.replace(a, b)</code> — استبدال جزء بآخر</li>
    <li><code>text.split(sep)</code> — تقسيم النصّ إلى قائمة</li>
    <li><code>text.startswith(x)</code> / <code>text.endswith(x)</code> — فحص البداية أو النهاية</li>
    <li><code>x in text</code> — هل يحتوي النصّ على <code>x</code>؟ يُرجع True أو False</li>
</ul>

<h3>نقطة جوهرية: النصوص غير قابلة للتعديل</h3>

<p>هذه من أهم المفاهيم في بايثون. النصّ <strong>immutable</strong>، أي لا يمكن تغيير حرف بداخله مباشرة. محاولة <code>text[0] = "م"</code> ستعطي خطأً.</p>

<p>ولذلك فإن كل الدوال أعلاه <strong>لا تعدّل النصّ الأصلي</strong>، بل تُرجع نصّاً جديداً. إذا كتبت <code>text.upper()</code> وحدها فلن يتغير شيء — عليك تخزين الناتج: <code>text = text.upper()</code>. هذا خطأ يقع فيه كل مبتدئ تقريباً.</p>

<h3>f-string بتفصيل أكثر</h3>

<p>سبق أن استخدمناها للدمج، لكنها تفعل أكثر: يمكنك وضع أي تعبير داخل الأقواس المعقوفة، بل وتنسيق الأرقام. مثلاً <code>f"{price:.2f}"</code> تعرض الرقم بمنزلتين عشريتين فقط — مفيدة جداً للأسعار.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>الفهرسة تبدأ من صفر، والسالب يعدّ من النهاية</li>
    <li>التقطيع <code>[start:end]</code> لا يشمل <code>end</code></li>
    <li>النصوص غير قابلة للتعديل: الدوال تُرجع نصّاً جديداً ولا تغيّر الأصل</li>
    <li>خزّن الناتج دائماً: <code>text = text.strip()</code></li>
    <li>f-string تدعم التعبيرات والتنسيق الرقمي</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>خذ النصّ <code>"  python programming  "</code> ثم: أزل المسافات الزائدة، حوّله لأحرف كبيرة، اطبع طوله، اطبع أول خمسة أحرف، واطبع آخر حرف. تأكد من تخزين الناتج في كل خطوة.</p>
`,
        en: `<p>Strings are indexed from zero, and negative indices count from the end. Slicing <code>[start:end]</code> excludes <code>end</code>. Strings are immutable — methods return a new string instead of modifying the original, so always store the result.</p>`
    },
    code: `<span class="kw">text</span> = <span class="st">"Python"</span>

<span class="cm"># الفهرسة تبدأ من صفر</span>
<span class="fn">print</span>(text[0])      <span class="cm"># P  — الحرف الأول</span>
<span class="fn">print</span>(text[-1])     <span class="cm"># n  — آخر حرف دائماً</span>

<span class="cm"># التقطيع: من 0 حتى 3 دون أن يشمل 3</span>
<span class="fn">print</span>(text[0:3])    <span class="cm"># Pyt</span>
<span class="fn">print</span>(text[3:])     <span class="cm"># hon</span>


<span class="cm"># الدمج والتكرار</span>
<span class="fn">print</span>(<span class="st">"-"</span> * 30)     <span class="cm"># فاصل من 30 شرطة</span>


<span class="kw">messy</span> = <span class="st">"   Hello World   "</span>

<span class="cm"># خطأ شائع: استدعاء الدالة دون تخزين الناتج</span>
messy.strip()                <span class="cm"># لا يغيّر شيئاً!</span>
<span class="fn">print</span>(<span class="fn">len</span>(messy))          <span class="cm"># 17 — لم يتغيّر</span>

<span class="cm"># الصحيح: خزّن الناتج</span>
<span class="kw">clean</span> = messy.strip()
<span class="fn">print</span>(<span class="fn">len</span>(clean))          <span class="cm"># 11</span>
<span class="fn">print</span>(clean.upper())       <span class="cm"># HELLO WORLD</span>
<span class="fn">print</span>(clean.replace(<span class="st">"World"</span>, <span class="st">"Python"</span>))


<span class="cm"># الفحص والاحتواء</span>
<span class="fn">print</span>(<span class="st">"Hello"</span> <span class="kw">in</span> clean)   <span class="cm"># True</span>


<span class="cm"># f-string مع تنسيق رقمي</span>
<span class="kw">price</span> = 49.6789
<span class="fn">print</span>(<span class="st">f"Price: \${price:.2f}"</span>)   <span class="cm"># 49.68</span>`,
    quiz: {
        q: {
            ar: "ما ناتج هذا الكود؟\nname = \"python\"\nname.upper()\nprint(name)",
            en: "What does this print?\nname = \"python\"\nname.upper()\nprint(name)"
        },
        options: {
            ar: [
                "PYTHON",
                "python",
                "خطأ في الكود",
                "Python"
            ],
            en: [
                "PYTHON",
                "python",
                "An error",
                "Python"
            ]
        },
        correct: 1,
        explanation: {
            ar: "النصوص غير قابلة للتعديل، فدالة upper() تُرجع نصّاً جديداً ولا تغيّر الأصل. لحفظ التغيير: name = name.upper()",
            en: "Strings are immutable, so upper() returns a new string without changing the original. To keep it: name = name.upper()"
        }
    }
},

/* ---------- الدرس 6 ---------- */
{
    title: { ar: "الأرقام والعمليات الحسابية", en: "Numbers and arithmetic" },
    body: {
        ar: `
<p>بايثون آلة حاسبة ممتازة، لكن فيها تفاصيل تُوقع المبتدئين في أخطاء صامتة — أخطاء لا تُظهر رسالة، بل نتيجة خاطئة.</p>

<h3>العمليات الأساسية</h3>

<ul>
    <li><code>+</code> جمع، <code>-</code> طرح، <code>*</code> ضرب</li>
    <li><code>/</code> قسمة عادية — <strong>تُرجع دائماً عدداً عشرياً</strong> حتى لو كانت القسمة كاملة</li>
    <li><code>//</code> قسمة صحيحة — تُرجع الجزء الصحيح فقط</li>
    <li><code>%</code> باقي القسمة (Modulo)</li>
    <li><code>**</code> الأُس</li>
</ul>

<p>انتبه للفرق: <code>10 / 2</code> تعطي <code>5.0</code> وليس <code>5</code>. النتيجة من نوع <code>float</code> دائماً مع <code>/</code>. إذا أردت عدداً صحيحاً استخدم <code>//</code>.</p>

<h3>لماذا % مهمة أكثر مما تبدو؟</h3>

<p>باقي القسمة قد يبدو عملية أكاديمية، لكنه من أكثر ما ستستخدمه عملياً:</p>

<ul>
    <li><strong>فحص الزوجية:</strong> <code>n % 2 == 0</code> تعني أن العدد زوجي</li>
    <li><strong>التكرار الدوري:</strong> لتوزيع عناصر على مجموعات بالتناوب</li>
    <li><strong>تحويل الوقت:</strong> <code>seconds % 60</code> تعطيك الثواني المتبقية بعد الدقائق</li>
</ul>

<h3>ترتيب الأولويات</h3>

<p>بايثون يتبع الترتيب الرياضي المعتاد: الأُس أولاً، ثم الضرب والقسمة، ثم الجمع والطرح. و<strong>الأقواس تتقدّم على الجميع</strong>.</p>

<p>نصيحة عملية: حتى لو كنت واثقاً من الترتيب، ضع أقواساً. <code>(a + b) / 2</code> أوضح من <code>a + b / 2</code>، وأقل عرضة للخطأ عند التعديل لاحقاً.</p>

<h3>الاختصارات</h3>

<p>بدل <code>count = count + 1</code> يمكنك كتابة <code>count += 1</code>. وتعمل مع كل العمليات: <code>-=</code>, <code>*=</code>, <code>/=</code>. ستراها كثيراً في كود الآخرين، فاعتد عليها.</p>

<h3>فخّ الأعداد العشرية</h3>

<p>جرّب <code>0.1 + 0.2</code> في بايثون، ستحصل على <code>0.30000000000000004</code> وليس <code>0.3</code>. هذا ليس خطأً في بايثون — إنه كيف تخزّن كل الحواسيب الأعداد العشرية في النظام الثنائي، تماماً كما لا يمكنك كتابة ثلث بدقة كاملة في النظام العشري.</p>

<p>النتيجة العملية: <strong>لا تقارن أعداداً عشرية بعلامة المساواة مباشرة</strong>. بدل <code>if total == 0.3</code> استخدم مقارنة بهامش صغير، أو قرّب بـ <code>round()</code>. وإذا كنت تتعامل مع أموال، استخدم مكتبة <code>decimal</code> المخصصة لذلك.</p>

<h3>دوال رقمية مفيدة</h3>

<ul>
    <li><code>abs(x)</code> — القيمة المطلقة</li>
    <li><code>round(x, n)</code> — التقريب إلى <code>n</code> منزلة عشرية</li>
    <li><code>max()</code> و<code>min()</code> — الأكبر والأصغر</li>
    <li><code>int(x)</code> — تحويل إلى عدد صحيح، ويقتطع الجزء العشري <strong>دون تقريب</strong>: <code>int(9.9)</code> تعطي <code>9</code></li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>/</code> تُرجع عدداً عشرياً دائماً، و<code>//</code> تُرجع الجزء الصحيح</li>
    <li><code>%</code> مفيدة لفحص الزوجية والتوزيع الدوري وتحويل الوحدات</li>
    <li>الأقواس تحسم الترتيب وتجعل الكود أوضح</li>
    <li>الأعداد العشرية غير دقيقة تماماً — لا تقارنها بـ <code>==</code></li>
    <li><code>int()</code> تقتطع ولا تقرّب، بينما <code>round()</code> تقرّب</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اكتب برنامجاً يحوّل عدداً من الثواني (مثلاً 3725) إلى صيغة ساعات ودقائق وثوانٍ، باستخدام <code>//</code> و<code>%</code> فقط. الناتج المتوقع: 1 ساعة، 2 دقيقة، 5 ثانية.</p>
`,
        en: `<p><code>/</code> always returns a float; <code>//</code> returns the integer part; <code>%</code> gives the remainder and is widely used for parity and cyclic distribution. Floating point numbers are imprecise, so avoid comparing them with <code>==</code>.</p>`
    },
    code: `<span class="cm"># الفرق بين أنواع القسمة</span>
<span class="fn">print</span>(10 / 3)     <span class="cm"># 3.3333... — عشري دائماً</span>
<span class="fn">print</span>(10 // 3)    <span class="cm"># 3 — الجزء الصحيح فقط</span>
<span class="fn">print</span>(10 % 3)     <span class="cm"># 1 — الباقي</span>
<span class="fn">print</span>(2 ** 10)    <span class="cm"># 1024 — الأُس</span>

<span class="fn">print</span>(10 / 2)     <span class="cm"># 5.0 وليس 5 — انتبه!</span>


<span class="cm"># استخدام عملي لـ % : تحويل الثواني</span>
<span class="kw">total</span> = 3725
<span class="kw">hours</span> = total // 3600           <span class="cm"># 1</span>
<span class="kw">minutes</span> = (total % 3600) // 60  <span class="cm"># 2</span>
<span class="kw">seconds</span> = total % 60           <span class="cm"># 5</span>
<span class="fn">print</span>(<span class="st">f"{hours}h {minutes}m {seconds}s"</span>)


<span class="cm"># الاختصارات</span>
<span class="kw">score</span> = 10
score += 5      <span class="cm"># مثل score = score + 5</span>
score *= 2      <span class="cm"># 30</span>


<span class="cm"># فخّ الأعداد العشرية</span>
<span class="fn">print</span>(0.1 + 0.2)              <span class="cm"># 0.30000000000000004</span>
<span class="fn">print</span>(0.1 + 0.2 == 0.3)       <span class="cm"># False !</span>
<span class="fn">print</span>(<span class="fn">round</span>(0.1 + 0.2, 2) == 0.3)  <span class="cm"># True</span>


<span class="cm"># int تقتطع ولا تقرّب</span>
<span class="fn">print</span>(<span class="fn">int</span>(9.99))     <span class="cm"># 9</span>
<span class="fn">print</span>(<span class="fn">round</span>(9.99))   <span class="cm"># 10</span>`,
    quiz: {
        q: {
            ar: "ما ناتج  int(7.89)  في بايثون؟",
            en: "What is the result of  int(7.89)  in Python?"
        },
        options: {
            ar: [ "8", "7", "7.9", "خطأ" ],
            en: [ "8", "7", "7.9", "An error" ]
        },
        correct: 1,
        explanation: {
            ar: "دالة int() تقتطع الجزء العشري ولا تقرّب، فتعطي 7. للتقريب الحقيقي استخدم round() التي ستعطي 8.",
            en: "int() truncates the decimal part rather than rounding, so it gives 7. Use round() for actual rounding, which gives 8."
        }
    }
},

/* ---------- الدرس 7 ---------- */
{
    title: { ar: "المدخلات input والتحويل بين الأنواع", en: "Input and type conversion" },
    body: {
        ar: `
<p>حتى الآن كانت برامجك تعمل بقيم كتبتها أنت بنفسك. لتصبح تفاعلية، تحتاج أن تسأل المستخدم. هذا دور دالة <strong>input</strong>.</p>

<h3>كيف تعمل input؟</h3>

<p>تعرض رسالة على الشاشة، تتوقف وتنتظر حتى يكتب المستخدم شيئاً ويضغط Enter، ثم تُرجع ما كتبه. عادةً نخزّن الناتج في متغير لنستخدمه.</p>

<p><strong>نصيحة صغيرة مهمة:</strong> اترك مسافة في نهاية رسالتك — <code>input("اسمك: ")</code> — ليظهر مؤشر الكتابة بعيداً عن النصّ بدل أن يلتصق به.</p>

<h3>القاعدة الذهبية: input تُرجع نصّاً دائماً</h3>

<p>هذه أهم جملة في هذا الدرس. حتى لو كتب المستخدم <code>25</code>، فإن ما تستقبله هو النصّ <code>"25"</code> وليس الرقم.</p>

<p>لذلك فإن هذا الكود لن يعمل كما تتوقع:</p>

<ul>
    <li><code>age = input("عمرك: ")</code></li>
    <li><code>print(age + 1)</code> ← <strong>TypeError</strong>، لأنك تحاول جمع نصّ مع رقم</li>
</ul>

<p>وأسوأ منه هذا، لأنه لا يعطي خطأً بل نتيجة خاطئة صامتة:</p>

<ul>
    <li><code>num = input("رقم: ")</code> (المستخدم كتب 5)</li>
    <li><code>print(num * 3)</code> ← يطبع <code>555</code> لأنه <strong>كرّر النصّ</strong> ثلاث مرات بدل أن يضربه!</li>
</ul>

<h3>التحويل بين الأنواع</h3>

<p>الحل هو تحويل النصّ إلى النوع المناسب:</p>

<ul>
    <li><code>int(x)</code> — إلى عدد صحيح</li>
    <li><code>float(x)</code> — إلى عدد عشري</li>
    <li><code>str(x)</code> — إلى نصّ</li>
    <li><code>bool(x)</code> — إلى قيمة منطقية</li>
</ul>

<p>يمكنك التحويل مباشرة عند الاستقبال: <code>age = int(input("عمرك: "))</code>. اقرأها من الداخل للخارج: نستقبل نصّاً، ثم نحوّله لعدد، ثم نخزّنه.</p>

<h3>متى يفشل التحويل؟</h3>

<p>إذا كتب المستخدم <code>"عشرين"</code> بدل <code>20</code>، فإن <code>int()</code> ستعطي <code>ValueError</code> ويتوقف البرنامج. وكذلك <code>int("3.5")</code> تفشل — لأن النصّ يمثل عدداً عشرياً لا صحيحاً. الحل في هذه الحالة: <code>int(float("3.5"))</code>.</p>

<p>سنتعلّم في درس الاستثناءات كيف نتعامل مع هذه الحالات بأناقة بدل أن ينهار البرنامج. حالياً يكفي أن تعرف أن هذا الاحتمال قائم.</p>

<h3>سلوك bool مع القيم الفارغة</h3>

<p>هناك قاعدة عامة في بايثون: القيم "الفارغة" تُعتبر <code>False</code>. فـ <code>0</code> والنصّ الفارغ <code>""</code> والقائمة الفارغة كلها <code>False</code>، وأي شيء آخر <code>True</code>.</p>

<p>انتبه لفخّ شائع: <code>bool("False")</code> تعطي <strong>True</strong>! لأن النصّ غير فارغ، ولا يهم محتواه.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>input()</code> توقف البرنامج وتنتظر المستخدم، وتُرجع <strong>نصّاً دائماً</strong></li>
    <li>حوّل بـ <code>int()</code> أو <code>float()</code> قبل أي عملية حسابية</li>
    <li>ضرب نصّ في رقم يكرّره ولا يحسبه — خطأ صامت خطير</li>
    <li>التحويل يفشل بـ <code>ValueError</code> إذا لم يكن النصّ قابلاً للتحويل</li>
    <li>القيم الفارغة <code>False</code> منطقياً، وأي نصّ غير فارغ <code>True</code></li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اكتب برنامجاً يسأل المستخدم عن اسمه وسنة ميلاده، ثم يطبع: "مرحباً [الاسم]، عمرك تقريباً [العمر] سنة". استخدم <code>2026</code> كسنة حالية. تأكد من التحويل الصحيح، ثم جرّب إدخال نصّ بدل رقم وشاهد رسالة الخطأ.</p>
`,
        en: `<p><code>input()</code> always returns a string, even when the user types digits. Convert with <code>int()</code> or <code>float()</code> before doing arithmetic. Multiplying a string by a number repeats it instead of computing — a dangerous silent bug.</p>`
    },
    code: `<span class="cm"># استقبال نصّ — لا يحتاج تحويلاً</span>
<span class="kw">name</span> = <span class="fn">input</span>(<span class="st">"What is your name? "</span>)
<span class="fn">print</span>(<span class="st">f"Hello, {name}"</span>)


<span class="cm"># الخطأ الصامت: الضرب يكرّر النصّ!</span>
<span class="kw">num_text</span> = <span class="fn">input</span>(<span class="st">"Type the number 5: "</span>)
<span class="fn">print</span>(num_text * 3)      <span class="cm"># 555 وليس 15 !</span>


<span class="cm"># الصحيح: التحويل قبل الحساب</span>
<span class="kw">num</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="st">"Type a number: "</span>))
<span class="fn">print</span>(num * 3)          <span class="cm"># 15 ✓</span>


<span class="cm"># مثال متكامل: حساب العمر</span>
<span class="kw">birth_year</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="st">"Your birth year: "</span>))
<span class="kw">age</span> = 2026 - birth_year
<span class="fn">print</span>(<span class="st">f"You are about {age} years old"</span>)


<span class="cm"># أعداد عشرية</span>
<span class="kw">price</span> = <span class="fn">float</span>(<span class="fn">input</span>(<span class="st">"Price: "</span>))
<span class="kw">total</span> = price * 1.2       <span class="cm"># مع ضريبة 20%</span>
<span class="fn">print</span>(<span class="st">f"Total: {total:.2f}"</span>)


<span class="cm"># فخّ bool مع النصوص</span>
<span class="fn">print</span>(<span class="fn">bool</span>(<span class="st">""</span>))        <span class="cm"># False — نصّ فارغ</span>
<span class="fn">print</span>(<span class="fn">bool</span>(<span class="st">"False"</span>))   <span class="cm"># True ! — نصّ غير فارغ</span>`,
    quiz: {
        q: {
            ar: "المستخدم كتب 4، فماذا يطبع هذا الكود؟\nn = input(\"رقم: \")\nprint(n * 2)",
            en: "The user typed 4. What does this print?\nn = input(\"number: \")\nprint(n * 2)"
        },
        options: {
            ar: [ "8", "44", "خطأ TypeError", "4 4" ],
            en: [ "8", "44", "A TypeError", "4 4" ]
        },
        correct: 1,
        explanation: {
            ar: "input تُرجع نصّاً، وضرب نصّ في رقم يكرّره. فـ \"4\" * 2 تعطي \"44\". للحصول على 8 حوّل أولاً: int(input(...)).",
            en: "input returns a string, and multiplying a string repeats it. \"4\" * 2 gives \"44\". To get 8, convert first with int(input(...))."
        }
    }
},

/* ---------- الدرس 8 — مشروع ---------- */
{
    title: { ar: "مشروع 1: آلة حاسبة بسيطة", en: "Project 1: A simple calculator" },
    body: {
        ar: `
<p>حان وقت جمع كل ما تعلمته في المستوى الأول: المتغيرات، الأنواع، <code>input</code>، التحويل، f-string، والعمليات الحسابية. سنبني آلة حاسبة تعمل فعلاً.</p>

<h3>ما الذي سنبنيه بالضبط؟</h3>

<p>برنامج يطلب رقمين وعملية حسابية، ثم يعرض النتيجة منسّقة. سنبنيه على ثلاث مراحل، وكل مرحلة تعمل بذاتها.</p>

<h3>المرحلة الأولى: النسخة الأساسية</h3>

<p>ابدأ بأبسط شيء يعمل: استقبل رقمين، اجمعهما، اطبع الناتج. لا تحاول بناء كل شيء دفعة واحدة — هذه عادة تُتعب المبتدئين. اجعل شيئاً صغيراً يعمل، ثم وسّعه.</p>

<h3>المرحلة الثانية: كل العمليات</h3>

<p>الآن نضيف اختيار العملية. سنستخدم الشروط التي ستتعلمها بالتفصيل في المستوى التالي، لكن الفكرة بديهية: إذا اختار المستخدم <code>+</code> نجمع، وإذا اختار <code>-</code> نطرح، وهكذا.</p>

<h3>المرحلة الثالثة: معالجة الحالات الخاصة</h3>

<p>هنا يفترق البرنامج التعليمي عن البرنامج الحقيقي. ما الذي قد يسوء؟</p>

<ul>
    <li><strong>القسمة على صفر:</strong> ستوقف البرنامج بخطأ. يجب فحصها قبل التنفيذ.</li>
    <li><strong>عملية غير معروفة:</strong> إذا كتب المستخدم <code>x</code> بدل <code>*</code>.</li>
    <li><strong>نتيجة عشرية طويلة:</strong> <code>10 / 3</code> تعطي رقماً بستة عشر منزلة. نقصرها بـ f-string.</li>
</ul>

<p>التفكير في "ما الذي قد يسوء؟" قبل كتابة الكود هو أهم عادة تفصل المبرمج المبتدئ عن المحترف.</p>

<h3>ملاحظات على الكود</h3>

<p>في الكود المرفق ستلاحظ استخدام <code>.strip()</code> على العملية المُدخلة. السبب أن المستخدم قد يضغط مسافة بالخطأ، و<code>" +"</code> لا تساوي <code>"+"</code> في المقارنة. تنظيف المدخلات عادة جيدة تتبناها من الآن.</p>

<h3>تحديات للتوسيع</h3>

<p>بعد أن يعمل البرنامج، جرّب:</p>

<ul>
    <li>أضف عملية باقي القسمة <code>%</code> والأُس <code>**</code></li>
    <li>اعرض العملية كاملة في النتيجة: <code>10 + 5 = 15</code></li>
    <li>اجعل البرنامج يتكرّر حتى يكتب المستخدم <code>خروج</code> (ستحتاج الحلقات — المستوى التالي)</li>
    <li>احفظ آخر نتيجة واسمح باستخدامها في العملية التالية</li>
</ul>

<h3>ماذا أنجزت في هذا المستوى؟</h3>

<ul>
    <li>فهمت ما البرمجة ولماذا بايثون، وجهّزت بيئة عمل حقيقية</li>
    <li>تحكّمت في <code>print</code> والتعليقات والمتغيرات والأنواع الأربعة</li>
    <li>تعاملت مع النصوص فهرسةً وتقطيعاً ودوالّ</li>
    <li>أتقنت العمليات الحسابية وتجنّبت فخاخ الأعداد العشرية</li>
    <li>استقبلت مدخلات المستخدم وحوّلتها بأمان</li>
    <li>وبنيت أول برنامج تفاعلي كامل بيديك</li>
</ul>

<p>في المستوى التالي سنعطي برامجك القدرة على اتخاذ القرار والتكرار — وهنا تبدأ البرمجة الحقيقية.</p>
`,
        en: `<p>Time to combine everything from Level 1 into a working calculator: variables, types, input, conversion, f-strings and arithmetic. Build it in three stages, and handle edge cases like division by zero.</p>`
    },
    code: `<span class="cm"># ============================================</span>
<span class="cm"># مشروع: آلة حاسبة بسيطة</span>
<span class="cm"># ============================================</span>

<span class="fn">print</span>(<span class="st">"-"</span> * 35)
<span class="fn">print</span>(<span class="st">"     Koudna Calculator"</span>)
<span class="fn">print</span>(<span class="st">"-"</span> * 35)

<span class="cm"># 1) استقبال المدخلات مع التحويل</span>
<span class="kw">num1</span> = <span class="fn">float</span>(<span class="fn">input</span>(<span class="st">"First number: "</span>))
<span class="kw">operation</span> = <span class="fn">input</span>(<span class="st">"Operation (+ - * /): "</span>).strip()
<span class="kw">num2</span> = <span class="fn">float</span>(<span class="fn">input</span>(<span class="st">"Second number: "</span>))

<span class="fn">print</span>(<span class="st">"-"</span> * 35)

<span class="cm"># 2) تنفيذ العملية المطلوبة</span>
<span class="kw">if</span> operation == <span class="st">"+"</span>:
    <span class="kw">result</span> = num1 + num2
    <span class="fn">print</span>(<span class="st">f"{num1} + {num2} = {result:.2f}"</span>)

<span class="kw">elif</span> operation == <span class="st">"-"</span>:
    <span class="kw">result</span> = num1 - num2
    <span class="fn">print</span>(<span class="st">f"{num1} - {num2} = {result:.2f}"</span>)

<span class="kw">elif</span> operation == <span class="st">"*"</span>:
    <span class="kw">result</span> = num1 * num2
    <span class="fn">print</span>(<span class="st">f"{num1} × {num2} = {result:.2f}"</span>)

<span class="kw">elif</span> operation == <span class="st">"/"</span>:
    <span class="cm"># الحالة الخاصة: القسمة على صفر</span>
    <span class="kw">if</span> num2 == 0:
        <span class="fn">print</span>(<span class="st">"Error: cannot divide by zero"</span>)
    <span class="kw">else</span>:
        <span class="kw">result</span> = num1 / num2
        <span class="fn">print</span>(<span class="st">f"{num1} ÷ {num2} = {result:.2f}"</span>)

<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">f"Unknown operation: {operation}"</span>)

<span class="fn">print</span>(<span class="st">"-"</span> * 35)
<span class="fn">print</span>(<span class="st">"Thanks for using Koudna Calculator"</span>)`,
    quiz: {
        q: {
            ar: "لماذا استخدمنا float() بدل int() لاستقبال الأرقام في الآلة الحاسبة؟",
            en: "Why did we use float() instead of int() for the calculator inputs?"
        },
        options: {
            ar: [
                "لأن float أسرع في التنفيذ",
                "ليقبل البرنامج الأعداد العشرية مثل 2.5 لا الصحيحة فقط",
                "لأن int لا تعمل مع input",
                "لا فرق بينهما هنا"
            ],
            en: [
                "Because float is faster",
                "So the program accepts decimals like 2.5, not just whole numbers",
                "Because int does not work with input",
                "There is no difference here"
            ]
        },
        correct: 1,
        explanation: {
            ar: "int() ترفض أي مدخل عشري وتعطي ValueError مع \"2.5\". أما float() فتقبل الصحيح والعشري معاً، وهو ما تحتاجه آلة حاسبة حقيقية.",
            en: "int() rejects decimal input and raises ValueError on \"2.5\". float() accepts both whole and decimal numbers, which a real calculator needs."
        }
    }
}

,

/* ---------- الدرس 9 ---------- */
{
    title: { ar: "المعاملات المنطقية والمقارنات", en: "Comparison and logical operators" },
    body: {
        ar: `
<p>قبل أن يتّخذ برنامجك قراراً، عليه أن يطرح سؤالاً تكون إجابته نعم أو لا. هذا الدرس عن كيفية طرح تلك الأسئلة.</p>

<h3>معاملات المقارنة</h3>

<p>كل واحد منها يقارن قيمتين ويُرجع <code>True</code> أو <code>False</code> — لا شيء آخر:</p>

<ul>
    <li><code>==</code> هل هما متساويان؟</li>
    <li><code>!=</code> هل هما مختلفان؟</li>
    <li><code>&gt;</code> و<code>&lt;</code> أكبر من، أصغر من</li>
    <li><code>&gt;=</code> و<code>&lt;=</code> أكبر أو يساوي، أصغر أو يساوي</li>
</ul>

<p>لاحظ أن نتيجة المقارنة قيمة حقيقية يمكنك تخزينها في متغير: <code>is_adult = age >= 18</code>. هذه ليست حيلة، بل أسلوب شائع يجعل الكود أوضح.</p>

<h3>الفرق الحاسم بين = و ==</h3>

<p>سبق أن أشرنا إليه، لكنه يستحق التكرار لأنه الخطأ الأول عند المبتدئين:</p>

<ul>
    <li><code>=</code> <strong>إسناد</strong>: خزّن هذه القيمة في المتغير</li>
    <li><code>==</code> <strong>مقارنة</strong>: هل القيمتان متساويتان؟</li>
</ul>

<p>لحسن الحظ، بايثون يحميك: كتابة <code>if x = 5:</code> تعطي <code>SyntaxError</code> فوراً بدل أن تمرّ بصمت كما يحدث في لغات أخرى.</p>

<h3>مقارنة النصوص</h3>

<p>يمكنك مقارنة النصوص أيضاً، لكن انتبه لنقطتين:</p>

<ul>
    <li>المقارنة <strong>حسّاسة لحالة الأحرف</strong>: <code>"Ali" == "ali"</code> تعطي <code>False</code>. الحل الشائع: وحّد الحالة قبل المقارنة بـ <code>.lower()</code>.</li>
    <li>معاملات مثل <code>&gt;</code> تقارن النصوص أبجدياً حسب ترتيب الحروف، وهو مفيد للترتيب لكنه نادراً ما يُستخدم في الشروط.</li>
</ul>

<h3>المعاملات المنطقية: and و or و not</h3>

<p>هذه تدمج أكثر من شرط:</p>

<ul>
    <li><strong>and</strong> — تُرجع True فقط إذا كان <strong>الطرفان</strong> صحيحين</li>
    <li><strong>or</strong> — تُرجع True إذا كان <strong>أحدهما على الأقل</strong> صحيحاً</li>
    <li><strong>not</strong> — تعكس النتيجة: True تصبح False والعكس</li>
</ul>

<p>مثال عملي: للسماح بالدخول تحتاج أن يكون العمر مناسباً <strong>و</strong> التذكرة موجودة → <code>and</code>. وللحصول على خصم يكفي أن تكون طالباً <strong>أو</strong> متقاعداً → <code>or</code>.</p>

<h3>خطأ شائع جداً: نسيان تكرار المتغير</h3>

<p>يكتب المبتدئون: <code>if day == "السبت" or "الأحد":</code> ويتوقعون أن تعمل. لكنها <strong>تعطي True دائماً</strong>!</p>

<p>السبب أن بايثون يقرأها كشرطين منفصلين: الأول <code>day == "السبت"</code>، والثاني هو النصّ <code>"الأحد"</code> وحده — وأي نصّ غير فارغ قيمته True. فتكون النتيجة True مهما كان اليوم.</p>

<p>الصواب: <code>if day == "السبت" or day == "الأحد":</code><br>
أو الأنظف: <code>if day in ["السبت", "الأحد"]:</code></p>

<h3>التقييم القصير (Short-circuit)</h3>

<p>بايثون ذكي: في <code>A and B</code>، إذا كان <code>A</code> خاطئاً فلن يفحص <code>B</code> إطلاقاً — النتيجة محسومة. وفي <code>A or B</code>، إذا كان <code>A</code> صحيحاً فلن يفحص <code>B</code>.</p>

<p>هذا ليس تفصيلاً نظرياً، بل يُستخدم عملياً للحماية: <code>if divisor != 0 and total / divisor > 5:</code> — الشرط الأول يحمي الثاني من القسمة على صفر.</p>

<h3>سلسلة المقارنات</h3>

<p>بايثون يسمح بشيء أنيق لا تدعمه معظم اللغات: <code>if 0 <= score <= 100:</code> بدل <code>if score >= 0 and score <= 100:</code>. أقصر وأقرب للكتابة الرياضية.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>معاملات المقارنة تُرجع <code>True</code> أو <code>False</code>، ويمكن تخزين نتيجتها</li>
    <li><code>=</code> إسناد و<code>==</code> مقارنة</li>
    <li>مقارنة النصوص حسّاسة لحالة الأحرف</li>
    <li><code>and</code> تتطلب الطرفين، <code>or</code> يكفيها أحدهما، <code>not</code> تعكس</li>
    <li>كرّر اسم المتغير في كل طرف: <code>x == 1 or x == 2</code></li>
    <li>بايثون يدعم سلسلة المقارنات <code>0 <= x <= 100</code></li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>أنشئ متغيرات لعمر شخص ورصيده وهل هو عضو مميز. ثم اطبع نتيجة هذه الأسئلة كقيم منطقية: هل عمره بين 18 و65؟ هل رصيده يكفي لشراء بقيمة 200؟ هل هو مؤهل لخصم (عضو مميز أو رصيده فوق 1000)؟</p>
`,
        en: `<p>Comparison operators return True or False. Logical operators <code>and</code>, <code>or</code>, <code>not</code> combine conditions. Always repeat the variable on both sides: <code>x == 1 or x == 2</code>, never <code>x == 1 or 2</code>.</p>`
    },
    code: `<span class="cm"># المقارنات تُرجع True أو False</span>
<span class="fn">print</span>(10 > 5)        <span class="cm"># True</span>
<span class="fn">print</span>(10 == <span class="st">"10"</span>)   <span class="cm"># False — نوعان مختلفان!</span>

<span class="cm"># تخزين نتيجة المقارنة</span>
<span class="kw">age</span> = 20
<span class="kw">is_adult</span> = age >= 18
<span class="fn">print</span>(is_adult)      <span class="cm"># True</span>


<span class="cm"># مقارنة النصوص حسّاسة لحالة الأحرف</span>
<span class="fn">print</span>(<span class="st">"Ali"</span> == <span class="st">"ali"</span>)              <span class="cm"># False</span>
<span class="fn">print</span>(<span class="st">"Ali"</span>.lower() == <span class="st">"ali"</span>)      <span class="cm"># True ✓</span>


<span class="cm"># المعاملات المنطقية</span>
<span class="kw">has_ticket</span> = <span class="kw">True</span>
<span class="fn">print</span>(age >= 18 <span class="kw">and</span> has_ticket)   <span class="cm"># True</span>
<span class="fn">print</span>(age < 12 <span class="kw">or</span> age > 65)       <span class="cm"># False</span>
<span class="fn">print</span>(<span class="kw">not</span> has_ticket)              <span class="cm"># False</span>


<span class="cm"># الخطأ الشائع الأخطر</span>
<span class="kw">day</span> = <span class="st">"Monday"</span>
<span class="fn">print</span>(day == <span class="st">"Saturday"</span> <span class="kw">or</span> <span class="st">"Sunday"</span>)      <span class="cm"># True — خطأ!</span>
<span class="fn">print</span>(day == <span class="st">"Saturday"</span> <span class="kw">or</span> day == <span class="st">"Sunday"</span>) <span class="cm"># False ✓</span>
<span class="fn">print</span>(day <span class="kw">in</span> [<span class="st">"Saturday"</span>, <span class="st">"Sunday"</span>])        <span class="cm"># False ✓ الأنظف</span>


<span class="cm"># سلسلة المقارنات — ميزة أنيقة في بايثون</span>
<span class="kw">score</span> = 85
<span class="fn">print</span>(0 <= score <= 100)     <span class="cm"># True</span>`,
    quiz: {
        q: {
            ar: "المتغير day = \"الاثنين\". ما نتيجة:  day == \"السبت\" or \"الأحد\"  ؟",
            en: "With day = \"Monday\", what is:  day == \"Saturday\" or \"Sunday\"  ?"
        },
        options: {
            ar: [ "False لأن اليوم ليس عطلة", "True دائماً مهما كان اليوم", "خطأ SyntaxError", "None" ],
            en: [ "False because it is not a weekend", "True always, whatever the day", "A SyntaxError", "None" ]
        },
        correct: 1,
        explanation: {
            ar: "بايثون يفحص طرفين منفصلين: الأول False، والثاني هو النصّ \"الأحد\" وحده وأي نصّ غير فارغ يساوي True. فتكون النتيجة True دائماً. الصواب: day == \"السبت\" or day == \"الأحد\"",
            en: "Python evaluates two separate operands: the first is False, the second is the bare string which is truthy. So the result is always True. Correct form: day == \"Saturday\" or day == \"Sunday\""
        }
    }
},

/* ---------- الدرس 10 ---------- */
{
    title: { ar: "الشروط: if / elif / else", en: "Conditionals: if / elif / else" },
    body: {
        ar: `
<p>حتى الآن، كل برنامج كتبته كان ينفّذ أوامره بالترتيب من الأعلى إلى الأسفل دون استثناء. لكن البرامج الحقيقية لا تعمل هكذا: موقع يعرض محتوى مختلفاً إذا كنت مسجّل الدخول، ولعبة تُنهي الجولة إذا وصلت نقاطك إلى الصفر.</p>

<p>هذا ما تفعله <strong>الشروط</strong>: تمنح برنامجك القدرة على اتخاذ القرار.</p>

<h3>أبسط شكل: جملة if</h3>

<p>نضع بعد <strong>if</strong> شرطاً، ثم نقطتين رأسيتين، ثم الأوامر التي ستُنفَّذ فقط عندما يكون الشرط صحيحاً.</p>

<p>لاحظ أن السطر التالي مُزاح إلى الداخل بأربع مسافات. هذه <strong>المسافة البادئة (Indentation)</strong> ليست تجميلاً — في بايثون هي الطريقة الوحيدة التي يعرف بها المفسّر أن هذا السطر ينتمي إلى الشرط. لو حذفتها ستحصل على <code>IndentationError</code>.</p>

<p>لغات أخرى تستخدم أقواساً معقوفة لهذا الغرض؛ بايثون اختار المسافات ليجبر الجميع على كتابة كود مرتّب.</p>

<h3>else: ماذا لو كان الشرط خاطئاً؟</h3>

<p>جملة <strong>else</strong> تُنفَّذ عندما يكون شرط <strong>if</strong> خاطئاً. ليس لها شرط خاص بها، لأنها تلتقط كل ما تبقّى.</p>

<h3>elif: حالات متعددة</h3>

<p>لأكثر من احتمالين، استخدم <strong>elif</strong> (اختصار else if). يمكنك وضع أي عدد منها.</p>

<p>النقطة الأهم: بايثون يفحص الشروط <strong>بالترتيب</strong>، ويتوقف عند أول شرط صحيح ويتجاهل الباقي تماماً. لذلك ترتيب شروطك ليس تفصيلاً — بل يحدد النتيجة.</p>

<h3>خطأ شائع: ترتيب الشروط</h3>

<p>تأمّل هذا الكود الخاطئ:</p>

<ul>
    <li><code>if grade >= 50:</code> → "ناجح"</li>
    <li><code>elif grade >= 90:</code> → "ممتاز"</li>
</ul>

<p>إذا كانت الدرجة 95، سيطبع "ناجح" وليس "ممتاز"! لأن الشرط الأول صحيح فتوقّف بايثون عنده.</p>

<p><strong>القاعدة:</strong> ابدأ بالشرط الأضيق (الأصعب تحققاً) ثم اتجه نحو الأوسع.</p>

<h3>الشروط المتداخلة</h3>

<p>يمكنك وضع شرط داخل شرط عبر زيادة المسافة البادئة. مفيد، لكن انتبه: التداخل العميق يجعل الكود صعب القراءة. إذا وجدت نفسك على المستوى الثالث أو الرابع، فغالباً يمكنك دمج الشروط بـ <code>and</code> بدلاً من ذلك.</p>

<h3>الصيغة المختصرة</h3>

<p>لحالة بسيطة من سطرين، يمكن كتابتها في سطر واحد: <code>status = "بالغ" if age >= 18 else "قاصر"</code>. تُقرأ: خذ القيمة الأولى إذا تحقق الشرط، وإلا خذ الثانية. استخدمها للحالات القصيرة فقط.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><strong>if</strong> تنفّذ الكود عندما يكون الشرط صحيحاً</li>
    <li><strong>elif</strong> لاحتمالات إضافية، ويمكن تكرارها</li>
    <li><strong>else</strong> تلتقط ما تبقّى ولا تأخذ شرطاً</li>
    <li>بايثون يتوقف عند <strong>أول</strong> شرط صحيح — فالترتيب مهم</li>
    <li>المسافة البادئة إلزامية وتحدد ما ينتمي للشرط</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اكتب برنامجاً يطلب درجة (0–100) ويطبع التقدير: 90 فأعلى ممتاز، 80–89 جيد جداً، 70–79 جيد، 50–69 مقبول، أقل من 50 راسب. أضف فحصاً للدرجات غير المنطقية (أقل من صفر أو أكثر من مئة).</p>
`,
        en: `<p>Conditionals let your program make decisions. <code>if</code> runs when true, <code>elif</code> checks more cases, <code>else</code> catches the rest. Python stops at the first true condition, so order matters. Indentation is mandatory.</p>`
    },
    code: `<span class="cm"># أبسط شرط</span>
<span class="kw">temperature</span> = 35
<span class="kw">if</span> temperature > 30:
    <span class="fn">print</span>(<span class="st">"It's hot, drink plenty of water"</span>)


<span class="cm"># شرط مع else</span>
<span class="kw">password</span> = <span class="st">"1234"</span>
<span class="kw">if</span> password == <span class="st">"secret"</span>:
    <span class="fn">print</span>(<span class="st">"Login successful"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Wrong password"</span>)


<span class="cm"># حالات متعددة — الترتيب من الأضيق للأوسع</span>
<span class="kw">grade</span> = 87
<span class="kw">if</span> grade >= 90:
    <span class="fn">print</span>(<span class="st">"Excellent"</span>)
<span class="kw">elif</span> grade >= 80:
    <span class="fn">print</span>(<span class="st">"Very good"</span>)
<span class="kw">elif</span> grade >= 70:
    <span class="fn">print</span>(<span class="st">"Good"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Needs review"</span>)
<span class="cm"># الناتج: Very good</span>


<span class="cm"># الترتيب الخاطئ — نتيجة غير متوقعة</span>
<span class="kw">score</span> = 95
<span class="kw">if</span> score >= 50:
    <span class="fn">print</span>(<span class="st">"Pass"</span>)      <span class="cm"># يُطبع هذا!</span>
<span class="kw">elif</span> score >= 90:
    <span class="fn">print</span>(<span class="st">"Excellent"</span>)     <span class="cm"># لن يصل هنا أبداً</span>


<span class="cm"># شروط متداخلة</span>
<span class="kw">age</span> = 20
<span class="kw">has_ticket</span> = <span class="kw">True</span>
<span class="kw">if</span> age >= 18:
    <span class="kw">if</span> has_ticket:
        <span class="fn">print</span>(<span class="st">"Welcome in"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="st">"Buy a ticket first"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Adults only"</span>)


<span class="cm"># الصيغة المختصرة</span>
<span class="kw">status</span> = <span class="st">"adult"</span> <span class="kw">if</span> age >= 18 <span class="kw">else</span> <span class="st">"minor"</span>
<span class="fn">print</span>(status)`,
    quiz: {
        q: {
            ar: "ما الذي يطبعه هذا الكود؟\nscore = 95\nif score >= 60:\n    print(\"ناجح\")\nelif score >= 90:\n    print(\"ممتاز\")",
            en: "What does this print?\nscore = 95\nif score >= 60:\n    print(\"Pass\")\nelif score >= 90:\n    print(\"Excellent\")"
        },
        options: {
            ar: [ "ممتاز", "ناجح", "ناجح ثم ممتاز", "خطأ في الكود" ],
            en: [ "Excellent", "Pass", "Pass then Excellent", "An error" ]
        },
        correct: 1,
        explanation: {
            ar: "بايثون يتوقف عند أول شرط صحيح. الشرط (95 >= 60) صحيح فطُبع \"ناجح\" ولم يُفحص elif إطلاقاً. الحل: ضع الشرط الأضيق (>= 90) أولاً.",
            en: "Python stops at the first true condition. Since 95 >= 60 is true it printed \"Pass\" and never evaluated the elif. Fix: put the narrowest condition (>= 90) first."
        }
    }
},

/* ---------- الدرس 11 ---------- */
{
    title: { ar: "الحلقة for و range", en: "The for loop and range" },
    body: {
        ar: `
<p>تخيّل أنك تريد طباعة الأرقام من 1 إلى 100. هل ستكتب مئة سطر <code>print</code>؟ بالطبع لا. هنا تأتي <strong>الحلقات</strong>: تكتب الكود مرة واحدة ويُنفَّذ عدة مرات.</p>

<h3>كيف تعمل حلقة for؟</h3>

<p>حلقة <strong>for</strong> في بايثون تختلف عن معظم اللغات. هي لا تقول "كرّر 10 مرات"، بل تقول <strong>"خذ كل عنصر من هذه المجموعة، واحداً تلو الآخر"</strong>.</p>

<p>الصيغة: <code>for متغير in مجموعة:</code> ثم الكود المُزاح للداخل. في كل دورة، يأخذ المتغير قيمة العنصر التالي.</p>

<p>هذا يعني أنه يمكنك المرور على نصّ حرفاً حرفاً، أو على قائمة عنصراً عنصراً — كلها تعمل بالمنطق نفسه.</p>

<h3>range: لتوليد سلسلة أرقام</h3>

<p>عندما تريد التكرار عدداً محدداً من المرات، تستخدم <strong>range</strong> التي تولّد سلسلة أرقام. لها ثلاثة أشكال:</p>

<ul>
    <li><code>range(5)</code> → من 0 إلى 4 (خمسة أرقام، تبدأ من صفر)</li>
    <li><code>range(2, 8)</code> → من 2 إلى 7</li>
    <li><code>range(0, 10, 2)</code> → 0, 2, 4, 6, 8 (بخطوة 2)</li>
</ul>

<p><strong>النقطة التي تربك الجميع:</strong> الرقم الأخير <strong>غير مشمول</strong> دائماً. <code>range(1, 11)</code> تعطي من 1 إلى 10. تذكّر: "حتى، ولا تشمل".</p>

<p>للعدّ تنازلياً استخدم خطوة سالبة: <code>range(10, 0, -1)</code>.</p>

<h3>مثال عملي: جمع الأرقام</h3>

<p>النمط الأكثر شيوعاً في الحلقات هو <strong>المُراكِم (accumulator)</strong>: متغير تبدأه بصفر خارج الحلقة، ثم تضيف إليه في كل دورة. هذا النمط ستستخدمه مئات المرات.</p>

<p>انتبه: تعريف المُراكِم يجب أن يكون <strong>خارج</strong> الحلقة. لو وضعته بالداخل، سيُعاد ضبطه على صفر في كل دورة وستحصل على نتيجة خاطئة.</p>

<h3>enumerate: عندما تحتاج الفهرس أيضاً</h3>

<p>أحياناً تريد العنصر ورقم موضعه معاً. بدل استخدام عدّاد يدوي، بايثون يوفّر <code>enumerate</code> التي تعطيك الاثنين. يمكنك تحديد رقم البداية: <code>enumerate(items, 1)</code> لتبدأ من 1 بدل 0.</p>

<h3>الحلقات المتداخلة</h3>

<p>يمكن وضع حلقة داخل حلقة. القاعدة: <strong>الحلقة الداخلية تكمل دوراتها كاملة في كل دورة من الخارجية</strong>. فإذا كانت الخارجية 3 دورات والداخلية 4، فالمجموع 12 تنفيذاً.</p>

<p>احذر: الحلقات المتداخلة العميقة تصبح بطيئة بسرعة. حلقتان داخل بعضهما على ألف عنصر تعني مليون عملية.</p>

<h3>حلقة بلا متغير</h3>

<p>إذا كنت تريد التكرار دون استخدام قيمة العدّاد، العرف في بايثون أن تسمّي المتغير <code>_</code> (شرطة سفلية). هذا يخبر من يقرأ كودك: "أنا أعرف أن هناك متغيراً، لكنني لا أحتاجه".</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>for</code> تمرّ على عناصر مجموعة واحداً تلو الآخر</li>
    <li><code>range(n)</code> تبدأ من صفر، والرقم الأخير <strong>غير مشمول</strong></li>
    <li>عرّف المُراكِم <strong>خارج</strong> الحلقة</li>
    <li><code>enumerate</code> تعطيك الفهرس والعنصر معاً</li>
    <li>الحلقات المتداخلة تضاعف عدد العمليات — استخدمها بحذر</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اكتب برنامجاً يطبع جدول الضرب لرقم يختاره المستخدم، من 1 إلى 10، بصيغة واضحة مثل: <code>7 × 3 = 21</code>. ثم طوّره ليطبع جداول الضرب من 1 إلى 5 كاملة باستخدام حلقتين متداخلتين.</p>
`,
        en: `<p><code>for</code> iterates over items one by one. <code>range(n)</code> starts at zero and excludes the last number. Define accumulators outside the loop. <code>enumerate</code> gives index and value together.</p>`
    },
    code: `<span class="cm"># المرور على عناصر قائمة</span>
<span class="kw">for</span> fruit <span class="kw">in</span> [<span class="st">"apple"</span>, <span class="st">"banana"</span>, <span class="st">"grape"</span>]:
    <span class="fn">print</span>(<span class="st">f"I like {fruit}"</span>)


<span class="cm"># المرور على حروف نصّ</span>
<span class="kw">for</span> ch <span class="kw">in</span> <span class="st">"Python"</span>:
    <span class="fn">print</span>(ch)


<span class="cm"># range — الرقم الأخير غير مشمول</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(5):
    <span class="fn">print</span>(i)          <span class="cm"># 0 1 2 3 4</span>

<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(1, 11):
    <span class="fn">print</span>(i)          <span class="cm"># 1 حتى 10</span>

<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(10, 0, -1):
    <span class="fn">print</span>(i)          <span class="cm"># عدّ تنازلي</span>


<span class="cm"># نمط المُراكِم — التعريف خارج الحلقة!</span>
<span class="kw">total</span> = 0
<span class="kw">for</span> n <span class="kw">in</span> <span class="fn">range</span>(1, 101):
    total += n
<span class="fn">print</span>(<span class="st">f"Sum from 1 to 100 = {total}"</span>)   <span class="cm"># 5050</span>


<span class="cm"># enumerate: الفهرس والعنصر معاً</span>
<span class="kw">students</span> = [<span class="st">"Sarah"</span>, <span class="st">"Ahmed"</span>, <span class="st">"Layla"</span>]
<span class="kw">for</span> i, name <span class="kw">in</span> <span class="fn">enumerate</span>(students, 1):
    <span class="fn">print</span>(<span class="st">f"{i}. {name}"</span>)


<span class="cm"># حلقات متداخلة: جدول الضرب</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(1, 4):
    <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(1, 4):
        <span class="fn">print</span>(<span class="st">f"{i} × {j} = {i*j}"</span>)
    <span class="fn">print</span>()          <span class="cm"># سطر فارغ بين الجداول</span>


<span class="cm"># تكرار بلا حاجة للعدّاد</span>
<span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(3):
    <span class="fn">print</span>(<span class="st">"Hello"</span>)`,
    quiz: {
        q: {
            ar: "كم رقماً تطبع الحلقة:  for i in range(1, 6):  ؟",
            en: "How many numbers does  for i in range(1, 6):  print?"
        },
        options: {
            ar: [ "6 أرقام من 1 إلى 6", "5 أرقام من 1 إلى 5", "4 أرقام من 2 إلى 5", "6 أرقام من 0 إلى 5" ],
            en: [ "6 numbers, 1 to 6", "5 numbers, 1 to 5", "4 numbers, 2 to 5", "6 numbers, 0 to 5" ]
        },
        correct: 1,
        explanation: {
            ar: "range تبدأ من الرقم الأول وتتوقف قبل الأخير دون أن تشمله. فـ range(1, 6) تعطي 1، 2، 3، 4، 5 — خمسة أرقام.",
            en: "range starts at the first number and stops before the last without including it. So range(1, 6) gives 1, 2, 3, 4, 5 — five numbers."
        }
    }
},

/* ---------- الدرس 12 ---------- */
{
    title: { ar: "الحلقة while", en: "The while loop" },
    body: {
        ar: `
<p>حلقة <strong>for</strong> ممتازة عندما تعرف عدد التكرارات مسبقاً. لكن ماذا لو لم تكن تعرف؟ مثلاً: "استمر في سؤال المستخدم حتى يُدخل كلمة مرور صحيحة" — قد تكون محاولة واحدة أو عشرين.</p>

<p>هنا تأتي حلقة <strong>while</strong>: تكرّر <strong>طالما</strong> بقي الشرط صحيحاً.</p>

<h3>الفرق الجوهري بين for و while</h3>

<ul>
    <li><strong>for</strong> — للمرور على مجموعة معروفة، أو عدد محدد من المرات</li>
    <li><strong>while</strong> — للتكرار حتى يتحقق شرط معيّن، دون معرفة عدد المرات مسبقاً</li>
</ul>

<p>القاعدة العملية: إذا كنت تعرف كم مرة ستكرّر، استخدم <code>for</code>. إذا كان التكرار يعتمد على شيء يحدث أثناء التنفيذ، استخدم <code>while</code>.</p>

<h3>البنية الأساسية</h3>

<p>كل حلقة <strong>while</strong> سليمة تحتاج ثلاثة أشياء، وإهمال أي منها يسبب مشكلة:</p>

<ol>
    <li><strong>تهيئة</strong> المتغير قبل الحلقة</li>
    <li><strong>شرط</strong> يُفحص قبل كل دورة</li>
    <li><strong>تحديث</strong> داخل الحلقة يقرّبك من إنهاء الشرط</li>
</ol>

<h3>الخطر الأكبر: الحلقة اللانهائية</h3>

<p>إذا نسيت التحديث (الخطوة 3)، سيبقى الشرط صحيحاً إلى الأبد وسيتجمّد برنامجك. هذا أشهر خطأ مع <code>while</code>.</p>

<p><strong>إذا حدث لك ذلك:</strong> اضغط <code>Ctrl + C</code> في الطرفية لإيقاف البرنامج قسراً. تذكّر هذا الاختصار، ستحتاجه.</p>

<p>قبل تشغيل أي حلقة <code>while</code>، اسأل نفسك: "ما الذي سيجعل هذا الشرط خاطئاً في النهاية؟" إذا لم تجد إجابة واضحة، فلديك حلقة لانهائية.</p>

<h3>نمط شائع: التحقق من المدخلات</h3>

<p>الاستخدام الأكثر عملية لـ <code>while</code> هو إجبار المستخدم على إدخال قيمة صحيحة: كرّر السؤال طالما كان الإدخال غير مقبول. هذا النمط ستستخدمه في كل برنامج تفاعلي تكتبه.</p>

<h3>نمط while True مع break</h3>

<p>أحياناً يكون الشرط الطبيعي معقّداً، فيُستخدم <code>while True</code> (حلقة لانهائية متعمّدة) مع <code>break</code> للخروج عند الحاجة. سنغطي <code>break</code> بالتفصيل في الدرس التالي، لكن الفكرة أنك تقرر لحظة الخروج داخل الحلقة بدل أن تحسبها مسبقاً.</p>

<h3>عدّاد المحاولات</h3>

<p>نمط عملي آخر: السماح بعدد محدود من المحاولات. تجمع بين شرطين — بقاء المحاولات <strong>و</strong> عدم تحقق الهدف — بـ <code>and</code>.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>while</code> تكرّر طالما الشرط صحيح، ولا تحتاج معرفة عدد الدورات</li>
    <li>كل حلقة تحتاج: تهيئة، شرط، وتحديث داخل الجسم</li>
    <li>نسيان التحديث = حلقة لانهائية، وأوقفها بـ <code>Ctrl + C</code></li>
    <li>استخدمها للتحقق من المدخلات والقوائم التفاعلية</li>
    <li><code>while True</code> مع <code>break</code> نمط شائع ومقبول</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اكتب برنامجاً يطلب من المستخدم إدخال رقم موجب. إذا أدخل رقماً سالباً أو صفراً، أعد السؤال. بعد نجاحه، اطبع مجموع الأرقام من 1 إلى ذلك الرقم باستخدام حلقة <code>while</code> (وليس <code>for</code>).</p>
`,
        en: `<p><code>while</code> repeats as long as a condition holds — use it when you do not know the number of iterations in advance. Every while loop needs initialization, a condition, and an update. Forgetting the update creates an infinite loop; stop it with Ctrl + C.</p>`
    },
    code: `<span class="cm"># البنية الأساسية: تهيئة، شرط، تحديث</span>
<span class="kw">count</span> = 1                <span class="cm"># 1) تهيئة</span>
<span class="kw">while</span> count <= 5:         <span class="cm"># 2) شرط</span>
    <span class="fn">print</span>(count)
    count += 1            <span class="cm"># 3) تحديث — لا تنسه أبداً!</span>


<span class="cm"># حلقة لانهائية — الخطأ الأشهر</span>
<span class="cm"># count = 1</span>
<span class="cm"># while count <= 5:</span>
<span class="cm">#     print(count)      ← لا يوجد تحديث، ستعمل للأبد</span>


<span class="cm"># نمط التحقق من المدخلات</span>
<span class="kw">age</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="st">"Your age: "</span>))
<span class="kw">while</span> age <= 0 <span class="kw">or</span> age > 120:
    <span class="fn">print</span>(<span class="st">"Not a realistic age, try again"</span>)
    <span class="kw">age</span> = <span class="fn">int</span>(<span class="fn">input</span>(<span class="st">"Your age: "</span>))
<span class="fn">print</span>(<span class="st">f"Thanks, you are {age}"</span>)


<span class="cm"># عدّاد محاولات محدود</span>
<span class="kw">attempts</span> = 3
<span class="kw">logged_in</span> = <span class="kw">False</span>

<span class="kw">while</span> attempts > 0 <span class="kw">and</span> <span class="kw">not</span> logged_in:
    <span class="kw">pw</span> = <span class="fn">input</span>(<span class="st">"Password: "</span>)
    <span class="kw">if</span> pw == <span class="st">"1234"</span>:
        <span class="kw">logged_in</span> = <span class="kw">True</span>
        <span class="fn">print</span>(<span class="st">"Welcome"</span>)
    <span class="kw">else</span>:
        attempts -= 1
        <span class="fn">print</span>(<span class="st">f"Wrong. {attempts} attempt(s) left"</span>)

<span class="kw">if</span> <span class="kw">not</span> logged_in:
    <span class="fn">print</span>(<span class="st">"Account locked"</span>)


<span class="cm"># while True مع break</span>
<span class="kw">while</span> <span class="kw">True</span>:
    <span class="kw">cmd</span> = <span class="fn">input</span>(<span class="st">"Type a command (exit to quit): "</span>)
    <span class="kw">if</span> cmd == <span class="st">"exit"</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(<span class="st">f"Ran: {cmd}"</span>)`,
    quiz: {
        q: {
            ar: "ما المشكلة في هذا الكود؟\nn = 1\nwhile n <= 3:\n    print(n)",
            en: "What is wrong with this code?\nn = 1\nwhile n <= 3:\n    print(n)"
        },
        options: {
            ar: [
                "لا مشكلة، يطبع 1 2 3",
                "حلقة لانهائية لأن n لا تتغيّر أبداً",
                "خطأ SyntaxError",
                "يطبع 1 مرة واحدة فقط"
            ],
            en: [
                "Nothing, it prints 1 2 3",
                "Infinite loop because n never changes",
                "A SyntaxError",
                "It prints 1 only once"
            ]
        },
        correct: 1,
        explanation: {
            ar: "لا يوجد تحديث لـ n داخل الحلقة، فيبقى الشرط 1 <= 3 صحيحاً للأبد ويُطبع 1 بلا توقف. الحل: أضف n += 1 داخل الحلقة. لإيقاف حلقة عالقة اضغط Ctrl + C.",
            en: "There is no update to n inside the loop, so the condition 1 <= 3 stays true forever and prints 1 endlessly. Fix: add n += 1 inside. Press Ctrl + C to stop a runaway loop."
        }
    }
},

/* ---------- الدرس 13 ---------- */
{
    title: { ar: "break و continue و else مع الحلقات", en: "break, continue and loop else" },
    body: {
        ar: `
<p>أحياناً تحتاج تحكّماً أدقّ داخل الحلقة: أن تخرج مبكراً، أو أن تتخطّى دورة واحدة فقط. بايثون يوفّر ثلاث أدوات لذلك.</p>

<h3>break: الخروج الفوري</h3>

<p>عندما ينفّذ بايثون <strong>break</strong>، يخرج من الحلقة كاملة فوراً ويكمل ما بعدها. لا يُنهي الدورة الحالية فقط — بل الحلقة بأسرها.</p>

<p>الاستخدام الأكثر شيوعاً: <strong>البحث</strong>. حين تجد ما تبحث عنه، لا معنى لمواصلة الفحص. إذا كنت تبحث عن اسم في قائمة من ألف اسم ووجدته في الموضع الثالث، فإن <code>break</code> توفّر 997 عملية.</p>

<h3>continue: تخطّي دورة واحدة</h3>

<p>على عكس <code>break</code>، فإن <strong>continue</strong> تتخطّى بقية الكود <strong>في هذه الدورة فقط</strong> وتنتقل إلى الدورة التالية. الحلقة تستمر.</p>

<p>تُستخدم لتجاهل الحالات غير المرغوبة: تخطّي القيم الفارغة، أو الأرقام السالبة، أو السطور التي تبدأ بعلامة تعليق.</p>

<p><strong>الفرق في جملة واحدة:</strong> <code>break</code> تُنهي الحلقة، و<code>continue</code> تُنهي الدورة الحالية فقط.</p>

<h3>ملاحظة على الحلقات المتداخلة</h3>

<p>كل من <code>break</code> و<code>continue</code> تؤثر على <strong>الحلقة التي تحتويها مباشرة فقط</strong>. إذا كنت داخل حلقتين واستخدمت <code>break</code>، فستخرج من الداخلية فقط وتبقى في الخارجية. هذا يفاجئ كثيرين.</p>

<h3>else مع الحلقات: ميزة خاصة ببايثون</h3>

<p>هذه من الميزات النادرة التي لا توجد في معظم اللغات، وقليل من المبتدئين يعرفها.</p>

<p>يمكنك وضع <strong>else</strong> بعد الحلقة، وستُنفَّذ <strong>فقط إذا انتهت الحلقة طبيعياً دون أن تُقطع بـ break</strong>.</p>

<p>الاسم مضلّل قليلاً — لو سُمّيت <code>nobreak</code> لكانت أوضح. لكنها مفيدة جداً في أنماط البحث: "ابحث في القائمة، وإذا لم تجد شيئاً افعل كذا".</p>

<p>بدونها كنت ستحتاج متغيراً إضافياً مثل <code>found = False</code> لتتبّع ما إذا وجدت النتيجة. مع <code>else</code> يصبح الكود أنظف.</p>

<h3>pass: عندما لا تريد فعل شيء</h3>

<p>أحياناً تحتاج جسماً فارغاً لحلقة أو شرط — بايثون لا يقبل جسماً فارغاً تماماً. الكلمة <strong>pass</strong> تعني "لا تفعل شيئاً"، وتُستخدم كعنصر نائب أثناء بناء الكود.</p>

<p>لا تخلط بينها وبين <code>continue</code>: <code>pass</code> لا تفعل شيئاً ويستمر الكود بعدها عادياً، بينما <code>continue</code> تقفز إلى الدورة التالية.</p>

<h3>متى تتجنّب break؟</h3>

<p>الإفراط في <code>break</code> و<code>continue</code> يجعل تتبّع الحلقة صعباً. إذا وجدت في حلقة واحدة ثلاث أو أربع نقاط خروج، فالأرجح أن الكود يحتاج إعادة تنظيم — ربما بتقسيمه إلى دالة، وهو ما سنتعلّمه في المستوى الرابع.</p>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>break</code> تخرج من الحلقة كاملة فوراً</li>
    <li><code>continue</code> تتخطّى بقية الدورة الحالية فقط</li>
    <li>كلاهما يؤثر على الحلقة المباشرة فقط في التداخل</li>
    <li><code>else</code> بعد الحلقة تُنفَّذ فقط إذا لم تُقطع بـ <code>break</code></li>
    <li><code>pass</code> عنصر نائب لا يفعل شيئاً</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>لديك قائمة أرقام. اكتب برنامجاً يبحث عن أول رقم يقبل القسمة على 7، يطبعه ويتوقف. إذا لم يجد أي رقم، يطبع "لا يوجد". استخدم <code>break</code> مع <code>else</code> الخاصة بالحلقة.</p>
`,
        en: `<p><code>break</code> exits the whole loop immediately; <code>continue</code> skips only the current iteration. In nested loops they affect the innermost loop only. A loop <code>else</code> runs only if the loop finished without a break.</p>`
    },
    code: `<span class="cm"># break: التوقف عند أول نتيجة</span>
<span class="kw">names</span> = [<span class="st">"Sarah"</span>, <span class="st">"Ahmed"</span>, <span class="st">"Layla"</span>, <span class="st">"Khalid"</span>]

<span class="kw">for</span> name <span class="kw">in</span> names:
    <span class="kw">if</span> name == <span class="st">"Layla"</span>:
        <span class="fn">print</span>(<span class="st">"Found her!"</span>)
        <span class="kw">break</span>            <span class="cm"># لن يفحص "Khalid" إطلاقاً</span>
    <span class="fn">print</span>(<span class="st">f"Checking {name}..."</span>)


<span class="cm"># continue: تخطّي حالات معيّنة</span>
<span class="kw">for</span> n <span class="kw">in</span> <span class="fn">range</span>(1, 11):
    <span class="kw">if</span> n % 2 != 0:
        <span class="kw">continue</span>         <span class="cm"># تخطَّ الفردي</span>
    <span class="fn">print</span>(n)             <span class="cm"># 2 4 6 8 10</span>


<span class="cm"># else مع الحلقة: تعمل فقط إن لم يحدث break</span>
<span class="kw">numbers</span> = [3, 8, 15, 22]

<span class="kw">for</span> n <span class="kw">in</span> numbers:
    <span class="kw">if</span> n % 7 == 0:
        <span class="fn">print</span>(<span class="st">f"First number divisible by 7: {n}"</span>)
        <span class="kw">break</span>
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"No number divisible by 7"</span>)


<span class="cm"># في الحلقات المتداخلة: break تخرج من الداخلية فقط</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(3):
    <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(5):
        <span class="kw">if</span> j == 2:
            <span class="kw">break</span>        <span class="cm"># يخرج من حلقة j فقط</span>
        <span class="fn">print</span>(i, j)


<span class="cm"># pass: عنصر نائب</span>
<span class="kw">for</span> item <span class="kw">in</span> <span class="fn">range</span>(3):
    <span class="kw">pass</span>                 <span class="cm"># سأكتب الكود لاحقاً</span>`,
    quiz: {
        q: {
            ar: "ما الفرق بين break و continue؟",
            en: "What is the difference between break and continue?"
        },
        options: {
            ar: [
                "لا فرق، كلاهما يوقف الحلقة",
                "break تُنهي الحلقة كاملة، continue تتخطّى الدورة الحالية فقط",
                "break تتخطّى دورة، continue تُنهي البرنامج",
                "كلاهما يعمل مع while فقط"
            ],
            en: [
                "No difference, both stop the loop",
                "break ends the whole loop; continue skips only the current iteration",
                "break skips one iteration; continue ends the program",
                "Both work only with while"
            ]
        },
        correct: 1,
        explanation: {
            ar: "break تخرج من الحلقة نهائياً وتكمل ما بعدها، بينما continue تتجاهل بقية الكود في هذه الدورة وتنتقل للدورة التالية مع استمرار الحلقة.",
            en: "break leaves the loop entirely and continues after it, while continue skips the rest of the current iteration and moves to the next one, keeping the loop running."
        }
    }
},

/* ---------- الدرس 14 — مشروع ---------- */
{
    title: { ar: "مشروع 2: لعبة تخمين الرقم", en: "Project 2: Number guessing game" },
    body: {
        ar: `
<p>مشروع هذا المستوى يجمع كل ما تعلمته: الشروط، الحلقات، <code>break</code>، التحقق من المدخلات، والمقارنات. وستتعرّف على مكتبة جديدة في الطريق.</p>

<h3>فكرة اللعبة</h3>

<p>يختار الحاسوب رقماً سرياً بين 1 و100، ويحاول اللاعب تخمينه. بعد كل محاولة يخبره البرنامج إن كان تخمينه أعلى أو أقل، حتى يصيب أو تنفد محاولاته.</p>

<h3>مكتبة random</h3>

<p>لتوليد رقم عشوائي نحتاج مكتبة <strong>random</strong> المدمجة في بايثون. نستوردها بـ <code>import random</code> في أعلى الملف، ثم نستخدم <code>random.randint(1, 100)</code>.</p>

<p>ملاحظة مهمة: على عكس <code>range</code>، فإن <code>randint</code> <strong>تشمل</strong> الطرفين. فـ <code>randint(1, 100)</code> قد تعطي 1 أو 100 نفسيهما.</p>

<h3>تصميم البرنامج قبل كتابته</h3>

<p>عادة المحترفين: فكّر في الخطوات قبل الكتابة.</p>

<ol>
    <li>ولّد الرقم السري وحدّد عدد المحاولات</li>
    <li>كرّر طالما بقيت محاولات:
        <ul>
            <li>اطلب تخميناً وتحقق أنه رقم صالح</li>
            <li>قارنه بالسري: أعلى، أقل، أم مطابق؟</li>
            <li>إن أصاب: هنّئه واخرج بـ <code>break</code></li>
            <li>إن أخطأ: أنقص المحاولات وأعطه تلميحاً</li>
        </ul>
    </li>
    <li>إن نفدت المحاولات: اكشف الرقم</li>
</ol>

<h3>لماذا استخدمنا else مع الحلقة؟</h3>

<p>لاحظ في الكود أن <code>else</code> ملحقة بحلقة <code>while</code> وليست بشرط. تُنفَّذ فقط إذا انتهت المحاولات دون <code>break</code> — أي عندما يخسر اللاعب. بدونها كنا سنحتاج متغيّراً إضافياً لتتبّع الفوز.</p>

<h3>التحقق من المدخلات</h3>

<p>ماذا لو كتب اللاعب "خمسون" بدل 50؟ سيتوقف البرنامج بـ <code>ValueError</code>. لذلك نستخدم <code>.isdigit()</code> للتأكد أن النصّ يتكوّن من أرقام قبل تحويله.</p>

<p>هذا حلّ بسيط يكفي الآن. في المستوى الخامس سنتعلّم <code>try/except</code>، وهي الطريقة الاحترافية للتعامل مع مثل هذه الحالات.</p>

<h3>تحديات للتوسيع</h3>

<ul>
    <li>أضف مستويات صعوبة: سهل (1–50 بعشر محاولات)، صعب (1–200 بخمس محاولات)</li>
    <li>احسب نقاطاً: كلما قلّت المحاولات زادت النقاط</li>
    <li>اسأل اللاعب إن أراد لعب جولة جديدة، وضع كل شيء داخل حلقة كبرى</li>
    <li>اجعل التلميح أذكى: "قريب جداً" إذا كان الفرق أقل من 5</li>
</ul>

<h3>ماذا أنجزت في هذا المستوى؟</h3>

<ul>
    <li>أتقنت المقارنات والمعاملات المنطقية وتجنّبت فخّ <code>or</code> الشائع</li>
    <li>تحكّمت في مسار البرنامج بـ <code>if / elif / else</code> وفهمت أهمية الترتيب</li>
    <li>كرّرت بذكاء مع <code>for</code> و<code>range</code> ونمط المُراكِم</li>
    <li>استخدمت <code>while</code> للتكرار غير المحدود وتجنّبت الحلقات اللانهائية</li>
    <li>تحكّمت بدقة عبر <code>break</code> و<code>continue</code> و<code>else</code> الخاصة بالحلقات</li>
    <li>وبنيت لعبة تفاعلية كاملة</li>
</ul>

<p>في المستوى الثالث سنتعلّم كيف نخزّن مجموعات من البيانات — القوائم والقواميس — وهنا ستبدأ برامجك في التعامل مع بيانات حقيقية.</p>
`,
        en: `<p>This project combines conditionals, loops, break, input validation and comparisons. The computer picks a secret number and the player guesses it with hints after each attempt.</p>`
    },
    code: `<span class="cm"># ============================================</span>
<span class="cm"># لعبة تخمين الرقم</span>
<span class="cm"># ============================================</span>
<span class="kw">import</span> random

<span class="kw">secret</span> = random.randint(1, 100)   <span class="cm"># الطرفان مشمولان</span>
<span class="kw">attempts</span> = 7

<span class="fn">print</span>(<span class="st">"="</span> * 40)
<span class="fn">print</span>(<span class="st">"   Guess the number between 1 and 100"</span>)
<span class="fn">print</span>(<span class="st">f"   You have {attempts} attempts"</span>)
<span class="fn">print</span>(<span class="st">"="</span> * 40)

<span class="kw">while</span> attempts > 0:
    <span class="kw">raw</span> = <span class="fn">input</span>(<span class="st">f"\\nYour guess ({attempts} left): "</span>).strip()

    <span class="cm"># التحقق من صلاحية المدخل</span>
    <span class="kw">if</span> <span class="kw">not</span> raw.isdigit():
        <span class="fn">print</span>(<span class="st">"Please enter a valid number"</span>)
        <span class="kw">continue</span>          <span class="cm"># لا تُحتسب محاولة</span>

    <span class="kw">guess</span> = <span class="fn">int</span>(raw)

    <span class="kw">if</span> guess < 1 <span class="kw">or</span> guess > 100:
        <span class="fn">print</span>(<span class="st">"The number must be between 1 and 100"</span>)
        <span class="kw">continue</span>

    <span class="cm"># المقارنة وإعطاء التلميح</span>
    <span class="kw">if</span> guess == secret:
        <span class="kw">used</span> = 8 - attempts
        <span class="fn">print</span>(<span class="st">f"\\n🎉 Well done! The number was {secret}"</span>)
        <span class="fn">print</span>(<span class="st">f"You got it in {used} attempt(s)"</span>)
        <span class="kw">break</span>

    attempts -= 1

    <span class="kw">if</span> attempts == 0:
        <span class="kw">break</span>

    <span class="cm"># تلميح أذكى للأرقام القريبة</span>
    <span class="kw">diff</span> = <span class="fn">abs</span>(guess - secret)
    <span class="kw">if</span> diff <= 5:
        <span class="fn">print</span>(<span class="st">"🔥 So close!"</span>)

    <span class="kw">if</span> guess < secret:
        <span class="fn">print</span>(<span class="st">"⬆️ The secret number is bigger"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(<span class="st">"⬇️ The secret number is smaller"</span>)

<span class="kw">else</span>:
    <span class="cm"># تعمل فقط إذا لم يحدث break — أي خسر اللاعب</span>
    <span class="fn">print</span>(<span class="st">f"\\n😔 Out of attempts. The number was {secret}"</span>)

<span class="fn">print</span>(<span class="st">"\\nThanks for playing!"</span>)`,
    quiz: {
        q: {
            ar: "في اللعبة استخدمنا continue عند إدخال غير صالح بدل أن ننقص المحاولات. لماذا؟",
            en: "The game uses continue on invalid input instead of decrementing attempts. Why?"
        },
        options: {
            ar: [
                "لأن continue أسرع في التنفيذ",
                "حتى لا يُعاقَب اللاعب بخسارة محاولة على خطأ كتابي",
                "لأن break لا تعمل مع while",
                "لتنتهي اللعبة فوراً"
            ],
            en: [
                "Because continue is faster",
                "So a typing mistake does not cost the player an attempt",
                "Because break does not work with while",
                "To end the game immediately"
            ]
        },
        correct: 1,
        explanation: {
            ar: "continue تتخطّى بقية الدورة وتعود لطلب التخمين دون تنفيذ سطر attempts -= 1، فلا يخسر اللاعب محاولة بسبب خطأ في الكتابة. هذا تصميم عادل للتجربة.",
            en: "continue skips the rest of the iteration and asks again without running attempts -= 1, so a typo does not cost a turn. That is fair UX design."
        }
    }
}
]
        },
        web: {
            comingSoon: true,
            name: { ar: "تطوير الويب", en: "Web Development" },
            icon: "web", iconClass: "fa-brands fa-html5",
            description: { ar: 'تعلم HTML وCSS وبناء صفحات متجاوبة وحديثة ثم تطوير واجهات ويب منظمة وقابلة للاستخدام.', en: 'Learn HTML and CSS and build modern responsive web pages and structured interfaces.' },
            lessons: [
                {
                    title: { ar: "مقدمة إلى HTML", en: "Intro to HTML" },
                    body: {
                        ar: `<p>HTML هي لغة توصيف تُستخدم لبناء هيكل صفحات الويب. كل عنصر في الصفحة (عنوان، فقرة، صورة) يُكتب باستخدام "وسوم" (tags).</p>`,
                        code: `<span class="cm">&lt;!-- أول صفحة HTML --&gt;</span>
<span class="kw">&lt;h1&gt;</span>مرحباً بالعالم<span class="kw">&lt;/h1&gt;</span>
<span class="kw">&lt;p&gt;</span>هذه أول صفحة ويب لي.<span class="kw">&lt;/p&gt;</span>`
                    },
                    quiz: {
                        q: { ar: "ما وظيفة HTML؟", en: "What is HTML used for?" },
                        options: { ar: ["تصميم الألوان والحركة", "بناء هيكل صفحة الويب", "برمجة قواعد البيانات"], en: ["Styling colors and animation", "Building the structure of a web page", "Programming databases"] },
                        correct: 1
                    }
                },
                {
                    title: { ar: "أساسيات CSS", en: "CSS basics" },
                    body: {
                        ar: `<p>CSS هي اللغة المسؤولة عن تنسيق مظهر صفحة الويب: الألوان، الخطوط، المسافات، والتخطيط العام.</p>`,
                        code: `<span class="kw">h1</span> {
  <span class="fn">color</span>: <span class="st">#06b6d4</span>;
  <span class="fn">font-size</span>: <span class="st">32px</span>;
}`
                    },
                    quiz: {
                        q: { ar: "بماذا تختص CSS؟", en: "What does CSS handle?" },
                        options: { ar: ["الهيكل", "المظهر والتنسيق", "قواعد البيانات"], en: ["Structure", "Appearance and styling", "Databases"] },
                        correct: 1
                    }
                }
            ]
        },
        javascript: {
            comingSoon: true,
            name: { ar: "JavaScript", en: "JavaScript" },
            icon: "javascript", iconClass: "fa-brands fa-js",
            description: { ar: 'تعلم JavaScript من الأساسيات إلى DOM والأحداث والـ APIs والبرمجة غير المتزامنة وبناء تطبيقات ويب تفاعلية.', en: 'Learn JavaScript from fundamentals to DOM, events, APIs, async programming and interactive web apps.' },
            lessons: [
                {
                    title: { ar: "مقدمة إلى JavaScript", en: "Intro to JavaScript" },
                    body: {
                        ar: `<p>JavaScript هي لغة برمجة تضيف التفاعل إلى صفحات الويب، مثل الاستجابة لنقرات الأزرار وتحديث المحتوى دون إعادة تحميل الصفحة.</p>`,
                        code: `<span class="kw">let</span> name = <span class="st">"ليلى"</span>;
<span class="fn">console.log</span>(<span class="st">\`مرحباً \${name}\`</span>);`
                    },
                    quiz: {
                        q: { ar: "أين تُستخدم JavaScript غالباً؟", en: "Where is JavaScript mostly used?" },
                        options: { ar: ["تصميم الطباعة فقط", "إضافة تفاعل داخل صفحات الويب", "تحليل الأشعة الطبية"], en: ["Print design only", "Adding interactivity to web pages", "Medical imaging analysis"] },
                        correct: 1
                    }
                }
            ]
        },
        linux: {
            comingSoon: true,
            name: { ar: "نظام Linux", en: "Linux" },
            icon: "linux", iconClass: "fa-brands fa-linux",
            description: { ar: 'تعلم Linux وTerminal وإدارة الملفات والصلاحيات والعمليات والشبكات وأساسيات Kali Linux.', en: 'Learn Linux, the terminal, files, permissions, processes, networking and Kali Linux basics.' },
            lessons: [
                {
                    title: { ar: "مقدمة إلى الطرفية (Terminal)", en: "Intro to the Terminal" },
                    body: {
                        ar: `<p>الطرفية هي واجهة نصية للتحكم بالنظام عبر كتابة أوامر بدلاً من النقر بالفأرة. تعلّم أوامرها الأساسية يمنحك تحكماً أكبر وأسرع بكثير.</p>`,
                        code: `<span class="cm"># عرض محتويات المجلد الحالي</span>
<span class="fn">ls</span> -la

<span class="cm"># الانتقال إلى مجلد آخر</span>
<span class="fn">cd</span> Documents`
                    },
                    quiz: {
                        q: { ar: "ما الأمر المستخدم للانتقال بين المجلدات؟", en: "Which command changes directories?" },
                        options: { ar: ["ls", "cd", "pwd"], en: ["ls", "cd", "pwd"] },
                        correct: 1
                    }
                }
            ]
        },
        data: {
            comingSoon: true,
            name: { ar: "علم البيانات Data Science", en: "Data Science" },
            icon: "data", iconClass: "fa-solid fa-chart-column",
            description: { ar: 'تعلم تحليل البيانات باستخدام Python وNumPy وPandas والتنظيف والتصور وبناء تحليلات عملية.', en: 'Learn data analysis with Python, NumPy and Pandas, from cleaning to visualization and practical analysis.' },
            lessons: [
                {
                    title: { ar: "مقدمة إلى تحليل البيانات", en: "Intro to data analysis" },
                    body: {
                        ar: `<p>تحليل البيانات هو عملية استكشاف وتنظيف وتلخيص البيانات لاستخراج معلومات مفيدة تساعد في اتخاذ القرار. مكتبة <strong>Pandas</strong> في بايثون هي الأداة الأشهر لهذا الغرض.</p>`,
                        code: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

data = pd.DataFrame({
    <span class="st">"الاسم"</span>: [<span class="st">"سارة"</span>, <span class="st">"علي"</span>],
    <span class="st">"العمر"</span>: [23, 31]
})
<span class="fn">print</span>(data)`
                    },
                    quiz: {
                        q: { ar: "ما اسم أشهر مكتبة بايثون لتحليل البيانات؟", en: "What is the most popular Python library for data analysis?" },
                        options: { ar: ["Pandas", "Turtle", "Tkinter"], en: ["Pandas", "Turtle", "Tkinter"] },
                        correct: 0
                    }
                }
            ]
        },
        computer: {
            comingSoon: true,
            name: { ar: "أساسيات الحاسوب", en: "Computer Basics" },
            icon: "computer", iconClass: "fa-solid fa-desktop",
            description: { ar: 'تعرف على مكونات الحاسوب وأنظمة التشغيل والشبكات والأمن والمفاهيم الأساسية التي يحتاجها كل مبرمج.', en: 'Understand computer hardware, operating systems, networking, security and core concepts every programmer needs.' },
            lessons: [
                {
                    title: { ar: "مكونات الحاسوب الأساسية", en: "Basic computer components" },
                    body: {
                        ar: `<p>يتكوّن الحاسوب من مكونات صلبة (Hardware) وبرمجية (Software) تعمل معاً. أهم المكونات الصلبة هي:</p>
                        <ul>
                            <li><strong>المعالج (CPU)</strong>: عقل الحاسوب الذي ينفذ التعليمات.</li>
                            <li><strong>الذاكرة العشوائية (RAM)</strong>: تخزين مؤقت وسريع أثناء التشغيل.</li>
                            <li><strong>القرص الصلب (Storage)</strong>: تخزين دائم للملفات والبرامج.</li>
                        </ul>`
                    },
                    quiz: {
                        q: { ar: "أي مكون يُعتبر 'عقل' الحاسوب؟", en: "Which component is the 'brain' of the computer?" },
                        options: { ar: ["RAM", "CPU", "Storage"], en: ["RAM", "CPU", "Storage"] },
                        correct: 1
                    }
                }
            ]
        }
    };

    /* =========================================================
       COMPLETE COURSE CONTENT
       Added full lesson sequences without changing the existing UI.
    ========================================================== */
    catalog.web.lessons.push(...[{"title": {"ar": "هيكل صفحة HTML كامل", "en": "HTML document structure"}, "body": {"ar": "<p>تعلم doctype وhtml وhead وbody وكيفية تنظيم الصفحة دلالياً.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn doctype, html, head, body, and semantic page organization.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "<!doctype html>\n<html lang=\"ar\">\n<head><meta charset=\"utf-8\"></head>\n<body><main>محتوى</main></body>\n</html>", "quiz": {"q": {"ar": "أين يوضع المحتوى المرئي؟", "en": "أين يوضع المحتوى المرئي؟"}, "options": {"ar": ["body", "head", "doctype"], "en": ["body", "head", "doctype"]}, "correct": 0}}, {"title": {"ar": "العناصر الدلالية", "en": "Semantic HTML"}, "body": {"ar": "<p>استخدم header وnav وmain وsection وarticle وfooter لوصف معنى المحتوى للمتصفح وأدوات الوصول.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use semantic elements to describe content meaning to browsers and assistive technologies.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "header\nnav\nmain\nsection\nfooter", "quiz": {"q": {"ar": "ما فائدة HTML الدلالية؟", "en": "ما فائدة HTML الدلالية؟"}, "options": {"ar": ["تحسين المعنى والوصول", "تشفير الصور", "تشغيل قاعدة البيانات"], "en": ["تحسين المعنى والوصول", "تشفير الصور", "تشغيل قاعدة البيانات"]}, "correct": 0}}, {"title": {"ar": "الروابط والصور", "en": "Links & images"}, "body": {"ar": "<p>تعلم a وhref وimg وalt وبناء روابط واضحة وصور لها وصف بديل.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn a, href, img, alt, and accessible links and images.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "a href=\"https://example.com\">رابط</a>\nimg src=\"photo.jpg\" alt=\"وصف الصورة\"", "quiz": {"q": {"ar": "ما أهمية alt للصورة؟", "en": "ما أهمية alt للصورة؟"}, "options": {"ar": ["وصف بديل وإتاحة أفضل", "تغيير لون الصورة", "تشغيل JavaScript"], "en": ["وصف بديل وإتاحة أفضل", "تغيير لون الصورة", "تشغيل JavaScript"]}, "correct": 0}}, {"title": {"ar": "النماذج Forms", "en": "Forms"}, "body": {"ar": "<p>استخدم form وlabel وinput وselect وtextarea لبناء نماذج إدخال مفهومة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use form, label, input, select, and textarea to build understandable forms.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "label for=\"email\">البريد</label>\ninput id=\"email\" type=\"email\" required", "quiz": {"q": {"ar": "ما فائدة label؟", "en": "ما فائدة label؟"}, "options": {"ar": ["ربط اسم الحقل به وتحسين الوصول", "إخفاء الحقل", "تغيير الخادم"], "en": ["ربط اسم الحقل به وتحسين الوصول", "إخفاء الحقل", "تغيير الخادم"]}, "correct": 0}}, {"title": {"ar": "CSS Selectors", "en": "CSS selectors"}, "body": {"ar": "<p>تعلم المحددات للعناصر والكلاسات والمعرفات والخصائص لبناء قواعد تنسيق دقيقة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn element, class, id, and attribute selectors for precise styling.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": " .card { padding: 1rem; }\n#title { font-size: 2rem; }", "quiz": {"q": {"ar": "أي محدد يبدأ بنقطة؟", "en": "أي محدد يبدأ بنقطة؟"}, "options": {"ar": ["class", "id", "element"], "en": ["class", "id", "element"]}, "correct": 0}}, {"title": {"ar": "Box Model", "en": "CSS box model"}, "body": {"ar": "<p>كل عنصر يملك content وpadding وborder وmargin. فهمها أساسي للتحكم في المسافات والأبعاد.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Every element has content, padding, border, and margin. Understanding them is essential for layout.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "* { box-sizing: border-box; }\n.card { padding: 16px; margin: 12px; }", "quiz": {"q": {"ar": "ما الذي يضيف مساحة داخل حدود العنصر؟", "en": "ما الذي يضيف مساحة داخل حدود العنصر؟"}, "options": {"ar": ["padding", "margin", "outline"], "en": ["padding", "margin", "outline"]}, "correct": 0}}, {"title": {"ar": "Flexbox", "en": "Flexbox"}, "body": {"ar": "<p>Flexbox ممتاز لترتيب العناصر في صف أو عمود والتحكم في المحاذاة والمسافات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Flexbox is ideal for one-dimensional layouts and alignment.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": " .nav { display:flex; justify-content:space-between; align-items:center; }", "quiz": {"q": {"ar": "ما الخاصية التي تحاذي العناصر على المحور الرئيسي؟", "en": "ما الخاصية التي تحاذي العناصر على المحور الرئيسي؟"}, "options": {"ar": ["justify-content", "font-size", "border"], "en": ["justify-content", "font-size", "border"]}, "correct": 0}}, {"title": {"ar": "CSS Grid", "en": "CSS Grid"}, "body": {"ar": "<p>Grid مناسب للتخطيطات الثنائية الأبعاد التي تحتاج صفوفاً وأعمدة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Grid is ideal for two-dimensional row-and-column layouts.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": " .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }", "quiz": {"q": {"ar": "ما الذي يحدد أعمدة Grid؟", "en": "ما الذي يحدد أعمدة Grid؟"}, "options": {"ar": ["grid-template-columns", "align-text", "float-only"], "en": ["grid-template-columns", "align-text", "float-only"]}, "correct": 0}}, {"title": {"ar": "Responsive Design", "en": "Responsive design"}, "body": {"ar": "<p>اجعل الواجهة تتكيف مع أحجام الشاشات باستخدام وحدات مرنة وmedia queries.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Make interfaces adapt to screen sizes with flexible units and media queries.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}", "quiz": {"q": {"ar": "ما وظيفة media query؟", "en": "ما وظيفة media query؟"}, "options": {"ar": ["تطبيق CSS حسب خصائص الجهاز", "تشغيل قاعدة البيانات", "ضغط الصور"], "en": ["تطبيق CSS حسب خصائص الجهاز", "تشغيل قاعدة البيانات", "ضغط الصور"]}, "correct": 0}}, {"title": {"ar": "CSS Variables", "en": "CSS custom properties"}, "body": {"ar": "<p>المتغيرات تجعل الألوان والمسافات قابلة لإعادة الاستخدام والتغيير من مكان واحد.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Custom properties make colors and spacing reusable and easy to change.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": ":root { --primary:#06b6d4; }\nbutton { color:var(--primary); }", "quiz": {"q": {"ar": "كيف نستخدم متغير CSS؟", "en": "كيف نستخدم متغير CSS؟"}, "options": {"ar": ["var(--name)", "css(name)", "getCss(name)"], "en": ["var(--name)", "css(name)", "getCss(name)"]}, "correct": 0}}, {"title": {"ar": "Transitions وAnimations", "en": "Transitions & animations"}, "body": {"ar": "<p>استخدم transition للتغييرات السلسة وkeyframes للحركات المركبة مع تجنب الإفراط في الحركة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use transitions for smooth changes and keyframes for multi-step animations without excessive motion.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "button { transition: transform .2s; }\nbutton:hover { transform: translateY(-2px); }", "quiz": {"q": {"ar": "ما الذي يجعل التغيير سلساً؟", "en": "ما الذي يجعل التغيير سلساً؟"}, "options": {"ar": ["transition", "database", "doctype"], "en": ["transition", "database", "doctype"]}, "correct": 0}}, {"title": {"ar": "JavaScript مع DOM", "en": "JavaScript and the DOM"}, "body": {"ar": "<p>يمكن لـ JavaScript اختيار عناصر الصفحة وتغيير النصوص والخصائص والاستماع للأحداث.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>JavaScript can select elements, change content and properties, and listen for events.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const title = document.querySelector(\"h1\");\ntitle.textContent = \"مرحباً\";", "quiz": {"q": {"ar": "ما الذي يمثل DOM؟", "en": "ما الذي يمثل DOM؟"}, "options": {"ar": ["هيكل وثيقة الصفحة ككائنات", "قاعدة بيانات", "ملف CSS"], "en": ["هيكل وثيقة الصفحة ككائنات", "قاعدة بيانات", "ملف CSS"]}, "correct": 0}}, {"title": {"ar": "Events", "en": "Browser events"}, "body": {"ar": "<p>تعلم click وsubmit وinput وكيفية ربطها بمستمعات الأحداث.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn click, submit, and input events and how to attach listeners.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "button.addEventListener(\"click\", () => {\n  console.log(\"clicked\");\n});", "quiz": {"q": {"ar": "ما الدالة التي تضيف مستمع حدث؟", "en": "ما الدالة التي تضيف مستمع حدث؟"}, "options": {"ar": ["addEventListener", "addListenerCSS", "listenHTML"], "en": ["addEventListener", "addListenerCSS", "listenHTML"]}, "correct": 0}}, {"title": {"ar": "Fetch وواجهات API", "en": "Fetch & APIs"}, "body": {"ar": "<p>استخدم fetch لإرسال طلبات HTTP والتعامل مع JSON وبناء واجهات تتصل بخدمات خارجية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use fetch for HTTP requests, JSON, and connecting interfaces to external services.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "fetch(\"/api/courses\")\n  .then(r => r.json())\n  .then(data => console.log(data));", "quiz": {"q": {"ar": "ماذا يعيد r.json()؟", "en": "ماذا يعيد r.json()؟"}, "options": {"ar": ["بيانات JSON بعد تحويلها لكائن JavaScript", "CSS", "صورة فقط"], "en": ["بيانات JSON بعد تحويلها لكائن JavaScript", "CSS", "صورة فقط"]}, "correct": 0}}, {"title": {"ar": "التعامل مع JSON", "en": "Working with JSON"}, "body": {"ar": "<p>JSON صيغة شائعة لتبادل البيانات بين الواجهة والخادم، ويمكن تحويلها وإعادتها في JavaScript.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>JSON is a common data exchange format between frontend and backend.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const text = JSON.stringify({name:\"Ali\"});\nconst obj = JSON.parse(text);", "quiz": {"q": {"ar": "ما وظيفة JSON.parse؟", "en": "ما وظيفة JSON.parse؟"}, "options": {"ar": ["تحويل نص JSON إلى قيمة JavaScript", "تحويل CSS", "تشغيل HTML"], "en": ["تحويل نص JSON إلى قيمة JavaScript", "تحويل CSS", "تشغيل HTML"]}, "correct": 0}}, {"title": {"ar": "Accessibility في الويب", "en": "Web accessibility"}, "body": {"ar": "<p>استخدم semantic HTML وlabels وARIA عند الحاجة، وتأكد من لوحة المفاتيح والتباين.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use semantic HTML, labels, ARIA when needed, keyboard access, and sufficient contrast.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "button aria-label=\"فتح القائمة\">☰</button>", "quiz": {"q": {"ar": "ما الهدف الأساسي من accessibility؟", "en": "ما الهدف الأساسي من accessibility؟"}, "options": {"ar": ["إتاحة الموقع لأكبر عدد من المستخدمين", "زيادة حجم الصور", "تعطيل لوحة المفاتيح"], "en": ["إتاحة الموقع لأكبر عدد من المستخدمين", "زيادة حجم الصور", "تعطيل لوحة المفاتيح"]}, "correct": 0}}, {"title": {"ar": "SEO الأساسي", "en": "Basic SEO"}, "body": {"ar": "<p>العناوين والوصف والهيكل الدلالي والروابط الواضحة تساعد محركات البحث على فهم الصفحة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Titles, descriptions, semantic structure, and clear links help search engines understand pages.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "<title>منصة تعلم البرمجة</title>\n<meta name=\"description\" content=\"تعلم البرمجة بالعربية\">", "quiz": {"q": {"ar": "أين يوضع وصف الصفحة؟", "en": "أين يوضع وصف الصفحة؟"}, "options": {"ar": ["meta description", "footer فقط", "CSS"], "en": ["meta description", "footer فقط", "CSS"]}, "correct": 0}}, {"title": {"ar": "أداء صفحات الويب", "en": "Web performance"}, "body": {"ar": "<p>قلل حجم الصور والملفات، استخدم التحميل الكسول عند الحاجة، وقلل JavaScript غير الضروري.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Reduce asset size, lazy-load when useful, and avoid unnecessary JavaScript.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "<img loading=\"lazy\" src=\"course.jpg\" alt=\"دورة\">", "quiz": {"q": {"ar": "ما فائدة loading=lazy؟", "en": "ما فائدة loading=lazy؟"}, "options": {"ar": ["تأجيل تحميل الموارد خارج الشاشة", "تشفير الصورة", "تغيير HTML"], "en": ["تأجيل تحميل الموارد خارج الشاشة", "تشفير الصورة", "تغيير HTML"]}, "correct": 0}}]);
    catalog.javascript.lessons.push(...[{"title": {"ar": "المتغيرات let وconst", "en": "Variables: let & const"}, "body": {"ar": "<p>تعلم الفرق بين let وconst ومتى تستخدم كل منهما، مع فهم نطاق المتغير.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn let and const, when to use them, and variable scope.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const site = \"Kodna\";\nlet count = 0;\ncount++;", "quiz": {"q": {"ar": "أي كلمة مناسبة لقيمة لن تعيد إسنادها؟", "en": "أي كلمة مناسبة لقيمة لن تعيد إسنادها؟"}, "options": {"ar": ["const", "let فقط", "var فقط"], "en": ["const", "let فقط", "var فقط"]}, "correct": 0}}, {"title": {"ar": "أنواع البيانات", "en": "Data types"}, "body": {"ar": "<p>تعرف على string وnumber وboolean وnull وundefined وobject وarray.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Explore common JavaScript primitive and object types.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const name = \"Ali\";\nconst age = 20;\nconst active = true;", "quiz": {"q": {"ar": "ما نوع true؟", "en": "ما نوع true؟"}, "options": {"ar": ["boolean", "string", "number"], "en": ["boolean", "string", "number"]}, "correct": 0}}, {"title": {"ar": "المعاملات والتحويل", "en": "Operators & coercion"}, "body": {"ar": "<p>استخدم === للمقارنة الصارمة وتعلم التحويل الصريح باستخدام Number وString وBoolean.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use strict equality and explicit conversions with Number, String, and Boolean.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const age = Number(\"20\");\nconsole.log(age === 20);", "quiz": {"q": {"ar": "لماذا نفضل ===؟", "en": "لماذا نفضل ===؟"}, "options": {"ar": ["مقارنة دون تحويل نوع ضمني", "لأنه يطبع النص", "لأنه CSS"], "en": ["مقارنة دون تحويل نوع ضمني", "لأنه يطبع النص", "لأنه CSS"]}, "correct": 0}}, {"title": {"ar": "الشروط والحلقات", "en": "Conditions & loops"}, "body": {"ar": "<p>استخدم if وswitch وfor وwhile للتحكم في تدفق البرنامج.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use if, switch, for, and while to control program flow.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "for (let i=0;i<3;i++) {\n console.log(i);\n}", "quiz": {"q": {"ar": "كم مرة تنفذ الحلقة؟", "en": "كم مرة تنفذ الحلقة؟"}, "options": {"ar": ["3", "2", "4"], "en": ["3", "2", "4"]}, "correct": 0}}, {"title": {"ar": "الدوال والمعاملات", "en": "Functions & parameters"}, "body": {"ar": "<p>الدوال يمكنها استقبال معاملات وإرجاع قيم، ويمكن كتابة دوال سهمية بشكل مختصر.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Functions accept parameters and return values; arrow functions provide concise syntax.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const add = (a,b) => a+b;\nconsole.log(add(2,3));", "quiz": {"q": {"ar": "ما قيمة add(2,3)؟", "en": "ما قيمة add(2,3)؟"}, "options": {"ar": ["5", "6", "23"], "en": ["5", "6", "23"]}, "correct": 0}}, {"title": {"ar": "المصفوفات وطرقها", "en": "Arrays & methods"}, "body": {"ar": "<p>تعلم push وmap وfilter وfind وreduce للتعامل مع مجموعات البيانات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn push, map, filter, find, and reduce for collection processing.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const nums=[1,2,3];\nconst doubled=nums.map(n=>n*2);", "quiz": {"q": {"ar": "ما وظيفة map؟", "en": "ما وظيفة map؟"}, "options": {"ar": ["إنشاء مصفوفة جديدة من العناصر", "حذف JavaScript", "فتح ملف"], "en": ["إنشاء مصفوفة جديدة من العناصر", "حذف JavaScript", "فتح ملف"]}, "correct": 0}}, {"title": {"ar": "الكائنات Objects", "en": "Objects"}, "body": {"ar": "<p>الكائنات تجمع خصائص وطرائق تحت اسم واحد، ويمكن الوصول إلى الخصائص بالنقطة أو الأقواس.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Objects group properties and methods and support dot or bracket access.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const user={name:\"Sara\", age:22};\nconsole.log(user.name);", "quiz": {"q": {"ar": "كيف نصل إلى name؟", "en": "كيف نصل إلى name؟"}, "options": {"ar": ["user.name", "user->name", "name.user"], "en": ["user.name", "user->name", "name.user"]}, "correct": 0}}, {"title": {"ar": "Destructuring وSpread", "en": "Destructuring & spread"}, "body": {"ar": "<p>اختصر التعامل مع المصفوفات والكائنات باستخدام destructuring ونسخ/دمج القيم باستخدام spread.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use destructuring and spread to unpack, copy, and combine arrays and objects.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const user={name:\"Ali\", age:30};\nconst {name}=user;\nconst copy={...user};", "quiz": {"q": {"ar": "ما وظيفة ... في هذا السياق؟", "en": "ما وظيفة ... في هذا السياق؟"}, "options": {"ar": ["نسخ/دمج القيم", "حذف الكائن", "تعريف class"], "en": ["نسخ/دمج القيم", "حذف الكائن", "تعريف class"]}, "correct": 0}}, {"title": {"ar": "النطاق وClosures", "en": "Scope & closures"}, "body": {"ar": "<p>افهم global وfunction وblock scope وكيف يمكن للدالة الداخلية الاحتفاظ بمتغيرات من الدالة الخارجية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Understand scope and how closures retain access to outer variables.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "function counter(){\n let n=0;\n return ()=>++n;\n}", "quiz": {"q": {"ar": "ما الذي تحتفظ به closure؟", "en": "ما الذي تحتفظ به closure؟"}, "options": {"ar": ["الوصول إلى نطاق خارجي", "ملف CSS", "قاعدة بيانات"], "en": ["الوصول إلى نطاق خارجي", "ملف CSS", "قاعدة بيانات"]}, "correct": 0}}, {"title": {"ar": "DOM Manipulation", "en": "DOM manipulation"}, "body": {"ar": "<p>غيّر النصوص والكلاسات والعناصر من خلال document وquerySelector وclassList.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Change text, classes, and elements using document, querySelector, and classList.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "const el=document.querySelector(\".card\");\nel.classList.add(\"active\");", "quiz": {"q": {"ar": "ما الذي يختاره querySelector؟", "en": "ما الذي يختاره querySelector؟"}, "options": {"ar": ["أول عنصر يطابق المحدد", "كل الملفات", "قاعدة البيانات"], "en": ["أول عنصر يطابق المحدد", "كل الملفات", "قاعدة البيانات"]}, "correct": 0}}, {"title": {"ar": "Events وForms", "en": "Events & forms"}, "body": {"ar": "<p>تعامل مع click وsubmit وinput، واستخدم preventDefault لمنع الإرسال التقليدي عند الحاجة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Handle click, submit, and input events and use preventDefault when appropriate.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "form.addEventListener(\"submit\", e => {\n e.preventDefault();\n});", "quiz": {"q": {"ar": "ما وظيفة preventDefault؟", "en": "ما وظيفة preventDefault؟"}, "options": {"ar": ["منع السلوك الافتراضي للحدث", "إغلاق المتصفح", "تغيير CSS"], "en": ["منع السلوك الافتراضي للحدث", "إغلاق المتصفح", "تغيير CSS"]}, "correct": 0}}, {"title": {"ar": "Async وPromises", "en": "Async & promises"}, "body": {"ar": "<p>العمليات غير المتزامنة تستخدم Promise وasync/await للتعامل مع نتائج مستقبلية بطريقة واضحة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Promises and async/await make asynchronous results easier to handle.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "async function load(){\n const res=await fetch(\"/api/data\");\n return res.json();\n}", "quiz": {"q": {"ar": "ما الكلمة التي تنتظر Promise داخل async؟", "en": "ما الكلمة التي تنتظر Promise داخل async؟"}, "options": {"ar": ["await", "wait", "pause"], "en": ["await", "wait", "pause"]}, "correct": 0}}, {"title": {"ar": "Fetch وREST API", "en": "Fetch & REST APIs"}, "body": {"ar": "<p>تعلم GET وPOST والـ headers وJSON وربط الواجهة بخادم.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn GET, POST, headers, JSON, and frontend-server communication.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "await fetch(\"/api/users\", {\n method:\"POST\",\n headers:{\"Content-Type\":\"application/json\"},\n body:JSON.stringify({name:\"Ali\"})\n});", "quiz": {"q": {"ar": "أي method تستخدم عادة لإنشاء مورد؟", "en": "أي method تستخدم عادة لإنشاء مورد؟"}, "options": {"ar": ["POST", "GET", "HEAD"], "en": ["POST", "GET", "HEAD"]}, "correct": 0}}, {"title": {"ar": "Modules ES", "en": "ES modules"}, "body": {"ar": "<p>قسّم JavaScript إلى ملفات باستخدام export وimport لتحسين التنظيم وإعادة الاستخدام.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Split JavaScript into files with export and import for organization and reuse.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "export function add(a,b){return a+b;}\nimport {add} from \"./math.js\";", "quiz": {"q": {"ar": "ما وظيفة export؟", "en": "ما وظيفة export؟"}, "options": {"ar": ["إتاحة قيمة لملفات أخرى", "تشغيل CSS", "حذف الدالة"], "en": ["إتاحة قيمة لملفات أخرى", "تشغيل CSS", "حذف الدالة"]}, "correct": 0}}, {"title": {"ar": "Classes", "en": "Classes"}, "body": {"ar": "<p>استخدم class وconstructor وmethods لبناء نماذج كائنية في JavaScript.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use classes, constructors, and methods to model objects.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "class User {\n constructor(name){this.name=name;}\n greet(){return `Hi ${this.name}`;}\n}", "quiz": {"q": {"ar": "متى يعمل constructor؟", "en": "متى يعمل constructor؟"}, "options": {"ar": ["عند إنشاء كائن من class", "عند حذف الصفحة", "عند تحميل CSS فقط"], "en": ["عند إنشاء كائن من class", "عند حذف الصفحة", "عند تحميل CSS فقط"]}, "correct": 0}}, {"title": {"ar": "Local Storage", "en": "Local Storage"}, "body": {"ar": "<p>يمكن حفظ بيانات بسيطة في المتصفح باستخدام localStorage مع JSON، مع الانتباه إلى أنها ليست مكاناً للبيانات السرية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Store simple browser data with localStorage and JSON, but never treat it as secure storage.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "localStorage.setItem(\"theme\",\"dark\");\nconst theme=localStorage.getItem(\"theme\");", "quiz": {"q": {"ar": "هل localStorage مناسب لكلمات المرور؟", "en": "هل localStorage مناسب لكلمات المرور؟"}, "options": {"ar": ["لا", "نعم دائماً", "فقط في CSS"], "en": ["لا", "نعم دائماً", "فقط في CSS"]}, "correct": 0}}, {"title": {"ar": "Debugging وDevTools", "en": "Debugging with DevTools"}, "body": {"ar": "<p>تعلم console وbreakpoints وNetwork وElements لفهم أخطاء JavaScript والطلبات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use console, breakpoints, Network, and Elements to debug JavaScript and requests.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "console.log(\"value\", value);\ndebugger;", "quiz": {"q": {"ar": "أي تبويب يفيد لفحص طلبات HTTP؟", "en": "أي تبويب يفيد لفحص طلبات HTTP؟"}, "options": {"ar": ["Network", "Elements فقط", "Sources فقط"], "en": ["Network", "Elements فقط", "Sources فقط"]}, "correct": 0}}, {"title": {"ar": "أمان JavaScript في الواجهة", "en": "Frontend security basics"}, "body": {"ar": "<p>تجنب إدخال HTML غير موثوق، واستخدم textContent عندما لا تحتاج HTML، ونظّف المحتوى القادم من المستخدم.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Avoid injecting untrusted HTML; prefer textContent and sanitize user-controlled markup.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "element.textContent = userInput;", "quiz": {"q": {"ar": "ما الخيار الأكثر أماناً لعرض نص غير موثوق؟", "en": "ما الخيار الأكثر أماناً لعرض نص غير موثوق؟"}, "options": {"ar": ["textContent", "innerHTML مباشرة", "eval"], "en": ["textContent", "innerHTML مباشرة", "eval"]}, "correct": 0}}]);
    catalog.linux.lessons.push(...[{"title": {"ar": "التنقل في نظام الملفات", "en": "File system navigation"}, "body": {"ar": "<p>تعلم pwd وls وcd لفهم مكانك والتنقل بين المجلدات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn pwd, ls, and cd to understand location and navigate directories.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "pwd\nls -la\ncd /var/log", "quiz": {"q": {"ar": "ما الأمر الذي يعرض المسار الحالي؟", "en": "ما الأمر الذي يعرض المسار الحالي؟"}, "options": {"ar": ["pwd", "ls", "cd"], "en": ["pwd", "ls", "cd"]}, "correct": 0}}, {"title": {"ar": "إنشاء الملفات والمجلدات", "en": "Create files & directories"}, "body": {"ar": "<p>استخدم mkdir لإنشاء المجلدات وtouch لإنشاء ملف فارغ.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use mkdir for directories and touch for empty files.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "mkdir projects\ntouch notes.txt", "quiz": {"q": {"ar": "ما الأمر لإنشاء مجلد؟", "en": "ما الأمر لإنشاء مجلد؟"}, "options": {"ar": ["mkdir", "touch", "rm"], "en": ["mkdir", "touch", "rm"]}, "correct": 0}}, {"title": {"ar": "نسخ ونقل وحذف", "en": "Copy, move & delete"}, "body": {"ar": "<p>تعلم cp وmv وrm مع الحذر عند حذف الملفات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn cp, mv, and rm, with care when deleting files.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "cp a.txt backup.txt\nmv backup.txt archive/\nrm archive/backup.txt", "quiz": {"q": {"ar": "ما الأمر الذي ينقل ملفاً؟", "en": "ما الأمر الذي ينقل ملفاً؟"}, "options": {"ar": ["mv", "cp", "pwd"], "en": ["mv", "cp", "pwd"]}, "correct": 0}}, {"title": {"ar": "عرض الملفات وقراءة النص", "en": "Reading files"}, "body": {"ar": "<p>استخدم cat وless وhead وtail لفحص الملفات النصية بسرعة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use cat, less, head, and tail to inspect text files efficiently.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "head -n 10 app.log\ntail -f app.log", "quiz": {"q": {"ar": "ما فائدة tail -f؟", "en": "ما فائدة tail -f؟"}, "options": {"ar": ["متابعة نهاية الملف أثناء تغيره", "حذف الملف", "ضغطه"], "en": ["متابعة نهاية الملف أثناء تغيره", "حذف الملف", "ضغطه"]}, "correct": 0}}, {"title": {"ar": "البحث grep", "en": "Searching with grep"}, "body": {"ar": "<p>grep يبحث عن نصوص داخل الملفات ويساعد في تحليل السجلات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>grep searches text inside files and is useful for logs.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "grep -n \"ERROR\" app.log", "quiz": {"q": {"ar": "ما وظيفة grep؟", "en": "ما وظيفة grep؟"}, "options": {"ar": ["البحث داخل النصوص", "تغيير المالك", "إنشاء مستخدم"], "en": ["البحث داخل النصوص", "تغيير المالك", "إنشاء مستخدم"]}, "correct": 0}}, {"title": {"ar": "الصلاحيات chmod", "en": "Permissions & chmod"}, "body": {"ar": "<p>افهم read/write/execute واستخدم chmod لتعديل صلاحيات الملفات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Understand read/write/execute permissions and use chmod to change them.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "chmod u+x script.sh\n./script.sh", "quiz": {"q": {"ar": "ما معنى x؟", "en": "ما معنى x؟"}, "options": {"ar": ["execute", "export", "extra"], "en": ["execute", "export", "extra"]}, "correct": 0}}, {"title": {"ar": "المستخدمون والمجموعات", "en": "Users & groups"}, "body": {"ar": "<p>تعرف على whoami وid والمستخدمين والمجموعات لفهم صلاحيات النظام.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use whoami and id to inspect users, groups, and permissions.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "whoami\nid\ngroups", "quiz": {"q": {"ar": "ما الذي يعرضه whoami؟", "en": "ما الذي يعرضه whoami؟"}, "options": {"ar": ["اسم المستخدم الحالي", "كل الملفات", "عنوان IP فقط"], "en": ["اسم المستخدم الحالي", "كل الملفات", "عنوان IP فقط"]}, "correct": 0}}, {"title": {"ar": "إدارة الحزم", "en": "Package management"}, "body": {"ar": "<p>تختلف الأدوات حسب التوزيعة. الفكرة هي تثبيت الحزم وتحديثها وإزالتها من مدير الحزم.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Package managers vary by distribution; use them to install, update, and remove software.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "sudo apt update\nsudo apt install curl", "quiz": {"q": {"ar": "ما وظيفة مدير الحزم؟", "en": "ما وظيفة مدير الحزم؟"}, "options": {"ar": ["إدارة البرامج والحزم", "إدارة الصور فقط", "إنشاء HTML"], "en": ["إدارة البرامج والحزم", "إدارة الصور فقط", "إنشاء HTML"]}, "correct": 0}}, {"title": {"ar": "العمليات Processes", "en": "Processes"}, "body": {"ar": "<p>تعلم ps وtop/htop وkill لمراقبة العمليات وإنهائها عند الحاجة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use ps, top/htop, and kill to inspect and manage processes.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "ps aux\nkill 1234", "quiz": {"q": {"ar": "ما الذي يمثله PID؟", "en": "ما الذي يمثله PID؟"}, "options": {"ar": ["معرف العملية", "معرف الملف", "كلمة المرور"], "en": ["معرف العملية", "معرف الملف", "كلمة المرور"]}, "correct": 0}}, {"title": {"ar": "الشبكات الأساسية", "en": "Basic networking"}, "body": {"ar": "<p>تعلم ip وping وss لفحص الواجهات والاتصال والمنافذ المفتوحة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use ip, ping, and ss to inspect interfaces, connectivity, and sockets.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "ip addr\nping -c 4 example.com\nss -tulpn", "quiz": {"q": {"ar": "ما وظيفة ping؟", "en": "ما وظيفة ping؟"}, "options": {"ar": ["اختبار الوصول إلى مضيف", "تثبيت برنامج", "تغيير الصلاحيات"], "en": ["اختبار الوصول إلى مضيف", "تثبيت برنامج", "تغيير الصلاحيات"]}, "correct": 0}}, {"title": {"ar": "متغيرات البيئة وPATH", "en": "Environment variables & PATH"}, "body": {"ar": "<p>متغيرات البيئة تؤثر في البرامج، وPATH يحدد أين يبحث النظام عن الأوامر.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Environment variables affect programs; PATH controls where commands are searched.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "echo $PATH\nexport APP_ENV=production", "quiz": {"q": {"ar": "ما وظيفة PATH؟", "en": "ما وظيفة PATH؟"}, "options": {"ar": ["تحديد مسارات البحث عن الأوامر", "حفظ الصور", "تغيير كلمة المرور"], "en": ["تحديد مسارات البحث عن الأوامر", "حفظ الصور", "تغيير كلمة المرور"]}, "correct": 0}}, {"title": {"ar": "الـ Pipes وRedirection", "en": "Pipes & redirection"}, "body": {"ar": "<p>اربط أوامر Unix عبر | واحفظ المخرجات باستخدام > و>>.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Connect commands with pipes and redirect output with > and >>.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "cat app.log | grep ERROR > errors.txt", "quiz": {"q": {"ar": "ما رمز الـ pipe؟", "en": "ما رمز الـ pipe؟"}, "options": {"ar": ["|", ">", "&"], "en": ["|", ">", "&"]}, "correct": 0}}, {"title": {"ar": "Bash scripting", "en": "Bash scripting"}, "body": {"ar": "<p>اكتب سكربتات بسيطة باستخدام المتغيرات والشروط والحلقات لجعل المهام متكررة آلياً.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Write scripts using variables, conditions, and loops to automate repeated tasks.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "#!/bin/bash\nfor f in *.txt; do\n  echo \"$f\"\ndone", "quiz": {"q": {"ar": "ما أول سطر شائع لتعريف Bash؟", "en": "ما أول سطر شائع لتعريف Bash؟"}, "options": {"ar": ["#!/bin/bash", "<bash>", "bash.start()"], "en": ["#!/bin/bash", "<bash>", "bash.start()"]}, "correct": 0}}]);
    catalog.data.lessons.push(...[{"title": {"ar": "Python للبيانات", "en": "Python for data work"}, "body": {"ar": "<p>راجع القوائم والقواميس والدوال ثم اربطها بمشكلات البيانات العملية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Review Python collections and functions and connect them to practical data tasks.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "records=[{\"name\":\"Ali\",\"score\":80},{\"name\":\"Sara\",\"score\":95}]\nprint(records[0][\"score\"])", "quiz": {"q": {"ar": "أي بنية مناسبة لسجل بخصائص مسماة؟", "en": "أي بنية مناسبة لسجل بخصائص مسماة؟"}, "options": {"ar": ["dict", "set فقط", "string فقط"], "en": ["dict", "set فقط", "string فقط"]}, "correct": 0}}, {"title": {"ar": "NumPy والمصفوفات", "en": "NumPy arrays"}, "body": {"ar": "<p>NumPy يوفر مصفوفات عددية وعمليات متجهية أسرع وأكثر ملاءمة للحسابات العلمية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>NumPy provides numeric arrays and vectorized operations for scientific computing.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "import numpy as np\na=np.array([1,2,3])\nprint(a*2)", "quiz": {"q": {"ar": "ما ناتج a*2؟", "en": "ما ناتج a*2؟"}, "options": {"ar": ["[2,4,6]", "[1,2,3,2]", "خطأ دائماً"], "en": ["[2,4,6]", "[1,2,3,2]", "خطأ دائماً"]}, "correct": 0}}, {"title": {"ar": "Pandas Series وDataFrame", "en": "Pandas Series & DataFrame"}, "body": {"ar": "<p>تعرف على Series وDataFrame وكيفية إنشاء جداول بيانات منظمة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn Series and DataFrame and how to create structured tables.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "import pandas as pd\ndf=pd.DataFrame({\"age\":[20,30],\"score\":[80,90]})", "quiz": {"q": {"ar": "ما هو DataFrame؟", "en": "ما هو DataFrame؟"}, "options": {"ar": ["جدول بيانات ثنائي الأبعاد", "صورة", "نظام تشغيل"], "en": ["جدول بيانات ثنائي الأبعاد", "صورة", "نظام تشغيل"]}, "correct": 0}}, {"title": {"ar": "قراءة CSV", "en": "Reading CSV files"}, "body": {"ar": "<p>CSV صيغة شائعة للبيانات الجدولية، ويمكن تحميلها إلى DataFrame مباشرة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>CSV is a common tabular format and can be loaded directly into a DataFrame.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df=pd.read_csv(\"sales.csv\")\nprint(df.head())", "quiz": {"q": {"ar": "ما الدالة المناسبة لقراءة CSV؟", "en": "ما الدالة المناسبة لقراءة CSV؟"}, "options": {"ar": ["read_csv", "read_html_only", "open_csv_db"], "en": ["read_csv", "read_html_only", "open_csv_db"]}, "correct": 0}}, {"title": {"ar": "تنظيف البيانات", "en": "Data cleaning"}, "body": {"ar": "<p>تعلم اكتشاف القيم المفقودة والتكرارات والأنواع غير الصحيحة قبل التحليل.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn to detect missing values, duplicates, and incorrect types before analysis.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df.isna().sum()\ndf=df.drop_duplicates()", "quiz": {"q": {"ar": "لماذا ننظف البيانات؟", "en": "لماذا ننظف البيانات؟"}, "options": {"ar": ["لتحسين جودة التحليل", "لتغيير لون الرسم", "لتثبيت Linux"], "en": ["لتحسين جودة التحليل", "لتغيير لون الرسم", "لتثبيت Linux"]}, "correct": 0}}, {"title": {"ar": "القيم المفقودة", "en": "Missing values"}, "body": {"ar": "<p>تعامل مع NaN حسب معنى البيانات باستخدام الحذف أو التعويض المدروس.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Handle NaN with deletion or thoughtful imputation depending on context.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df[\"age\"]=df[\"age\"].fillna(df[\"age\"].median())", "quiz": {"q": {"ar": "ما فائدة fillna؟", "en": "ما فائدة fillna؟"}, "options": {"ar": ["معالجة القيم المفقودة", "ترتيب الأعمدة فقط", "رسم مخطط"], "en": ["معالجة القيم المفقودة", "ترتيب الأعمدة فقط", "رسم مخطط"]}, "correct": 0}}, {"title": {"ar": "Filtering وQuery", "en": "Filtering data"}, "body": {"ar": "<p>رشّح الصفوف وفق شروط منطقية لاستخراج الجزء المطلوب من البيانات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Filter rows using logical conditions to select relevant records.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "adults=df[df[\"age\"]>=18]", "quiz": {"q": {"ar": "ماذا يفعل الشرط السابق؟", "en": "ماذا يفعل الشرط السابق؟"}, "options": {"ar": ["يختار الصفوف بعمر 18 فأكثر", "يحذف العمود", "يرسم مخطط"], "en": ["يختار الصفوف بعمر 18 فأكثر", "يحذف العمود", "يرسم مخطط"]}, "correct": 0}}, {"title": {"ar": "Sorting وRanking", "en": "Sorting & ranking"}, "body": {"ar": "<p>رتب البيانات باستخدام sort_values واستخرج أعلى أو أدنى القيم.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Sort data with sort_values and inspect top or bottom records.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df.sort_values(\"score\", ascending=False).head(3)", "quiz": {"q": {"ar": "كيف نرتب تنازلياً؟", "en": "كيف نرتب تنازلياً؟"}, "options": {"ar": ["ascending=False", "descending=True فقط", "reverse=css"], "en": ["ascending=False", "descending=True فقط", "reverse=css"]}, "correct": 0}}, {"title": {"ar": "GroupBy", "en": "Grouping & aggregation"}, "body": {"ar": "<p>groupby يسمح بتجميع الصفوف حسب فئة ثم حساب المتوسط أو المجموع أو العدد.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>groupby groups rows by categories and supports aggregations such as mean, sum, and count.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df.groupby(\"city\")[\"sales\"].sum()", "quiz": {"q": {"ar": "ما فائدة groupby؟", "en": "ما فائدة groupby؟"}, "options": {"ar": ["التجميع حسب فئة", "تشفير البيانات", "تحميل صورة"], "en": ["التجميع حسب فئة", "تشفير البيانات", "تحميل صورة"]}, "correct": 0}}, {"title": {"ar": "Merge وJoin", "en": "Merge & join"}, "body": {"ar": "<p>ادمج جداول مرتبطة باستخدام مفاتيح مشتركة، مع فهم أنواع الربط الأساسية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Combine related tables using shared keys and understand common join types.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "orders.merge(customers, on=\"customer_id\", how=\"left\")", "quiz": {"q": {"ar": "ما الذي نحتاجه غالباً لدمج جدولين؟", "en": "ما الذي نحتاجه غالباً لدمج جدولين؟"}, "options": {"ar": ["مفتاح مشترك", "لون مشترك", "اسم ملف فقط"], "en": ["مفتاح مشترك", "لون مشترك", "اسم ملف فقط"]}, "correct": 0}}, {"title": {"ar": "الإحصاء الوصفي", "en": "Descriptive statistics"}, "body": {"ar": "<p>احسب المتوسط والوسيط والانحراف المعياري لفهم مركز البيانات وتشتته.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use mean, median, and standard deviation to understand center and spread.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df[\"score\"].describe()", "quiz": {"q": {"ar": "أي مقياس أقل تأثراً بالقيم المتطرفة عادة؟", "en": "أي مقياس أقل تأثراً بالقيم المتطرفة عادة؟"}, "options": {"ar": ["median", "mean دائماً", "sum"], "en": ["median", "mean دائماً", "sum"]}, "correct": 0}}, {"title": {"ar": "الارتباط", "en": "Correlation"}, "body": {"ar": "<p>الارتباط يقيس اتجاه وقوة العلاقة الخطية، لكنه لا يثبت السببية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Correlation measures direction and strength of linear association but does not prove causation.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df[[\"hours\",\"score\"]].corr()", "quiz": {"q": {"ar": "هل الارتباط يثبت السببية؟", "en": "هل الارتباط يثبت السببية؟"}, "options": {"ar": ["لا", "نعم دائماً", "فقط إذا كان موجباً"], "en": ["لا", "نعم دائماً", "فقط إذا كان موجباً"]}, "correct": 0}}, {"title": {"ar": "التصور البياني Matplotlib", "en": "Matplotlib visualization"}, "body": {"ar": "<p>استخدم الرسوم لتوضيح الأنماط، واختر نوع الرسم حسب السؤال.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use charts to reveal patterns and choose a chart based on the question.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "import matplotlib.pyplot as plt\ndf[\"score\"].plot(kind=\"hist\")\nplt.show()", "quiz": {"q": {"ar": "ما فائدة الرسم البياني؟", "en": "ما فائدة الرسم البياني؟"}, "options": {"ar": ["توضيح الأنماط", "تغيير قاعدة البيانات", "تشفير CSV"], "en": ["توضيح الأنماط", "تغيير قاعدة البيانات", "تشفير CSV"]}, "correct": 0}}, {"title": {"ar": "Seaborn ورسوم التحليل", "en": "Seaborn"}, "body": {"ar": "<p>Seaborn يبني رسوماً إحصائية جميلة فوق Matplotlib ويسهل المقارنة بين المتغيرات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Seaborn provides statistical visualizations built on Matplotlib.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "import seaborn as sns\nsns.scatterplot(data=df, x=\"hours\", y=\"score\")", "quiz": {"q": {"ar": "ما نوع الرسم المناسب لعلاقة متغيرين عدديين؟", "en": "ما نوع الرسم المناسب لعلاقة متغيرين عدديين؟"}, "options": {"ar": ["scatter plot", "pie فقط", "text فقط"], "en": ["scatter plot", "pie فقط", "text فقط"]}, "correct": 0}}, {"title": {"ar": "هندسة الخصائص", "en": "Feature engineering"}, "body": {"ar": "<p>حوّل البيانات الخام إلى خصائص مفيدة للنموذج مع تجنب تسريب معلومات من المستقبل.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Transform raw data into useful features while avoiding leakage from future information.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df[\"total_price\"]=df[\"qty\"]*df[\"unit_price\"]", "quiz": {"q": {"ar": "ما المقصود بـ feature؟", "en": "ما المقصود بـ feature؟"}, "options": {"ar": ["متغير يدخل التحليل أو النموذج", "ملف CSS", "اسم قاعدة البيانات"], "en": ["متغير يدخل التحليل أو النموذج", "ملف CSS", "اسم قاعدة البيانات"]}, "correct": 0}}, {"title": {"ar": "مقدمة تعلم الآلة", "en": "Intro to machine learning"}, "body": {"ar": "<p>تعلم الفرق بين supervised وunsupervised، وفكرة التدريب والاختبار.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Understand supervised vs unsupervised learning and the train/test idea.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "from sklearn.model_selection import train_test_split\nX_train,X_test,y_train,y_test=train_test_split(X,y,test_size=.2)", "quiz": {"q": {"ar": "لماذا نقسم البيانات؟", "en": "لماذا نقسم البيانات؟"}, "options": {"ar": ["لتقييم التعميم على بيانات غير مرئية", "لتغيير نوع الملف", "لتقليل عدد الأعمدة دائماً"], "en": ["لتقييم التعميم على بيانات غير مرئية", "لتغيير نوع الملف", "لتقليل عدد الأعمدة دائماً"]}, "correct": 0}}, {"title": {"ar": "الانحدار", "en": "Regression"}, "body": {"ar": "<p>الانحدار يتنبأ بقيمة عددية مثل السعر أو المبيعات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Regression predicts numeric values such as price or sales.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "from sklearn.linear_model import LinearRegression\nmodel=LinearRegression().fit(X_train,y_train)", "quiz": {"q": {"ar": "ما الذي يتنبأ به regression؟", "en": "ما الذي يتنبأ به regression؟"}, "options": {"ar": ["قيمة عددية", "فئة نصية فقط", "صورة فقط"], "en": ["قيمة عددية", "فئة نصية فقط", "صورة فقط"]}, "correct": 0}}, {"title": {"ar": "التصنيف", "en": "Classification"}, "body": {"ar": "<p>التصنيف يتنبأ بفئة مثل spam/not spam، ويمكن تقييمه بمقاييس متعددة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Classification predicts categories such as spam/not spam and uses multiple evaluation metrics.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "from sklearn.linear_model import LogisticRegression\nmodel=LogisticRegression().fit(X_train,y_train)", "quiz": {"q": {"ar": "ما مثال على classification؟", "en": "ما مثال على classification؟"}, "options": {"ar": ["spam أو not spam", "درجة حرارة فقط", "متوسط المبيعات فقط"], "en": ["spam أو not spam", "درجة حرارة فقط", "متوسط المبيعات فقط"]}, "correct": 0}}, {"title": {"ar": "التقييم Accuracy وPrecision وRecall", "en": "Model evaluation"}, "body": {"ar": "<p>افهم متى تكون accuracy مضللة وكيف تفسر precision وrecall في المسائل غير المتوازنة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Understand when accuracy can mislead and how precision and recall help with imbalanced problems.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "from sklearn.metrics import classification_report\nprint(classification_report(y_test, model.predict(X_test)))", "quiz": {"q": {"ar": "أي مقياس مهم عندما نهتم بتقليل false negatives؟", "en": "أي مقياس مهم عندما نهتم بتقليل false negatives؟"}, "options": {"ar": ["recall", "عدد الصفوف فقط", "R2 دائماً"], "en": ["recall", "عدد الصفوف فقط", "R2 دائماً"]}, "correct": 0}}, {"title": {"ar": "التجهيز Pipeline وScaling", "en": "Pipelines & scaling"}, "body": {"ar": "<p>استخدم pipelines لتجميع خطوات التحضير والنموذج وتجنب تسريب البيانات بين التدريب والاختبار.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use pipelines to combine preprocessing and models and avoid train-test leakage.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\npipe=Pipeline([(\"scale\",StandardScaler()),(\"model\",model)])", "quiz": {"q": {"ar": "ما فائدة Pipeline؟", "en": "ما فائدة Pipeline؟"}, "options": {"ar": ["تنظيم خطوات المعالجة والنموذج", "رسم المخطط فقط", "حذف البيانات"], "en": ["تنظيم خطوات المعالجة والنموذج", "رسم المخطط فقط", "حذف البيانات"]}, "correct": 0}}, {"title": {"ar": "مشروع Data Science نهائي", "en": "Final data science project"}, "body": {"ar": "<p>نفذ مشروعاً من CSV إلى تنظيف واستكشاف وتصوير وبناء نموذج بسيط ثم اكتب استنتاجات وحدود التحليل.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Build a project from CSV through cleaning, exploration, visualization, a simple model, and documented conclusions and limitations.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "df=pd.read_csv(\"dataset.csv\")\n# clean -> explore -> visualize -> model", "quiz": {"q": {"ar": "ما الخطوة التي يجب توثيقها مع النتائج؟", "en": "ما الخطوة التي يجب توثيقها مع النتائج؟"}, "options": {"ar": ["الافتراضات والقيود", "لون الأزرار فقط", "اسم الجهاز فقط"], "en": ["الافتراضات والقيود", "لون الأزرار فقط", "اسم الجهاز فقط"]}, "correct": 0}}]);
    catalog.computer.lessons.push(...[{"title": {"ar": "أنظمة التشغيل", "en": "Operating systems"}, "body": {"ar": "<p>نظام التشغيل يدير الذاكرة والملفات والأجهزة ويوفر خدمات للتطبيقات.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>An operating system manages memory, files, hardware, and services for applications.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "CPU -> Operating System -> Applications", "quiz": {"q": {"ar": "ما الدور الأساسي لنظام التشغيل؟", "en": "ما الدور الأساسي لنظام التشغيل؟"}, "options": {"ar": ["إدارة موارد الحاسوب", "تصميم الصور فقط", "كتابة HTML"], "en": ["إدارة موارد الحاسوب", "تصميم الصور فقط", "كتابة HTML"]}, "correct": 0}}, {"title": {"ar": "CPU والذاكرة", "en": "CPU & memory"}, "body": {"ar": "<p>افهم دور المعالج والذاكرة العشوائية وكيف تتعاون لتنفيذ البرامج.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Understand how CPU and RAM cooperate to execute programs.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "CPU: execute instructions\nRAM: active working data", "quiz": {"q": {"ar": "أين تحفظ البيانات النشطة مؤقتاً؟", "en": "أين تحفظ البيانات النشطة مؤقتاً؟"}, "options": {"ar": ["RAM", "SSD فقط", "الشاشة"], "en": ["RAM", "SSD فقط", "الشاشة"]}, "correct": 0}}, {"title": {"ar": "التخزين HDD وSSD", "en": "HDD vs SSD"}, "body": {"ar": "<p>SSD أسرع عادةً ولا يحتوي أجزاء متحركة، بينما HDD يعتمد على أقراص ميكانيكية.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>SSDs are generally faster and have no moving parts; HDDs use mechanical disks.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "SSD -> fast access\nHDD -> mechanical storage", "quiz": {"q": {"ar": "أي نوع لا يحتوي أجزاء ميكانيكية متحركة؟", "en": "أي نوع لا يحتوي أجزاء ميكانيكية متحركة؟"}, "options": {"ar": ["SSD", "HDD", "DVD"], "en": ["SSD", "HDD", "DVD"]}, "correct": 0}}, {"title": {"ar": "أنظمة الملفات", "en": "File systems"}, "body": {"ar": "<p>نظام الملفات ينظم الملفات والمجلدات ويحدد طريقة تخزينها والوصول إليها.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>A file system organizes files and directories and controls how data is stored and accessed.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "Windows: NTFS\nLinux: ext4", "quiz": {"q": {"ar": "ما وظيفة نظام الملفات؟", "en": "ما وظيفة نظام الملفات؟"}, "options": {"ar": ["تنظيم وتخزين الملفات", "تشغيل الشاشة", "تصميم المواقع"], "en": ["تنظيم وتخزين الملفات", "تشغيل الشاشة", "تصميم المواقع"]}, "correct": 0}}, {"title": {"ar": "الشبكات والإنترنت", "en": "Networks & internet"}, "body": {"ar": "<p>تعرف على LAN وWAN وIP وDNS وفكرة انتقال البيانات بين الأجهزة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn LAN, WAN, IP, DNS, and how data moves between devices.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "Device -> Router -> Internet -> Server", "quiz": {"q": {"ar": "ما وظيفة DNS؟", "en": "ما وظيفة DNS؟"}, "options": {"ar": ["تحويل أسماء النطاقات إلى عناوين IP", "زيادة RAM", "ضغط الصور"], "en": ["تحويل أسماء النطاقات إلى عناوين IP", "زيادة RAM", "ضغط الصور"]}, "correct": 0}}, {"title": {"ar": "الأمن وكلمات المرور", "en": "Security & passwords"}, "body": {"ar": "<p>استخدم كلمات مرور طويلة وفريدة ومدير كلمات مرور والمصادقة متعددة العوامل.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Use long unique passwords, a password manager, and multi-factor authentication.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "Password + MFA\nNever reuse important passwords", "quiz": {"q": {"ar": "ما الذي يقلل أثر تسريب كلمة مرور؟", "en": "ما الذي يقلل أثر تسريب كلمة مرور؟"}, "options": {"ar": ["عدم إعادة استخدامها وتفعيل MFA", "استخدام نفس كلمة المرور", "كتابتها في موقع عام"], "en": ["عدم إعادة استخدامها وتفعيل MFA", "استخدام نفس كلمة المرور", "كتابتها في موقع عام"]}, "correct": 0}}, {"title": {"ar": "النسخ الاحتياطي", "en": "Backups"}, "body": {"ar": "<p>النسخ الاحتياطي يحمي من الحذف والأعطال، ويفضل وجود نسخ متعددة في أماكن مختلفة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Backups protect against deletion and failures; keep multiple copies in different locations.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "3-2-1 backup\n3 copies, 2 media, 1 offsite", "quiz": {"q": {"ar": "ما الفكرة الأساسية في 3-2-1؟", "en": "ما الفكرة الأساسية في 3-2-1؟"}, "options": {"ar": ["عدة نسخ ووسائط ونسخة خارجية", "3 كلمات مرور", "2 معالج"], "en": ["عدة نسخ ووسائط ونسخة خارجية", "3 كلمات مرور", "2 معالج"]}, "correct": 0}}, {"title": {"ar": "إدارة الملفات", "en": "File management"}, "body": {"ar": "<p>نظم المجلدات واستخدم أسماء واضحة وامتدادات مناسبة لتسهيل البحث والصيانة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Organize folders, use clear names, and appropriate extensions for maintainability.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "Documents/\n  Projects/\n  Photos/\n  Archive/", "quiz": {"q": {"ar": "ما أفضل ممارسة لأسماء الملفات؟", "en": "ما أفضل ممارسة لأسماء الملفات؟"}, "options": {"ar": ["أسماء واضحة ومتسقة", "أسماء عشوائية", "تركها فارغة"], "en": ["أسماء واضحة ومتسقة", "أسماء عشوائية", "تركها فارغة"]}, "correct": 0}}, {"title": {"ar": "تثبيت البرامج بأمان", "en": "Safe software installation"}, "body": {"ar": "<p>نزّل البرامج من مصادر موثوقة وتحقق من المتطلبات والتوقيعات أو checksums عندما تتوفر.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Download software from trusted sources and verify requirements, signatures, or checksums when available.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "sha256sum installer.iso", "quiz": {"q": {"ar": "ما فائدة checksum؟", "en": "ما فائدة checksum؟"}, "options": {"ar": ["التحقق من سلامة الملف", "تسريع CPU", "فتح Wi-Fi"], "en": ["التحقق من سلامة الملف", "تسريع CPU", "فتح Wi-Fi"]}, "correct": 0}}, {"title": {"ar": "الأجهزة الطرفية", "en": "Peripherals"}, "body": {"ar": "<p>تعرف على لوحة المفاتيح والفأرة والشاشة والطابعة والكاميرا وكيف تتصل بالحاسوب.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Learn common peripherals and how they connect to a computer.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "USB / Bluetooth / HDMI", "quiz": {"q": {"ar": "أي منفذ يستخدم كثيراً للشاشات الحديثة؟", "en": "أي منفذ يستخدم كثيراً للشاشات الحديثة؟"}, "options": {"ar": ["HDMI", "RAM", "CPU"], "en": ["HDMI", "RAM", "CPU"]}, "correct": 0}}, {"title": {"ar": "استكشاف الأعطال", "en": "Troubleshooting"}, "body": {"ar": "<p>ابدأ بتحديد المشكلة وإعادة إنتاجها ثم افحص الاتصالات والرسائل وسجل التغييرات خطوة بخطوة.</p><h3>تطبيق</h3><p>جرّب المثال التالي وغيّر القيم بنفسك.</p>", "en": "<p>Identify and reproduce the issue, check connections and messages, and change one thing at a time.</p><h3>Practice</h3><p>Try the example and change the values yourself.</p>"}, "code": "Problem -> Reproduce -> Isolate -> Test -> Fix -> Verify", "quiz": {"q": {"ar": "ما أول مهارة في troubleshooting؟", "en": "ما أول مهارة في troubleshooting؟"}, "options": {"ar": ["تحديد المشكلة وإعادة إنتاجها", "تغيير كل الإعدادات", "حذف النظام"], "en": ["تحديد المشكلة وإعادة إنتاجها", "تغيير كل الإعدادات", "حذف النظام"]}, "correct": 0}}]);


