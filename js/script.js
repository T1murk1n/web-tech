window.addEventListener('scroll', function() {
    const menu = document.querySelector('.header__menu-main-screen');

    // Проверка, прокручена ли страница на 100vh
    if (window.scrollY > window.innerHeight * 0.6) {
        menu.classList.add('scrolled');  // Добавляем класс для изменения фона
    } else {
        menu.classList.remove('scrolled');  // Убираем класс, если прокрутка меньше 100vh
    }
});