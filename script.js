document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const detailsButtons = document.querySelectorAll(".toggle-details");

    // Theme Toggle
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
    });

    // Toggle Work Experience Details
    detailsButtons.forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});
