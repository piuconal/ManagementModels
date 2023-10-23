<?php
$servername = "localhost";  
$username = "root";     
$password = "110602@Hc";    
$dbname = "mana_models";
$con = new mysqli($servername, $username, $password, $dbname);
if ($con->connect_error) {
    die("Kết nối thất bại: " . $con->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $model_id = $_POST['id_delete'];

    $sql = "DELETE FROM Models WHERE modelID = $model_id";
    
    if ($con->query($sql) === TRUE) {
        echo "Đã xóa thông tin";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $con->error;
    }
}

$con->close();
?>