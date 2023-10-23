<?php
$servername = "localhost";  
$username = "root";     
$password = "110602@Hc";    
$dbname = "mana_models";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $model_id = $_POST['id'];
    $model_name = $_POST['name'];
    $path = $_POST['path'];
    $training_date = $_POST['date'];
    $acc = $_POST['acc'];
    $pre = $_POST['pre'];
    $rec = $_POST['rec'];
    $f1 = $_POST['f1score'];

    $sql = "INSERT INTO Models (modelID, model_name, path, training_date, acc, pre, rec, f1) 
            VALUES ('$model_id','$model_name', '$path', '$training_date', $acc, $pre, $rec, $f1)";
    
    if ($conn->query($sql) === TRUE) {
        echo "Đã thêm MODEL mới";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>