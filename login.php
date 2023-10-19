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

// Lấy thông tin đăng nhập từ biểu mẫu
$username = $_POST['username'];
$password = $_POST['password'];

// Thực hiện truy vấn để kiểm tra đăng nhập
$sql = "SELECT * FROM User WHERE username = '$username' AND pass = '$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Đăng nhập thành công
    $row = $result->fetch_assoc();
    if ($row['role'] == 1) {
        // Người dùng có quyền truy cập
        header("Location: index.html");
        exit();
    } else {
        // Người dùng không có quyền truy cập
        echo "Bạn không được cấp quyền truy cập.";
    }
} else {
    // Đăng nhập thất bại
    echo "Tên đăng nhập hoặc mật khẩu không chính xác.";
}

// Đóng kết nối cơ sở dữ liệu
$conn->close();
?>
