addEventListener('load', iniciar);

function iniciar() {
    document.getElementById('latitud').addEventListener('change', validaLatitudGPS);
}

function validaLatitudGPS(ev) {
    let patron = /^([0-9]|[0-8][0-9]|[9][0])[º]\s([0-9]|[0-5][0-9]|[6][0])[']\s([0-9]|[0-5][0-9]|[6][0])['][']\s[NS]$/;
    if (patron.test(ev.target.value)) {
        ev.target.setCustomValidity('');
    } else {
        ev.target.setCustomValidity('Latitud no correcta');
    }
}