addEventListener('load', iniciar);

function iniciar() {
    document.getElementById('nacimiento').addEventListener('change', mayorDeEdad);
    document.getElementById('email2').addEventListener('change', conEmail);
    document.getElementById('a').addEventListener('click', bebida);
    document.getElementById('p').addEventListener('click', bebida);
    document.getElementById('alergiaChec').addEventListener('change', alergias);
}

function conEmail() {
    var email1 = document.getElementById('email1').value;
    var email2 = document.getElementById('email2').value;
    if (email1 != email2) {
        document.getElementById('email2').setCustomValidity('Email incorrecto');
    }
}

function mayorDeEdad(ev) {
    var hoy = new Date();
    var fecha = ev.target.value;
    var valores = fecha.split("-");
    var edad = hoy.getFullYear() - valores[0];
    var m = hoy.getMonth() - valores[1];
    if (m < 0 || (m === 0 && hoy.getDate() < valores[2])) {
        edad--;
    }

    if (edad >= 18) {
        document.getElementById('nacimiento').setCustomValidity("");
    } else {
        document.getElementById('nacimiento').setCustomValidity("No eres mayor de edad");
    }
}

function bebida(ev) {
    var bebidas = document.getElementById('bebidas');
    if (ev.target.id == "a") {
        bebidas.getElementsByTagName('option')[2].setAttribute('hidden','');
        bebidas.getElementsByTagName('option')[3].setAttribute('hidden','');
    }else{
        bebidas.getElementsByTagName('option')[2].removeAttribute('hidden','');
        bebidas.getElementsByTagName('option')[3].removeAttribute('hidden','');
    }
}

function alergias(ev) {
    var textarea = document.getElementById('alergiasText');
    console.log();
    if (ev.target.checked) {
        textarea.setAttribute('required','');
    }else{
        textarea.removeAttribute('required','');
    }
}