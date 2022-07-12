function validadDNI(dni) {
    dni = dni.trim();
    var letras = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e"];
    var val = /^\d{8}\-?[trwagmyfpdxbnjzsqvhlcke]$/i;
    var dniNum = dni.slice(0,8);
    if (val.test(dni)) {
        if (letras[dniNum % 23] == (dni.slice(dni.len - 1, dni.len))) {
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }

}

console.log(validadDNI("47575339T"));
console.log(validadDNI("47575339-H"));