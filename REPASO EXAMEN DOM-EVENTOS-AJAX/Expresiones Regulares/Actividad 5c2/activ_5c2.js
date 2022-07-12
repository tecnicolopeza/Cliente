function terminaVocalAcentuada (palabra){
    var val = /[áéíóú]$/img;
    console.log(palabra);
    if (val.test(palabra)) {
        return true;
    }else{
        return false;
    }
}

console.log(terminaVocalAcentuada("HolÁ"));
console.log(terminaVocalAcentuada("Holáa"));
console.log(terminaVocalAcentuada("HÓla"));