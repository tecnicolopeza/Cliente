addEventListener('load', inicializarEventos, false);

var conexion1;
var conexion2;
var tiempo;

function inicializarEventos() {
    //CONEXION CON EL SERVIDOR DESDE EL PHP
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = procesarComunidad;
    conexion1.open('GET', 'cargar_comunidades_autonomas.php', true);
    conexion1.send();

    var ob = document.getElementById('comunidad');
    ob.addEventListener('change', comunidadChange, false);

    var ob2 = document.getElementById('provinciaS');
    ob2.addEventListener('change', datosProvincia, false);

    var ob3 = document.getElementById('cancelar');
    ob3.addEventListener('click', termiarConexion, false);
}

function comunidadChange(e) {
    conexion2 = new XMLHttpRequest();
    conexion2.onreadystatechange = procesarProvincias;
    conexion2.open('GET', 'cargar_provincias.php?cod=' + e.target.value, true);
    console.log(e.target.value);
    document.getElementById("prog2").setAttribute('class', 'position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill');
    document.getElementById("prog3").setAttribute('class', 'position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill');
    document.getElementById("cancelar").setAttribute('class', 'visible btn btn-danger');
    conexion2.send();
    limpiarProvincias();
    tiempo = setTimeout("finDeEspera()", 3000);
}

function procesarComunidad() {
    var comunidades = document.getElementById("comunidad");
    document.getElementById("cancelar").setAttribute('class', 'invisible btn btn-danger');
    if (conexion1.readyState == 4) {
        document.getElementById("carga").setAttribute('class', 'invisible d-flex justify-content-center');
        document.getElementById("prog").setAttribute('style', 'width: 0%;');
        var datos = JSON.parse(conexion1.responseText);
        for (var f = 0; f < datos.length; f++) {
            comunidades.insertAdjacentHTML("beforeend", "<option name='cod'  value='" + datos[f].id + "'>" + datos[f].nombre + "</option>");
        }

    } else {
        document.getElementById("carga").setAttribute('class', 'visible d-flex justify-content-center');
    }
}

function procesarProvincias() {
    var provincias = document.getElementById("provinciaS");
    document.getElementById("res").setAttribute('class', 'invisible alert alert-danger');
    if (conexion2.readyState == 4) {
        document.getElementById("carga").setAttribute('class', 'invisible d-flex justify-content-center');
        var xml = conexion2.responseXML;
        var nombre = xml.getElementsByTagName('nombre');
        for (let i = 0; i < nombre.length; i++) {
            provincias.insertAdjacentHTML("beforeend", "<option name='cod'  value='" + nombre[i].firstChild.nodeValue + "'>" + nombre[i].firstChild.nodeValue + "</option>");
        }
        clearTimeout(tiempo);
    } else {
        document.getElementById("carga").setAttribute('class', 'visible d-flex justify-content-center');
    }
}

function datosProvincia(ev) {
    var respuesta = document.getElementById("respuesta");
    if (conexion2.readyState == 4) {
        document.getElementById("carga").setAttribute('class', 'invisible d-flex justify-content-center');
        document.getElementById("prog3").setAttribute('class', 'position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill');
        document.getElementById("prog").setAttribute('style', 'width: 100%;');
        document.getElementById("res").setAttribute('class', 'visible alert alert-secondary');
        document.getElementById("cancelar").setAttribute('class', 'invisible btn btn-danger');
        respuesta.innerHTML = "";
        var xml = conexion2.responseXML;
        var nombre = xml.getElementsByTagName('nombre');
        var id = xml.getElementsByTagName('id');
        for (let i = 0; i < nombre.length; i++) {
            if (nombre[i].firstChild.nodeValue == ev.target.value) {
                respuesta.innerHTML = "Id:" + id[i].firstChild.nodeValue + ",nombre:" + nombre[i].firstChild.nodeValue;
            }
        }
    } else {
        document.getElementById("carga").setAttribute('class', 'visible d-flex justify-content-center');
    }

}

function limpiarProvincias() {
    var provincias = document.getElementById("provinciaS");
    for (let i = provincias.options.length; i >= 0; i--) {
        provincias.remove(i);
    }
    provincias.insertAdjacentHTML("beforeend", '<option name="cod" value="0" selected>Seleccionar...</option>');
}

function finDeEspera() {
    var respuesta = document.getElementById("respuesta");
    conexion2.abort();
    document.getElementById("res").setAttribute('class', 'visible alert alert-danger');
    respuesta.innerHTML = 'Servidor saturado.';
}

function termiarConexion() {
    var respuesta = document.getElementById("respuesta");
    document.getElementById("cancelar").setAttribute('class', 'invisible btn btn-danger');
    conexion2.abort();
    clearTimeout(tiempo);
    document.getElementById("res").setAttribute('class', 'visible alert alert-danger');
    respuesta.innerHTML = 'Conexión terminada.';
}