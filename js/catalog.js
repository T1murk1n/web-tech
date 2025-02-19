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
});