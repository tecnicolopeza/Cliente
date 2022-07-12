function extraeCPs(frase) {
    // let patron = /^\s?(?:0[1-9]|[1-4]\d|5[0-2])\d{3}\s?$/; otra forma mas exacta
    let patron = /\b\d{5}/;
    let arrayCP = frase.match(patron);
    return arrayCP;
    //testeo realizado en regex101
}