// Установка рейтингов для всех товаров после полной загрузки документа
document.addEventListener('DOMContentLoaded', async () => {
    // Получаем элемент ввода поиска и все карточки каталога по их идентификаторам
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.catalog__card');

    // Добавляем обработчик события на нажатие клавиши в поле ввода
    searchInput.addEventListener('keypress', function(e) {
        // Проверяем, была ли нажата клавиша Enter
        if (e.key === 'Enter') {
            // Получаем значение из поля ввода и переводим его в нижний регистр для сравнения
            const filterValue = searchInput.value.toLowerCase();

            // Проходим по всем карточкам каталога
            cards.forEach(card => {
                // Получаем заголовок карточки и переводим его в нижний регистр
                const title = card.querySelector('.card__title').textContent.toLowerCase();
                // Проверяем, содержит ли заголовок карточки введенное значение
                if (title.includes(filterValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });



    // const loadProductsButton = document.querySelector("#load-products-button");

    // // Добавляем обработчик для кнопки загрузки товаров
    // loadProductsButton.addEventListener("click", function () {
    //     // Создаем новый запрос
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("GET", "ajax.php", true);
    //     xhr.setRequestHeader("Content-Type", "application/json");

    //     // Когда запрос завершен
    //     xhr.onload = function () {
    //         if (xhr.status === 200) {
    //             const data = JSON.parse(xhr.responseText);
    //             if (data.success) {
    //                 const productsContainer = document.querySelector(".grid-container");
    //                 productsContainer.innerHTML = ""; // Очищаем контейнер

    //                 // Добавляем товары в контейнер
    //                 data.products.forEach(product => {
    //                     let productCard = `
    //                         <a href="card.html" class="catalog__card card" data-id="${product.id}">
    //                             <img src="./${product.image}" class="card__img">
    //                             <h3 class="card__title">${product.name}</h3>
    //                             <p class="card__price">${product.price}₽</p>
    //                             <div class="card__rating">
    //                                 ${[...Array(5)].map((_, i) => `
    //                                     <span class="star ${i < product.rating ? 'filled' : ''}" data-value="${i + 1}">★</span>
    //                                 `).join('')}
    //                             </div>
    //                         </a>
    //                     `;
    //                     productsContainer.innerHTML += productCard;
    //                 });
    //             } else {
    //                 alert("Ошибка при загрузке товаров.");
    //             }
    //         } else {
    //             console.error("Ошибка загрузки данных: " + xhr.statusText);
    //         }
    //     };

    //     // Обработчик ошибки
    //     xhr.onerror = function () {
    //         console.error("Ошибка при выполнении запроса.");
    //     };

    //     // Отправляем запрос
    //     xhr.send();
    // });




        // Функция для загрузки товаров с сервера
        function loadProducts() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "ajax.php", true);
            xhr.setRequestHeader("Content-Type", "application/json");
    
            // Когда запрос завершен
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    if (data.success) {
                        const productsContainer = document.querySelector(".grid-container");
                        productsContainer.innerHTML = ""; // Очищаем контейнер
    
                        // Добавляем товары в контейнер
                        data.products.forEach(product => {
                            let productCard = `
                                <a href="card.html" class="catalog__card card" data-id="${product.id}">
                                    <img src="./${product.image}" class="card__img">
                                    <h3 class="card__title">${product.name}</h3>
                                    <p class="card__price">${product.price}₽</p>
                                    <div class="card__rating">
                                        ${[...Array(5)].map((_, i) => `
                                            <span class="star ${i < product.rating ? 'filled' : ''}" data-value="${i + 1}">★</span>
                                        `).join('')}
                                    </div>
                                </a>
                            `;
                            productsContainer.innerHTML += productCard;
                        });
                    } else {
                        alert("Ошибка при загрузке товаров.");
                    }
                } else {
                    console.error("Ошибка загрузки данных: " + xhr.statusText);
                }
            };
    
            // Обработчик ошибки
            xhr.onerror = function () {
                console.error("Ошибка при выполнении запроса.");
            };
    
            // Отправляем запрос
            xhr.send();
        }
    
        // Загружаем товары сразу при загрузке страницы
        loadProducts();
    
        // Загружаем товары каждую минуту (60 000 миллисекунд)
        setInterval(loadProducts, 60000);
});

