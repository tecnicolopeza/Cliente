function validaDireccionIP (ip){
    let patron = /^(\d|[1-9]\d|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.(\d|[1-9]\d|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.(\d|[1-9]\d|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.(\d|[1-9]\d|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/gm;
    if (patron.test(ip)) {
        return true;
    } else {
        return false;
    }
}