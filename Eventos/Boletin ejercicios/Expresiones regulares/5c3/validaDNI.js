function validaDNI(dni) {
    let patron = /(^\d{8}[-][trwagmyfpdxbnjzsqvhlcke]$|^\d{8}[trwagmyfpdxbnjzsqvhlcke]$)/gmi;
    if (patron.test(dni)) {
        return "DNI correcto";
    } else {
        return "DNI incorrecto";
    }
}