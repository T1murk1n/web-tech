// Функция для установки рейтинга
function setRating(container, rating) {
    const stars = container.querySelectorAll('.star');
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', value <= rating);
    });
}

// Установка рейтингов для всех товаров
document.addEventListener('DOMContentLoaded', async () => {
    const ratings = [
                { productId: 1, rating: 4 },
                { productId: 2, rating: 2 },
                { productId: 3, rating: 5 }
            ]
    ratings.forEach(({ productId, rating }) => {
        const productElement = document.querySelector(`.card[data-id="${productId}"]`);
        if (productElement) {
            setRating(productElement, rating);
        }
    });


    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.catalog__card');

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const filterValue = searchInput.value.toLowerCase();

            cards.forEach(card => {
                const title = card.querySelector('.card__title').textContent.toLowerCase();
                if (title.includes(filterValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
});

