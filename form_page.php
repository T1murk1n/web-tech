<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Полезные фрукты и овощи</title>
    <link rel="icon" href="./img/icon/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/form.css">
</head>
<body>

<header>
    <div class="header__menu">
        <div class="header__container">
            <div class="menu">
                <a href="#" class="logo"></a>
                <ul class="menu__list">
                    <li class="menu__item-row"><a href="index.html" class="menu__link">Главная</a></li>
                    <li class="menu__item-row"><a href="index.html#about-section" class="menu__link">О нас</a></li>
                    <li class="menu__item-row"><a href="index.html#contact-section" class="menu__link">Связь с нами</a></li>
                    <li class="menu__item-row"><a href="form_page.html" class="menu__link">Форма отправки</a></li>
                    <li class="menu__item-row"><a href="catalog_page.html" class="menu__link">Каталог</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

<section class="form-title__section">
    <div class="form-title__container">
        <h2 class="form-title">форма отправки</h2>
    </div>
</section>
<section class="form-section">
     <!-- Контейнер для формы -->
    <div class="form__container">
        <div class="form__row">
            <!-- Блок с текстом и заголовком формы -->
            <div class="form__text-block">
                <!-- Заголовок формы -->
                <h3 class="form__title">Оставьте заявку на свежие фрукты и овощи!</h3>
                 <!-- Форма для оформления заказа -->
                <form action="order.php" method="POST" class="order-form">
                    <div class="form-row">
                        <input type="text" name="name" placeholder="Имя" class="form-input" required>
                        <input type="email" name="email" placeholder="Email" class="form-input" required>
                    </div>
                    <div class="form-row">
                        <input type="tel" name="phone" placeholder="Телефон" class="form-input" required>
                        <!-- Выпадающий список для выбора продуктов -->
                        <select id="product-select" name="product" class="form-input">
                            <option value="">Выберите продукт</option>
                            <?php
                            require 'connection.php';
                            $stmt = $pdo->query("SELECT id, name FROM products");
                            $product_names = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            
                            foreach ($product_names as $product) {
                                echo "<option value='{$product['id']}'>{$product['name']}</option>";
                            }
                            ?>
                        </select>
                    </div>
                    <div class="form-row">
                        <!-- Выпадающий список для выбора адреса -->
                        <select id="address-select" name="address" class="form-input">
                            <option>Адрес</option>
                            <option value="Адрес 1">Адрес 1</option>
                            <option value="Адрес 2">Адрес 2</option>
                        </select>
                        <input type="text" name="comment" placeholder="Комментарий" class="form-input">
                    </div>
                    <!-- Кнопка для отправки формы (оформления заказа) -->
                    <button type="submit" class="btn-reset submit-btn">Оформить заказ</button>
                </form>
                
            </div>
            <div class="form__picture">
                <div class="frame"></div>
            </div>
        </div>
    </div>
</section>

<footer>
    <div class="footer_top">
        <div class="footer__row">
            <a href="https://yandex.ru" class="footer__workTogether-card footer-card">
                <span class="footer__workTogether-card__icon"></span>
                <h3 class="footer__workTogether-card__title">Хотите работать вместе?</h3>
                <div class="footer__workTogether-card__description">Потрясающе! Расскажите нам о себе!</div>
            </a>
            <a href="https:google.com" class="footer__write-card footer-card">
                <span class="footer__write-card__icon"></span>
                <h3 class="footer__write-card__title">Написать нам</h3>
                <div class="footer__write-card__description">Свяжитесь с нами</div>
            </a>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="footer__column">
            <div class="footer__main">
                <p class="footer-main__decription">
                    1 корп, 5 этаж, 505 каб, УлГУ<br><br>
                    89378723336 - info@yourmail.com
                </p>
                <div class="footer-main__icon-row">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
            <div class="footer__lower">
                <p>Copyright 2025 - All Rights Reserved - Designed by Tim</p>
            </div>
        </div>
    </div>
</footer>
<a id="scrollToTop" class="scroll-to-top"></a>

<script src="js/script.js" defer></script>
<script src="js/form.js" defer></script>
</body>
</html>