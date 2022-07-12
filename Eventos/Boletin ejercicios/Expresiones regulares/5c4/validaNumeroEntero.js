function validaNumeroEntero(cadena) {
    let patron = /^(|\+|-){1}\d+$/;
    if (patron.test(cadena)) {
        return "El numero es correcto";
    } else {
        return "El numero no es correcto";
    }
}