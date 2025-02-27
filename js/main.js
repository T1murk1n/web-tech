document.addEventListener("DOMContentLoaded", function () {
   

    window.addEventListener("scroll", function () {
        const menu = document.querySelector('.header__menu-main-screen');

        // Проверка, прокручена ли страница на 100vh
        if (window.scrollY > window.innerHeight * 0.6) {
            menu.classList.add('scrolled');  // Добавляем класс для изменения фона
        } else {
            menu.classList.remove('scrolled');  // Убираем класс, если прокрутка меньше 100vh
        }

    });


    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        
        // Получаем значения из полей формы
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const message = form.querySelector('.form-textarea').value.trim();

        // Простейшая валидация
        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Здесь вы можете добавить логику отправки данных на сервер, например, через fetch или XMLHttpRequest.
        // Для демонстрации просто выведем данные в консоль.
        console.log('Данные формы:', { name, email, phone, message });
    });

});