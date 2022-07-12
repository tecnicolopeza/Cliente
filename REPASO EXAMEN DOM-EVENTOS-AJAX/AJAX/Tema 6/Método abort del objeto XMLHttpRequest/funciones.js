addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    for (f = 1; f <= 12; f++) {
        var ob = document.getElementById('enlace' + f);
        addEventListener('click', presionEnlace, false);
    }

    document.getElementById("terminarEspera").addEventListener('click', finEspera);
}

function presionEnlace(e) {
    e.preventDefault();
    var url = e.target.getAttribute('href');
    cargarHoroscopo(url);
}


var conexion1;
var tiempo;

function cargarHoroscopo(url) {
    if (url == '') {
        return;
    }
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open("GET", url, true);
    conexion1.send();
    tiempo = setTimeout("finDeEspera()", 3000);
}

function procesarEventos() {
    var detalles = document.getElementById("detalles");
    if (conexion1.readyState == 4) {
        clearTimeout(tiempo);
        detalles.innerHTML = conexion1.responseText;
    } else
    if (conexion1.readyState == 1) {
        detalles.innerHTML = 'Cargando...';
    }
}

function finDeEspera() {
    conexion1.abort();
    detalles.innerHTML = 'Intente nuevamente más tarde, el servidor esta sobrecargado.';
}

function finEspera() {
    if (url == '') {
        return;
    }
    var detalles = document.getElementById("detalles");
    clearTimeout(tiempo);
    detalles.innerHTML = 'Intente nuevamente más tarde, el servidor esta sobrecargado.';
}