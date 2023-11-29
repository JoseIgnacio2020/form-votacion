<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "prueba_desis";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para poder obtener nombre de los candidatos
$sql = "SELECT nombre FROM candidatos";
$result = $conn->query($sql);

// Obtener resultados y convertirlos a un array asociativo
$candidatos = array();
while ($row = $result->fetch_assoc()) {
    $candidatos[] = $row;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($candidatos);

// Cerrar la conexión
$conn->close();
?>