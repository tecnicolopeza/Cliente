function validaHora(hora){
    var patron = /^((0\d)|(1\d)|(2\d[0-3]))\:([0-5]\d|00)\:([0-5]\d|00)$/gm;
    if (patron.test(hora)) {
        return true;
    } else {
        return false;
    }
}

validaHora("12:00:00");