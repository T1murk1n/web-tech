document.addEventListener("DOMContentLoaded", function () {
   
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {

        // Проверка, прокручена ли страница на 100vh
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }

    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});