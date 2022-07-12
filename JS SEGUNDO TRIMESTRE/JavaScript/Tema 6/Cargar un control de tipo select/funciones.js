addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    var select1 = document.getElementById('carreras');
    select1.addEventListener('change', mostrarMaterias, false);
}

var conexion1;

function mostrarMaterias(e) {
    var codigo = document.getElementById('carreras').value;
    if (codigo != 0) {
        conexion1 = new XMLHttpRequest();
        conexion1.onreadystatechange = procesarEventos;
        conexion1.open('GET', 'pagina1.php?cod=' + codigo, true);
        conexion1.send();
    } else {
        var select2 = document.getElementById('materias');
        select2.options.length = 0;
    }
}

function procesarEventos() {
    if (conexion1.readyState == 4) {
        var d = document.getElementById('espera');
        d.innerHTML = '';
        var xml = conexion1.responseXML;
        var pals = xml.getElementsByTagName('materia');
        var select2 = document.getElementById('materias');
        select2.options.length = 0;
        for (f = 0; f < pals.length; f++) {
            var op = document.createElement('option');
            var texto = document.createTextNode(pals[f].firstChild.nodeValue);
            op.appendChild(texto);
            select2.appendChild(op);
        }
    } else {
        var d = document.getElementById('espera');
        d.innerHTML = '<img src="../cargando.gif">';
    }
}