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

//Se obtiene el id de la region que fue enviada con el método GET desde jQuery usando AJAX.
if  ($_SERVER['REQUEST_METHOD'] == "POST") {
    $idRegion = $nombre = $_POST["idRegion"];
}

// Consulta SQL para poder obtener nombre de las comunas
$sql = "SELECT comunas.nombre 
        FROM comunas INNER JOIN regiones
        WHERE regiones.id = comunas.id_region
        AND regiones.id = ".$idRegion. ";";
$result = $conn->query($sql);

// Obtener resultados y convertirlos a un array asociativo
$comunas = array();
while ($row = $result->fetch_assoc()) {
    $comunas[] = $row;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($comunas);

// Cerrar la conexión
$conn->close();
?>