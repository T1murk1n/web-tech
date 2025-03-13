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
});

