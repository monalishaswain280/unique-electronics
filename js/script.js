document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (e) {
        if (e.target.closest(".menu-toggler")) {
            const mainNavigation = document.querySelector(".main-navigation");
            mainNavigation.classList.toggle("open");
        }
    });
});
