addEventListener('load', iniciar);

function iniciar() {
    var enviar = document.getElementById('btnform');
    enviar.addEventListener('click', comprobar);
    var checkedAlumno = document.getElementById('alumno');
    checkedAlumno.addEventListener('click', alumnoChecked);
    var checkedProfesor = document.getElementById('profesor');
    checkedProfesor.addEventListener('click', alumnoChecked);
    var checkedAlergia = document.getElementById('alergia');
    checkedAlergia.addEventListener('change', alergiaChecked);
}

function comprobar() {
    // COMPROBAR EMAIL
    var email = document.getElementById('email').value;
    var email2 = document.getElementById('email2').value;
    if (email != email2) {
        document.getElementById('email2').setCustomValidity('Email incorrecto');
    }

    function calculaEdad(fechaNacimiento) {
        let hoy = new Date();
        var annios = hoy.getYear() - fechaNacimiento.getYear();
        if (hoy.getMonth() < fechaNacimiento.getMonth()) return annios - 1;
        else if (hoy.getMonth() > fechaNacimiento.getMonth()) return annios;
        else {
            if (hoy.getDate() >= fechaNacimiento.getDate()) return annios;
            else return annios - 1;
        }
    }
    // COMPROBAR fecNacNAC
    let fecNacNacStr = document.getElementById('fecNac').value.trim();
    if (fecNacNacStr != "") {
        let fecNacNac = new Date(fecNacNacStr);
        let edad = calculaEdad(fecNacNac);
        if (edad >= 18) document.getElementById('fecNac').setCustomValidity("");
        else document.getElementById('fecNac').setCustomValidity("Debe ser mayor de edad");
    }
}

function alumnoChecked(ev) {

    var bebida = document.getElementById('bebida');
    var soloLeer = bebida.getElementsByTagName('option');
    for (let i = 0; i < soloLeer.length; i++) {
        if (ev.target.id == "alumno") {
            if (soloLeer[i].value == 'cerveza' || soloLeer[i].value == 'vino') {
                soloLeer[i].setAttribute('hidden', "");
            }
        } else {
            if (soloLeer[i].value == 'cerveza' || soloLeer[i].value == 'vino') {
                soloLeer[i].removeAttribute('hidden', "");
            }
        }
    }
}

function alergiaChecked(ev) {

    var alergias = document.getElementById('alergias');
    if (ev.target.checked) {
        alergias.setAttribute("required", "");
    } else {
        alergias.removeAttribute("required", "");
    }
}



// function comprobar(){
//     // COMPROBAR EMAIL
//     var email = document.getElementById('email').value;
//     var email2 = document.getElementById('email2').value;
//     if(email!==email2){
//         document.getElementById('email2').setCustomValidity('Email incorrecto');
//     }
//     // COMPROBAR fecNacNAC
//     let fecNacNacStr = document.getElementById('fecNac').value.trim();
//     if (fecNacNacStr != "") {
//     let fecNacNac = new Date(fecNacNacStr);
//     let edad = calculaEdad(fecNacNac);
//     if (edad >= 18) document.getElementById('fecNac').setCustomValidity("");
//     else document.getElementById('fecNac').setCustomValidity("Debe ser mayor de edad");
//     }
// }