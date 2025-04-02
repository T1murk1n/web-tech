<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
require 'connection.php'; // Подключение к базе данных

// Обработка GET-запроса (получение товаров)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Запрос на выборку всех товаров
        $stmt = $pdo->query("SELECT * FROM products");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode(['success' => true, 'products' => $products]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Ошибка при получении данных: ' . $e->getMessage()]);
    }
}

// Обработка POST-запроса (сохранение заказа)
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $phone = $_POST['phone'];
//     $product = $_POST['product'];
//     $address = $_POST['address'];
//     $comment = $_POST['comment'] ?? '';

//     $query = "INSERT INTO orders (name, email, phone, product_id, address, comment) 
//               VALUES (:name, :email, :phone, :product, :address, :comment)";
//     $stmt = $pdo->prepare($query);

//     if ($stmt->execute([
//         ':name' => $name,
//         ':email' => $email,
//         ':phone' => $phone,
//         ':product' => $product,
//         ':address' => $address,
//         ':comment' => $comment
//     ])) {
//         echo json_encode(['success' => true, 'message' => 'Ваш заказ успешно оформлен.']);
//     } else {
//         echo json_encode(['success' => false, 'message' => 'Ошибка при сохранении заказа.']);
//     }
// }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['product']) || empty($_POST['address'])) {
        echo json_encode(['success' => false, 'message' => 'Не все поля заполнены!']);
        exit;
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO orders (name, email, phone, product_id, address, comment) 
                               VALUES (:name, :email, :phone, :product, :address, :comment)");
        $stmt->execute([
            ':name' => $_POST['name'],
            ':email' => $_POST['email'],
            ':phone' => $_POST['phone'],
            ':product' => $_POST['product'],
            ':address' => $_POST['address'],
            ':comment' => $_POST['comment'] ?? ''
        ]);
        echo json_encode(['success' => true, 'message' => 'Ваш заказ успешно оформлен.']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Ошибка: ' . $e->getMessage()]);
    }
    exit;
}
?>
