function validaNumeroDecimal (numero){
    var patron = /[\+\-]?\d+(,\d+)?/mg;
    if (patron.test(numero)) {
        return true;
    }else{
        return false;
    }
}