document.addEventListener("DOMContentLoaded", function () {
    
    // Получаем кнопку "Вверх" по её ID
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Добавляем обработчик события прокрутки окна
    window.addEventListener("scroll", function () {
        // Проверяем, прокручена ли страница более чем на 200 пикселей
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    // Добавляем обработчик события клика на кнопку "Вверх"
    scrollToTopButton.addEventListener("click", function () {
        // При клике на кнопку плавно прокручиваем страницу вверх   
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // Получаем элемент формы заказа по классу
    const orderForm = document.querySelector(".order-form");

    // Добавляем обработчик события на отправку формы
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        // Служебные переменные валидность тектса и текст ошибки
        let isValid = true;
        let errorMessage = "";

        // Получаем значения из полей формы и обрезаем лишние пробелы
        let name = orderForm.querySelector("input[placeholder='Имя']").value.trim();
        let email = orderForm.querySelector("input[placeholder='Email']").value.trim();
        let phone = orderForm.querySelector("input[placeholder='Телефон']").value.trim();
        let product = orderForm.querySelectorAll("select")[0].value;
        let address = orderForm.querySelectorAll("select")[1].value;
        let comment = orderForm.querySelector("input[placeholder='Комментарий']").value.trim();

        // Простейшая валидация
        if (name === "") {
            isValid = false;
            errorMessage += "Поле 'Имя' не заполнено.\n";
        }

        // Регулярное выражение для проверки корректности email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email) || email === "") {
            isValid = false;
            errorMessage += "Некорректный email.\n";
        }

        // Регулярное выражение для проверки корректности номера телефона
        let phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone) || phone.length < 10) {
            isValid = false;
            errorMessage += "Телефон должен содержать только цифры и быть не короче 10 символов.\n";
        }

        // Определяем класс кнопки модального окна в зависимости от валидности формы
        const modalButtonClass = isValid ? "success" : "error";

        // Создаем модальное окно
        let modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${isValid ? "Успех" : "Ошибка"}</h5>
                    </div>
                    <div class="modal-body">
                        <p>${isValid ? "Ваши данные успешно отправлены!" : errorMessage.replace(/\n/g, "<br>")}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="modal-button ${modalButtonClass}">${isValid ? "ОК" : "Исправить"}</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal); // Добавляем модальное окно в документ

        // Если форма валидна, выводим данные в консоль
        if(isValid) {
            console.log({ name, email, phone, product, address, comment })
        }
        // Обработчик события на закрытие модального окна при нажатии на кнопку
        modal.querySelector(".modal-button").addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    });
});
