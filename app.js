document.addEventListener("DOMContentLoaded", () => {
    const yearTargets = document.querySelectorAll("[data-year]");
    const currentYear = new Date().getFullYear();

    yearTargets.forEach((item) => {
        item.textContent = currentYear;
    });

    const toggleButton = document.getElementById("toggleSummary");
    const summary = document.getElementById("summaryText");

    if (toggleButton && summary) {
        toggleButton.addEventListener("click", () => {
            summary.classList.toggle("d-none");
        });
    }
});