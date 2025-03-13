<?php
header('Content-Type: application/json');
require 'connection.php'; // Подключение к базе данных

// Получаем данные из формы
$address = $_POST['address'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$product = $_POST['product'];
$comment = $_POST['comment'] ?? '';



// Пример запроса на вставку данных в базу данных
$query = "INSERT INTO orders (name, email, phone, product_id, address, comment) 
          VALUES (:name, :email, :phone, :product, :address, :comment)";
$stmt = $pdo->prepare($query);

// Выполняем запрос
if ($stmt->execute([
    ':name' => $name,
    ':email' => $email,
    ':phone' => $phone,
    ':product' => $product,
    ':address' => $address,
    ':comment' => $comment
])) {
    echo json_encode(['success' => true, 'message' => 'Ваш заказ успешно оформлен.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Ошибка при сохранении заказа.']);
}
?>
