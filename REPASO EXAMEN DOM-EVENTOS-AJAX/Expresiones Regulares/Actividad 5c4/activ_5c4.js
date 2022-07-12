function validaNumeroEntero(numero) {
    var patron = /^[\+\-]?\d+/mg;
    if (patron.test(numero)) {
        return true;
    } else {
        return false;
    }
}