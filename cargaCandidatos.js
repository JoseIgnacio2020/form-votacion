$(document).ready(function() {
    // Hacer una petición AJAX para obtener las opciones desde PHP
    $.ajax({
        url: 'obtenerCandidatos.php',  // Archivo PHP que devuelve las opciones
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Limpiar el ComboBox
            $('#candidato').empty();
            $('#candidato').append(`<option value="0"> 
                Seleccione candidato 
                </option>`); 

            // Agregar las opciones obtenidas
            for (var i = 0; i < data.length; i++) {
                let    value = i + 1;
                let    text =data[i].nombre;
                $('#candidato').append(`<option value="${value}"> 
                ${text} 
                </option>`); 
            }
        },
        error: function(error) {
            console.log('Error en la petición AJAX: ', error);
        }
    });
});

