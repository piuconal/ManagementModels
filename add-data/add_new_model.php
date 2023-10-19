<?php
// Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost";  // Thay thế bằng tên máy chủ của bạn
$username = "root";     // Thay thế bằng tên người dùng của bạn
$password = "110602@Hc";     // Thay thế bằng mật khẩu của bạn
$dbname = "mana_models";  // Thay thế bằng tên cơ sở dữ liệu của bạn

$conn = new mysqli($servername, $username, $password, $dbname);
// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Xử lý khi biểu mẫu được gửi đi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ biểu mẫu
    $model_id = $_POST['id'];
    $model_name = $_POST['name'];
    $path = $_POST['path'];
    $training_date = $_POST['date'];
    $acc = $_POST['acc'];
    $pre = $_POST['pre'];
    $rec = $_POST['rec'];
    $f1 = $_POST['f1score'];

    // Thực hiện truy vấn để chèn dữ liệu vào bảng Models
    $sql = "INSERT INTO Models (modelID, model_name, path, training_date, acc, pre, rec, f1) 
            VALUES ('$model_id','$model_name', '$path', '$training_date', $acc, $pre, $rec, $f1)";
    if ($conn->query($sql) === TRUE) {
        echo "Đã thêm MODEL mới";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }
}

// Đóng kết nối cơ sở dữ liệu
$conn->close();
?>