<?php
$servername = "localhost";  
$username = "root";     
$password = "110602@Hc";    
$dbname = "mana_models";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM User WHERE username = '$username' AND pass = '$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    if ($row['role'] == 1) {
        header("Location: index.html");
        exit();
    } else {
        echo "Bạn không được cấp quyền truy cập.";
    }
} else {
    echo "Tên đăng nhập hoặc mật khẩu không chính xác.";
}

$conn->close();
?>
