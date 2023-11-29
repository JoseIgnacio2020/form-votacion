$(document).ready(function() {
    // Hacer una petición AJAX para obtener las opciones desde PHP
    $.ajax({
        url: 'obtenerRegiones.php',  // Archivo PHP que devuelve las opciones
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Limpiar el ComboBox
            $('#region').empty();
            $('#region').append(`<option value="0"> 
                Seleccione región 
                </option>`); 
            // Agregar las opciones obtenidas
            for (var i = 0; i < data.length; i++) {
                let    value = i + 1;
                let    text =data[i].nombre;
                $('#region').append(`<option value="${value}"> 
                ${text} 
                </option>`); 
            }
        },
        error: function(error) {
            console.log('Error en la petición AJAX: ', error);
        }
    });
});

