addEventListener('load', iniciar);

function iniciar() {
    // alert("Ejecutado evento onLoad!");

    //Añadir evento mediante addEventListener
    var movil = document.getElementById('inputMovil');
    var edad = document.getElementById('inputFechaNacimiento');
    var fecha = document.getElementById('inputFechaVuelta');

    movil.addEventListener('change', validaMovil);
    edad.addEventListener('change', mayorEdad);
    fecha.addEventListener('change', validaFecha);
    // Usamos evento onLoad para asegurarnos de que el DOM esté cargado
    // cuando se ejecute el código JavaScript
}


function validaMovil() {
    var puntero = document.getElementById('inputMovil').value;
    /*(\+34|0034|34)?[ -]*(8|9)[ -]*([0-9][ -]*){8} telefono fijo */
    patron = /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
    if (patron.test(puntero)) {
        document.getElementById('inputMovil').setCustomValidity('');
    } else {
        document.getElementById('inputMovil').setCustomValidity('numero incorrecto');
    }
}

function calcularEdad() {
    var puntero = document.getElementById('inputFechaNacimiento').value;
    var hoy = new Date();
    var cumpleanos = new Date(puntero);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function mayorEdad() {
    // var edad = calcularEdad("XXXX/XX/XX"); formato
    var edad = calcularEdad();
    if (edad >= 18) {
        document.getElementById('inputFechaNacimiento').setCustomValidity('');
    } else {
        document.getElementById('inputFechaNacimiento').setCustomValidity('No puede reservar un menor de edad');
    }
}


function validaFecha() {

    fecha1 = document.getElementById('inputFechaIda').value;
    fecha2 = document.getElementById('inputFechaVuelta').value;

    fecha1 = new Date(fecha1);
    fecha2 = new Date(fecha2);

    if ((fecha1.getTime() > fecha2.getTime())) {
        document.getElementById('inputFechaIda').setCustomValidity('No puede poner una fecha de ida posterior a la de vuelta');
    } else {
        document.getElementById('inputFechaIda').setCustomValidity('');
    }
}