/* =========================================================
   SUPABASE CLIENT (real backend auth + database)
========================================================== */
const SUPABASE_URL = "https://lhyhlcpwftnmkqmprhcb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoeWhsY3B3ZnRubWtxbXByaGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczNjAyNzksImV4cCI6MjEwMjkzNjI3OX0.x12qm5TBi5uXYHEmeDjS4xJECybTkdYkMbR_aBQ3hpw";

// Guard against the CDN script failing to load (slow/blocked network,
// in-app browsers, ad blockers, etc). Without this guard, a failed CDN
// load would throw immediately and silently stop the ENTIRE rest of
// this script from running — breaking dark mode, language, icons-CSS
// hookups, animations, everything — not just login. With the guard,
// the whole site keeps working normally and only auth shows a clear
// error if the backend is unreachable.
const authOfflineError = {
    message: "تعذر الاتصال بخدمة التسجيل. جرّب فتح الصفحة في متصفح حقيقي (Safari/Chrome) بدل معاينة داخل التطبيق، وتأكد من اتصالك بالإنترنت."
};
export const supabaseClient = (window.supabase && typeof window.supabase.createClient === "function")
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : {
        auth: {
            getSession: async () => ({ data: { session: null } }),
            onAuthStateChange: () => {},
            signInWithPassword: async () => ({ data: {}, error: authOfflineError }),
            signUp: async () => ({ data: {}, error: authOfflineError }),
            signOut: async () => {}
        },
        from: () => ({
            select: () => ({ eq: () => ({ single: async () => ({ data: null, error: authOfflineError }) }) }),
            update: () => ({ eq: () => Promise.resolve({ error: authOfflineError }) })
        })
    };
