function validaRut() {
    var rut = document.getElementById("rut").value;
    rut = rut.trim();

    //Llamada a la función que valida el rut
    if (!Fn.validaRut(rut)) {
        return false;
    } else {
        return true;
    }

}

//Función que valida que el RUT tenga el formato correcto.
var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

function validaEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica si el correo electrónico cumple con el formato esperado
    return emailRegex.test(email);
}

function validaContactos() {
    // Obtener todos los checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var btnVotar = document.getElementById('btnVotar');

    // Contador para rastrear la cantidad de checkboxes seleccionados
    var checkboxesSeleccionados = 0;

    // Iterar sobre cada checkbox
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkboxesSeleccionados++;
        }
    });

    // Verificar si al menos dos checkboxes están seleccionados
    if (checkboxesSeleccionados < 2) {
        mensajeContactos.style.display = "block";
        btnVotar.disabled = true; 
    } else {
        mensajeContactos.style.display = "none";
        btnVotar.disabled = false;
    }
}

