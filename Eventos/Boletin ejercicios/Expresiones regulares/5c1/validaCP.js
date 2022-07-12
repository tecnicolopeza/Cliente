function validaCP(cp) {
    let patron = /^\s?(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}\s?$/;
    if (patron.test(cp)) {
        return true;
    } else {
        return false;
    }
    //testeo realizado en regex101
}