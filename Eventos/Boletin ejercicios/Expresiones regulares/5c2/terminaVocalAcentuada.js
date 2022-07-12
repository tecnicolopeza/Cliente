function terminaVocalAcentuada(palabra) {
    let patron = /[áéíóú]$/i;
    if (patron.test(palabra)) {
        return "Acaba en vocal acentuada";
    } else {
        return "No acaba en vocal acentuada";
    }
}