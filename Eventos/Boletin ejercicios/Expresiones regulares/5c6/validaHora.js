function validaHora(cadena) {
    let patron = /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (patron.test(cadena)) {
        return "La hora es valida";
    } else {
        return "La hora es invalida";
    }
}