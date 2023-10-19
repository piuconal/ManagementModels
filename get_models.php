<?php
// Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost";  
$username = "root";     
$password = "110602@Hc";    
$dbname = "mana_models";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Truy vấn để lấy dữ liệu từ bảng Models
$sql = "SELECT * FROM Models";
$result = $conn->query($sql);

$models = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $models[] = $row;
    }
}

// Trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($models);

// Đóng kết nối cơ sở dữ liệu
$conn->close();
?>
