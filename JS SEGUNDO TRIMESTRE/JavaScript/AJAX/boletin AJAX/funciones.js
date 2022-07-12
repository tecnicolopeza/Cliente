addEventListener("load", iniciar, false);

var conexionComunidad, conexionProvincia, espera;

function iniciar() {
    conexionComunidad = new XMLHttpRequest();
    conexionComunidad.onreadystatechange = poblarComunidades;
    conexionComunidad.open('GET', 'cargar_comunidades_autonomas.php', true);
    conexionComunidad.send();

    document.getElementById('com_autonoma').addEventListener('change', eventoComunidad, false);
    document.getElementById('provincias').addEventListener('change', datosProvincia, false);
    document.getElementById('cancelarPeticion').addEventListener('click', cancelaPeticion, false);
}

function poblarComunidades() {
    var comunidades = document.getElementById('com_autonoma');
    var resultado = document.getElementById('resultados');

    if (conexionComunidad.readyState == 4) {
        resultado.innerHTML = "";
        var datosJSON = JSON.parse(conexionComunidad.responseText);
        for (let i = 0; i < datosJSON.length; i++) {
            comunidades.insertAdjacentHTML('beforeend', '<option name="cod" value="' + datosJSON[i].id + '">' + datosJSON[i].nombre + '</option>');
        }
    } else {
        resultado.innerHTML = 'Cargando comunidades...';
    }
}

function eventoComunidad(ev) {
    conexionProvincia = new XMLHttpRequest();
    conexionProvincia.onreadystatechange = poblarProvincias;
    conexionProvincia.open('GET', 'cargar_provincias.php?cod=' + ev.target.value, true);
    conexionProvincia.send();

    espera = setTimeout("finEspera()", 3000); //tiempo de carga maximo

    limpiarProvincias();
}

function finEspera() {
    var resultado = document.getElementById('resultados');
    conexionProvincia.abort();
    resultado.innerHTML = "Servidor saturado pixa";
}

function poblarProvincias() {
    var provincias = document.getElementById('provincias');
    var resultado = document.getElementById('resultados');

    if (conexionProvincia.readyState == 4) {
        resultado.innerHTML = "";
        var xml = conexionProvincia.responseXML;
        var provincia = xml.getElementsByTagName('nombre');
        for (let i = 0; i < provincia.length; i++) {
            provincias.insertAdjacentHTML('beforeend', '<option name="cod" value="' + provincia[i].firstChild.nodeValue + '">' + provincia[i].firstChild.nodeValue + '</option>');
        }
        clearTimeout(espera);
    } else {
        resultado.innerHTML = 'Cargando provincias...';
    }
}

function datosProvincia(ev) {
    var resultado = document.getElementById('resultados');

    if (conexionProvincia.readyState == 4) {
        resultado.innerHTML = "";
        var xml = conexionProvincia.responseXML;
        var id = xml.getElementsByTagName('id');
        var nombre = xml.getElementsByTagName('nombre');
        for (let i = 0; i < id.length; i++) {
            if (ev.target.value == nombre[i].firstChild.nodeValue) { //ev apunta al select
                resultado.innerHTML = "id: " + id[i].firstChild.nodeValue + ", nombre: " + nombre[i].firstChild.nodeValue;
            }
        }
    } else {
        resultado.innerHTML = 'Cargando datos...';
    }
}

function cancelaPeticion() {
    var resultado = document.getElementById('resultados');
    conexionProvincia.abort();
    clearTimeout(espera);
    resultado.innerHTML = 'Ha cancelado la petición...';
}

function limpiarProvincias() {
    var provincias = document.getElementById('provincias');

    for (var i = provincias.options.length; i >= 0; i--) {
        provincias.remove(i);
    }

    provincias.insertAdjacentHTML('beforeend', '<option name="cod" value="0">Seleccionar</option>');

}