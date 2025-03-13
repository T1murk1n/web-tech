document.addEventListener("DOMContentLoaded", function () {
    // Получаем элемент формы заказа
    const orderForm = document.querySelector(".order-form");

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Останавливаем стандартную отправку

        let isValid = true;
        let errorMessage = "";

        // Получаем значения из полей формы
        let name = orderForm.querySelector("input[name='name']").value.trim();
        let email = orderForm.querySelector("input[name='email']").value.trim();
        let phone = orderForm.querySelector("input[name='phone']").value.trim();
        let product = orderForm.querySelector("select[name='product']").value;
        let address = orderForm.querySelector("select[name='address']").value;
        let comment = orderForm.querySelector("input[name='comment']").value.trim();

        // Валидация
        if (!name) {
            isValid = false;
            errorMessage += "Поле 'Имя' не заполнено.\n";
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "Некорректный email.\n";
        }

        let phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone) || phone.length < 10) {
            isValid = false;
            errorMessage += "Телефон должен содержать только цифры и быть не короче 10 символов.\n";
        }

        if(!product) {
            isValid = false;
            errorMessage += "Выберите хотя бы один товар.\n";
        }
        
        if(!address) {
            isValid = false;
            errorMessage += "Выберите адрес доставки.\n";
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


        if (isValid) {
            let formData = new FormData(orderForm);

            fetch("order.php", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => response.text())  // Сначала читаем текст ответа
            .then(text => {
                console.log("Ответ сервера (сырой):", text);
                return JSON.parse(text);  // Пробуем разобрать как JSON
            })
            .then(data => {
                console.log("Парсинг JSON успешен:", data);
            })
            .catch(error => {
                console.error("Ошибка парсинга JSON:", error);
            });
            
            let formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            console.log("Отправляем JSON:", JSON.stringify(formDataObj, null, 2));



        } else {
            // Если валидация не прошла, выводим ошибку
            console.log('no pull')
        }
        // Обработчик события на закрытие модального окна при нажатии на кнопку
        modal.querySelector(".modal-button").addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    });


});
