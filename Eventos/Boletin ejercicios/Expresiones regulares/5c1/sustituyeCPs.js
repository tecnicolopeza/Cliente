function sustituyeCPs(frase) {
    let patron = /\b\d{5}/;
    let remplazado = frase.replace(patron, 'C.P');
    return remplazado;
}