function validaRut(rut) {
    console.log("validaEmail");
    rut = rut.replace(".", "").replace("-", "");
    var cuerpo = rut.slice(0, -1);
    var dv = rut.slice(-1).toUpperCase();

    // Cálculo del dígito verificador
    var suma = 0;
    var multiplo = 2;

    for (var i = cuerpo.length - 1; i >= 0; i--) {
        suma += multiplo * parseInt(cuerpo.charAt(i), 10);
        multiplo = (multiplo === 7) ? 2 : multiplo + 1;
    }

    var resultado = (11 - suma % 11).toString();

    // Validación del dígito verificador
    if (resultado === '10') resultado = 'K';
    if (resultado === '11') resultado = '0';

    return resultado === dv;
}

function validaEmail(email) {
// Expresión regular para validar el formato del correo electrónico
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Verifica si el correo electrónico cumple con el formato esperado
return emailRegex.test(email);
}


