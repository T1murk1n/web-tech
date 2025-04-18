<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Полезные фрукты и овощи</title>
    <link rel="icon" href="./img/icon/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/catalog.css">
</head>
<body>
<?php
    // Включаем файл с подключением к базе данных
    require 'connection.php';
?>
<header>
    <div class="header__menu">
        <div class="header__container">
            <div class="menu">
                <a href="#" class="logo"></a>
                <ul class="menu__list">
                    <li class="menu__item-row"><a href="index.html" class="menu__link">Главная</a></li>
                    <li class="menu__item-row"><a href="index.html#about-section" class="menu__link">О нас</a></li>
                    <li class="menu__item-row"><a href="index.html#contact-section" class="menu__link">Связь с нами</a></li>
                    <li class="menu__item-row"><a href="form_page.php" class="menu__link">Форма отправки</a></li>
                    <li class="menu__item-row"><a href="catalog_page.php" class="menu__link">Каталог</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>
<button id="load-products-button"></button>
<section class="catalog-title__section">
    <div class="catalog-title__container">
        <h2 class="catalog-title">Каталог</h2>
        <input type="text" id="searchInput" placeholder="Поиск..." class="search-input">
    </div>
</section>

<section class="catalog-grid__section">
     <!-- Контейнер для всего каталога товаров -->
    <div class="catalog__container">
        <!-- Контейнер для сетки карточек товаров -->
        <div class="grid-container">
            <!-- Карточка товара -->


            
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

<script src="js/catalog.js"></script>
<script src="js/script.js"></script>
</body>
</html>