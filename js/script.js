// document.addEventListener("DOMContentLoaded", function () {
   
//     const scrollToTopButton = document.getElementById("scrollToTop");

//     window.addEventListener("scroll", function () {

//         // Проверка, прокручена ли страница на 100vh
//         if (window.scrollY > 200) {
//             scrollToTopButton.classList.add("show");
//         } else {
//             scrollToTopButton.classList.remove("show");
//         }

//     });

//     scrollToTopButton.addEventListener("click", function () {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const orderForm = document.querySelector(".order-form");

    window.addEventListener("scroll", function () {
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

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        let errorMessage = "";
        let name = orderForm.querySelector("input[placeholder='Имя']").value.trim();
        let email = orderForm.querySelector("input[placeholder='Email']").value.trim();
        let phone = orderForm.querySelector("input[placeholder='Телефон']").value.trim();
        let product = orderForm.querySelectorAll("select")[0].value;
        let address = orderForm.querySelectorAll("select")[1].value;
        let comment = orderForm.querySelector("input[placeholder='Комментарий']").value.trim();

        if (name === "") {
            isValid = false;
            errorMessage += "Поле 'Имя' не заполнено.\n";
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email) || email === "") {
            isValid = false;
            errorMessage += "Некорректный email.\n";
        }

        let phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone) || phone.length < 10) {
            isValid = false;
            errorMessage += "Телефон должен содержать только цифры и быть не короче 10 символов.\n";
        }

        const modalButtonClass = isValid ? "success" : "error";

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
        document.body.appendChild(modal);

        if(isValid) {
            console.log({ name, email, phone, product, address, comment })
        }
        // Закрытие модального окна при нажатии на кнопку
        modal.querySelector(".modal-button").addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    });
});
