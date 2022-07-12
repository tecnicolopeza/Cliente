function bonoloto() {
    var numBolas = 6; 
    var minValor = 1; 
    var maxValor = 49;
    var sinDuplicidad = true; //true: se garantiza que no hay duplicidad y false: duplicidad no garantizada
    var combinacionGanadora = [];
    var numAlea;
    for (var i = 0; i < numBolas; i++) {
        do {
            numAlea = Math.floor(Math.random() * (maxValor - minValor + 1)) + minValor;
        } while (sinDuplicidad && combinacionGanadora.indexOf(numAlea) != -1);
        combinacionGanadora.push(numAlea);
    }
    return combinacionGanadora.sort((a, b) => a - b);
}

function compruebaDuplicidadArray (arr) {

    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));

}

function compruebaEltosArrayEnRango(array){
    if(array.some(elto => elto > 49) || array.some(elto => elto < 1)) return false;
    else return true;
}