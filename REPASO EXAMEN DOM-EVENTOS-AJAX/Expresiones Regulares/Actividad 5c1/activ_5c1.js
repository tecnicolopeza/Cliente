function validarCodPos(codPos) {
    var patron = /^\b\d{5}$/;
    if (patron.test(codPos)) {
        return true;
    } else {
        return false;
    }
}

function validaMovil(str) {
    // A rellenar por el alumno
    patron = /(\+34|\(\+34\))?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
    if (patron.test(str)) {
        return true;
    } else {
        return false;
    }
}

function extraeCPs(cods) {
    var patron = cods.match(/\d{5}/mg); //Lo convierte a array
    return patron;
}

function sustituyeCPs(array) {
    var patron = array.replace(/\d{5}/gm, 'C.P.');
    return patron;
}
// console.log(validarCodPos("41720"));
// console.log(extraeCPs("417244771941721"));
// console.log(sustituyeCPs("417244771941721"));