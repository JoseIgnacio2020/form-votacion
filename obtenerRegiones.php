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

// Consulta SQL para poder obtener nombre de las regiones
$sql = "SELECT nombre FROM regiones";
$result = $conn->query($sql);

// Obtener resultados y convertirlos a un array asociativo
$regiones = array();
while ($row = $result->fetch_assoc()) {
    $regiones[] = $row;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($regiones);

// Cerrar la conexión
$conn->close();
?>