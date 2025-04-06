document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector("input");
    const header = document.querySelector("header");

    // Add hover effect on input field
    inputField.addEventListener("focus", function () {
        this.style.boxShadow = "0 0 15px rgba(255, 0, 0, 0.8)";
    });

    inputField.addEventListener("blur", function () {
        this.style.boxShadow = "none";
    });

    // Add scroll effect on header
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 0, 0, 1)";
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.4)";
        } else {
            header.style.background = "rgba(255, 0, 0, 0.9)";
            header.style.boxShadow = "none";
        }
    });

    // Logo bounce animation on hover
    const logo = document.querySelector(".logo img");
    logo.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
    });

    logo.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
