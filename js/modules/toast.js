/* =========================================================
   TOAST NOTIFICATIONS
========================================================== */
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
let toastTimer;

export function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
