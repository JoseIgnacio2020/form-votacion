function validaNomApe() {
    var nomape = document.getElementById("nomape").value;
    var divNomApe = document.getElementById("divNomApe");

    //Valida si el campo está vacío, de ser así se muestra mensaje por vista.
    if (nomape.trim() === "") {
        divNomApe.style.display = "block";
        return false;
    } else {
        divNomApe.style.display = "none";
    }
    return true;
}

function validaAlias() {
    var alias = document.getElementById("alias").value;
    var mensaje1 = document.getElementById("mensaje1");
    var mensaje2 = document.getElementById("mensaje2");
    var mensaje3 = document.getElementById("mensaje3");

    //Valida si el campo está vacío, de ser así se muestra mensaje de error por vista.
    if (alias.trim() === "") {
        mensaje1.style.display = "block";
        return false;
    } else {
        mensaje1.style.display = "none";
    }


    //Valida si el campo alias tiene menos de 6 caracteres, si es así muestra mensaje de error por vista.
    if (alias.trim().length < 6) {
        mensaje2.style.display = "block";
        return false;
    } else {
        mensaje2.style.display = "none";
    }

    // Verifica que el campo alias contenga solamente letras y números usando una expresión regular.
    var formatoValido = /^[a-zA-Z0-9]+$/.test(alias);

    if (!formatoValido) {
        mensaje3.style.display = "block";
        return false;
    } else {
        mensaje3.style.display = "none";
    }

    return true;
}

function validaRut() {
    var rut = document.getElementById("rut").value;
    var mensajeRut1 = document.getElementById("mensajeRut1");
    var mensajeRut2 = document.getElementById("mensajeRut2");

    rut = rut.trim();
    //Valida si el campo está vacío, de ser así se muestra mensaje de error por vista.
    if (rut === "") {
        mensajeRut1.style.display = "block";
        return false;
    } else {
        mensajeRut1.style.display = "none";
    }

    //Llamada a la función que valida el rut
    if (!Fn.validaRut(rut)) {
        mensajeRut2.style.display = "block";
        return false;
    } else {
        mensajeRut2.style.display = "none";
    }

}

//Función que valida que el RUT tenga el formato correcto.
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}

function validaEmail() {
    var email = document.getElementById('email').value;
    var mensajeEmail1 = document.getElementById("mensajeEmail1");
    var mensajeEmail2 = document.getElementById("mensajeEmail2");

    //Valida si el campo está vacío, de ser así se muestra mensaje de error por vista.
    if (email.trim() === "") {
        mensajeEmail1.style.display = "block";
        return false;
    } else {
        mensajeEmail1.style.display = "none";
    }

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica si el correo electrónico cumple con el formato esperado
    if (emailRegex.test(email)) {
        mensajeEmail2.style.display = "none";
    } else {
        mensajeEmail2.style.display = "block";
        return false;
    }
    return true;
}

function validaRegion() {
    var value = document.getElementById("region").value;

    if(value == 0) {
        mensajeRegion.style.display = "block";
            return false;
    } else {
        mensajeRegion.style.display = "none";
    } 
    return true; 
}

function validaComuna() {
    var value = document.getElementById("comuna").value;

    if(value == 0) {
        mensajeComuna.style.display = "block";
            return false;
    } else {
        mensajeComuna.style.display = "none";
    } 
    return true; 
}

function validaCandidato() {
    var value = document.getElementById("candidato").value;

    if(value == 0) {
        mensajeCandidato.style.display = "block";
            return false;
    } else {
        mensajeCandidato.style.display = "none";
    } 
    return true; 
}

function validaContactos() {
 // Obtener todos los checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var btnVotar = document.getElementById('btnVotar');
  
  // Contador para rastrear la cantidad de checkboxes seleccionados
  var checkboxesSeleccionados = 0;

  // Iterar sobre cada checkbox
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkboxesSeleccionados++;
    }
  });

  // Verificar si al menos dos checkboxes están seleccionados
  if(checkboxesSeleccionados  <= 1) {
        mensajeContactos.style.display = "block";
        btnVotar.disabled = true; // Habilita el botón de enviar voto
        return false;
 } else {
    mensajeContactos.style.display = "none";
    btnVotar.disabled = false; // Desactiva el botón de enviar voto
} 
    return true;
}

