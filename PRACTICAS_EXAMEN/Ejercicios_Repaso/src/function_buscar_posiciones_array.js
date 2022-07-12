function buscaPosiciones(arrayNumeros, elemento) {
    var indiceBusqueda = 0;
    var pos;
    var arrayPosiciones = [];
    while ((pos = arrayNumeros.indexOf(elemento, indiceBusqueda)) != -1) {
        arrayPosiciones.push(pos); //lo mete al array
        indiceBusqueda = pos + 1;
    }
    return arrayPosiciones;
}