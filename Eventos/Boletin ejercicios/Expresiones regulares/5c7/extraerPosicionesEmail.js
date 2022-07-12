function extraerPosicionesEmails(cadena) {
    let vector = cadena.split(/\w+@([a-zA-Z_]+\.)+[a-zA-Z]{2,6}/);
    for (let x = 0; x < vector.length; x++) {
        console.log(vector[x]);
    }
}