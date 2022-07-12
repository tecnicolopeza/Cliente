function sacarPalabra(cadena, palabra) {
    let res;
    //primero sacamos donde se encuentra la palabra en la cadena (parseamos porque devuelve un String)
    let posicionInicio = parseInt(cadena.indexOf(palabra));

    //ahora necesitamos la longitud de la cadena para saber hasta donde cortar ()
    let posicionFin = parseInt(palabra.length) + posicionInicio;

    res = cadena.substring(posicionInicio, posicionFin);

    return res;
}