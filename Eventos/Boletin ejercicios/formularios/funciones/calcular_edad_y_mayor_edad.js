function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function mayorEdad(fecha) {
    // var edad = calcularEdad("XXXX/XX/XX"); formato
    var edad = calcularEdad(fecha);
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}