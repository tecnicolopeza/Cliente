function filtrarPrimos(arrayN) {
    let arrayPrimos = arrayN.filter(numero => {
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }
        if (numero > 11) {
            return numero;
        }

    });
    return arrayPrimos;
}