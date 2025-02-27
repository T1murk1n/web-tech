document.addEventListener("DOMContentLoaded", function () {
   
    // Добавляем обработчик события прокрутки на окно
    window.addEventListener("scroll", function () {
        // Находим элемент меню по классу .header__menu-main-screen
        const menu = document.querySelector('.header__menu-main-screen');

        // Проверяем, прокручена ли страница более чем на 60% высоты окна
        if (window.scrollY > window.innerHeight * 0.6) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }

    });

    // Находим форму по классу .contact-form
    const form = document.querySelector('.contact-form');
    
    // Добавляем обработчик события на отправку формы
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        
         // Получаем значения из полей формы и удаляем лишние пробелы
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const message = form.querySelector('.form-textarea').value.trim();

        // Простейшая валидация
        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Вывод данных в консоль
        console.log('Данные формы:', { name, email, phone, message });
    });

});