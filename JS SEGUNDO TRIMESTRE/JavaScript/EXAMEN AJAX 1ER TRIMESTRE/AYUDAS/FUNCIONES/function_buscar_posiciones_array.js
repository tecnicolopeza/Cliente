function buscaPosiciones(arrayNumeros, elemento) {

    var arrayPosiciones = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        arrayPosiciones = arrayNumeros.indexOf(elemento); //guarda las posiciones donde encuentra ese elemento
    }
    return arrayPosiciones;
}