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
    $model_id = $_POST['id_edit'];
    $model_name = $_POST['name_edit'];
    $path = $_POST['path_edit'];
    $training_date = $_POST['date_edit'];
    $acc = $_POST['acc_edit'];
    $pre = $_POST['pre_edit'];
    $rec = $_POST['rec_edit'];
    $f1 = $_POST['f1score_edit'];

    $sql = "UPDATE Models SET model_name='$model_name', path='$path', training_date='$training_date', acc='$acc', pre='$pre', rec='$rec', f1='$f1' WHERE modelID=$model_id";
    
    if ($con->query($sql) === TRUE) {
        echo "Đã cập nhật thông tin";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $con->error;
    }
}

$con->close();
?>