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
    $search = $_POST['search'];

    $sql = "SELECT * FROM Models WHERE model_name = '$search'";
    $result = $conn->query($sql);

    $models = array();
    if ($result !== false && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $models[] = $row;
        }
    }
    header('Content-Type: application/json');
    echo json_encode($models);
}

$conn->close();
?>