// Функция для установки рейтинга
function setRating(container, rating) {
    // Находим все звезды в контейнере
    const stars = container.querySelectorAll('.star');
    // Проходим по каждой звезде и устанавливаем класс 'filled' в зависимости от рейтинга
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', value <= rating);
    });
}

// Установка рейтингов для всех товаров после полной загрузки документа
document.addEventListener('DOMContentLoaded', async () => {
    // Массив объектов с оценками для товаров
    const ratings = [
                { productId: 1, rating: 4 },
                { productId: 2, rating: 2 },
                { productId: 3, rating: 5 }
            ]
    // Проходим по массиву оценок и устанавливаем рейтинги для соответствующих товаров
    ratings.forEach(({ productId, rating }) => {
        // Находим элемент продукта по его идентификатору
        const productElement = document.querySelector(`.card[data-id="${productId}"]`);
        if (productElement) {
            // Устанавливаем рейтинг для найденного элемента
            setRating(productElement, rating);
        }
    });

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
});

