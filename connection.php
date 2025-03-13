<?php
$host = 'mysite.local';
$dbname = 'web-tech_db';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Простой запрос для проверки подключения
    $stmt = $pdo->query("SELECT 1");

    // Запрос для выборки всех товаров из базы данных
    $stmt = $pdo->query("SELECT * FROM products");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC); // Получаем все товары как ассоциативный массив

    if (!$products) {
        die("Нет товаров для отображения." . $e->getMessage());
    }


} catch (PDOException $e) {
    die("Ошибка подключения: " . $e->getMessage());
}
?>