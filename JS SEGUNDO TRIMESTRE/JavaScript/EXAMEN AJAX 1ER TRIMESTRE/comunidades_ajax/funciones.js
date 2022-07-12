addEventListener("load", iniciar, false);

var conexionComunidad, conexionProvincia, espera;

function iniciar() {
    //toma los datos del php
    conexionComunidad = new XMLHttpRequest();
    conexionComunidad.onreadystatechange = poblarComunidades;
    conexionComunidad.open('GET', 'cargar_comunidades_autonomas.php', true);
    conexionComunidad.send();

    document.getElementById('comunidades').addEventListener('change', eventoComunidad, false);
    document.getElementById('provincias').addEventListener('change', datosProvincia, false);
    document.getElementById('cancelarPeticion').addEventListener('click', cancelaPeticion, false);
}

//pobla las comunidades con los datos del servidor
function poblarComunidades() {
    var comunidades = document.getElementById('comunidades');
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

//evento cuando eliges una comunidad 
function eventoComunidad(ev) {
    conexionProvincia = new XMLHttpRequest();
    conexionProvincia.onreadystatechange = poblarProvincias;
    conexionProvincia.open('GET', 'cargar_provincias.php?cod=' + ev.target.value, true);
    conexionProvincia.send();

    espera = setTimeout("finEspera()", 3000); //tiempo de carga maximo

    limpiarProvincias();
}

//poblar las provincias segun la comunidad elegida
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

//CUANDO TARDA MUCHO LA PETICION + DE 3 SEG
function finEspera() {
    var resultado = document.getElementById('resultados');
    conexionProvincia.abort();
    resultado.innerHTML = "Servidor saturado pixa";
}

//CANCELA LA PETICION DE PROVINCIAS
function cancelaPeticion() {
    var resultado = document.getElementById('resultados');
    conexionProvincia.abort(); //cancela la peticion
    clearTimeout(espera);
    resultado.innerHTML = 'Ha cancelado la petición...';
}

//BORRA LAS PROVINCIAS DESPUÉS DE CADA PETICION
function limpiarProvincias() {
    var provincias = document.getElementById('provincias');

    for (var i = provincias.options.length; i >= 0; i--) {
        provincias.remove(i);
    }

    provincias.insertAdjacentHTML('beforeend', '<option name="cod" value="0">Seleccionar</option>');

    // provincias.innerHTML('<option name="cod" value="0">Seleccionar</option>');
}