function validaNumeroDecimal(cadena) {
    // [\+\-]?\d+(,\d+)?
    let patron = /^(|\+|-)\d+(|,)\d+$/;
    if (patron.test(cadena)) {
        return "Numero correcto";
    } else {
        return "Numero incorrecto";
    }
}