addEventListener('load', iniciar);

var conexion_comunidades;

function iniciar() {
    //---------------------------conexion comunidades---------------------------/
    conexion_comunidades = new XMLHttpRequest();
    conexion_comunidades.onreadystatechange = poblarComunidades; //funcion a la que llama cada vez que cambia el estado
    conexion_comunidades.open('GET', 'cargar_comunidades_autonomas.php', true);
    conexion_comunidades.send();
    document.getElementById('autonoma').addEventListener('change', cargarProvincias);

}

function cargarProvincias(selectorAutonoma) {
    //---------------------------conexion provincias---------------------------/
    conexion_provincias = new XMLHttpRequest();
    conexion_provincias.onreadystatechange = poblar_provincias; //funcion a la que llama cada vez que cambia el estado
    conexion_provincias.open('GET', 'cargar_provincias.php?cod=' + selectorAutonoma.target.value, true);
    conexion_provincias.send();
}

function poblarComunidades() {
    var resultados = document.getElementById("resultados"); //div para cargando o resultados
    if (conexion_comunidades.readyState == 4) { //cuando el estado sea cargado
        var datos = JSON.parse(conexion_comunidades.responseText); //crea un JSON del string que recibimos
        for (let i = 0; i < datos.length; i++) {
            // console.log(datos[i].nombre);
            document.getElementById('autonoma').insertAdjacentHTML('beforeend', '<option value="' + datos[i].id + '">' + datos[i].nombre + '</option>');
        }
        resultados.innerHTML = "";
    } else { //mientras no esta cargado
        resultados.innerHTML = "Cargando comunidades...";
    }
}

function poblar_provincias() {
    var resultados = document.getElementById("resultados");
    if (conexion_provincias.readyState == 4) {
        var xml = conexion_provincias.responseXML;
        var nombre = xml.getElementsByTagName('nombre');
        var id = xml.getElementsByTagName('id');
        for (let i = 0; i < nombre.length; i++) {
            document.getElementById('provincia').insertAdjacentHTML('beforeend', '<option value="' + id[i] + '">' + nombre[i] + '</option>');
        }
        resultados.innerHTML = '';
    } else {
        resultados.innerHTML = 'Cargando provincias...';
    }
}