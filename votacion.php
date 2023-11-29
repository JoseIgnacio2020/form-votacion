<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "prueba_desis";

try {
    // Crear conexión
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // Establecer el modo de error PDO a excepción
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $conn->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );

    // Datos para la inserción 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {        
        // Recuperar datos del formulario
        $nombre = $_POST["nomape"];
        $alias = $_POST["alias"];
        $rut = $_POST["rut"];
        $email = $_POST["email"];
        $region = $_POST["region"];
        $comuna = $_POST["comuna"];
        $candidato = $_POST["candidato"];
        $como_se_entero = $_POST["como_se_entero"];

        foreach ($como_se_entero as $opcion) {
            switch ($opcion) {
                case "web": $web = true;
                    break;
                case "tv": $tv = true;
                    break;
                case "redes_sociales": $redes_sociales = true;
                    break;
                    case "amigo": $amigo = true;
                    break;
                default:
                    break;
            }
        }
    }

    // Verificar si el RUT ya existe en la base de datos
    $sql = "SELECT COUNT(*) AS total FROM voto WHERE rut = :rut";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':rut', $rut);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result['total'] > 0) {
        echo "Error: El RUT ya existe en la base de datos. No puede votar nuevamente.";
    } else {
            // SQL para la registrar los datos en la tabla votos.
            $sql = "INSERT INTO voto (nombre,alias,rut,email,id_region,id_comuna,id_candidato,web,tv,redes_sociales,amigo) VALUES 
            (:nombre, :alias, :rut, :email, :region, :comuna, :candidato, :web, :tv, :redes_sociales, :amigo)";

            // Preparar la consulta
            $stmt = $conn->prepare($sql);

            // Vincular parámetros
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':alias', $alias);
            $stmt->bindParam(':rut', $rut);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':region', $region);
            $stmt->bindParam(':comuna', $comuna);
            $stmt->bindParam(':candidato', $candidato);
            $stmt->bindParam(':web', $web);
            $stmt->bindParam(':tv', $tv);
            $stmt->bindParam(':redes_sociales', $redes_sociales);
            $stmt->bindParam(':amigo', $amigo);

            // Ejecutar la consulta
            $stmt->execute();

            echo "<h3>Voto registrado exitosamente.</h3>";
    }
} catch(PDOException $e) {
    echo "Error al insertar el voto, favor contactarse con soporte TI: " . $e->getMessage();
}

// Cerrar la conexión
$conn = null;
?>