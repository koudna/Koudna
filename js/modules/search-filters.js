/* =========================================================
   SEARCH & FILTERS
========================================================== */
export function initSearchFilters() {
    const searchInput = document.getElementById("courseSearch");
    const courseCards = document.querySelectorAll(".course-card");
    const emptyState = document.getElementById("emptyState");
    let activeFilter = "all";

    function filterCourses() {
        const query = searchInput.value.trim().toLowerCase();
        let visible = 0;

        courseCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const level = card.dataset.level;
            const matchesSearch = title.includes(query);
            const matchesFilter = activeFilter === "all" || level === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.classList.remove("hidden");
                visible++;
            } else {
                card.classList.add("hidden");
            }
        });

        emptyState.style.display = visible === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", filterCourses);

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            activeFilter = button.dataset.filter;
            filterCourses();
        });
    });
}
