function validaDireccionIP(ip) {
    let patron = /^(\d|[1-9]\d|(1\d{2})|(2[0-4][0-9])|(25[0-5]))\.(\d|[1-9]\d|(1\d{2})|(2[0-4][0-9])|(25[0-5]))\.(\d|[1-9]\d|(1\d{2})|(2[0-4][0-9])|(25[0-5]))\.(\d|[1-9]\d|(1\d{2})|(2[0-4][0-9])|(25[0-5]))$/;

    if (patron.test(ip)) {
        return true;
    } else {
        return false;
    }
}