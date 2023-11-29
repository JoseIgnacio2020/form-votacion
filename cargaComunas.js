$(document).ready(function () {
    $("#region").change(function () {
        var idRegion = $(this).val();
        $.ajax({
            url: 'obtenerComunas.php',
            type: 'post',
            data: {idRegion:idRegion},
            dataType: 'json',
            success: function (data) {
                console.log("data:" + JSON.stringify(data));
                // Limpiar el ComboBox
                $('#comuna').empty();
                $('#comuna').append(`<option value="0"> 
                Seleccione comuna 
                </option>`); 
                // Agregar las opciones obtenidas
                for (var i = 0; i < data.length; i++) {
                    let value = i + 1;
                    let text = data[i].nombre;
                    $('#comuna').append(`<option value="${value}"> 
                    ${text} 
                    </option>`);
                }
            },
            error: function (error) {
                console.log('Error en la petición AJAX: ', error);
            }
        });
    });

});
