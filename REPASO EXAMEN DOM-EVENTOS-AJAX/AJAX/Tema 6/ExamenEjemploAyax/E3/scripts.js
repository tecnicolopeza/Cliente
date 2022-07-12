addEventListener('load', iniciar);

function iniciar() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('zona1').insertAdjacentHTML("beforeend", "<p id=\"p" + (i) + "\">Párrafo " + (i) + "</p>");
        document.getElementById("p" + (i)).addEventListener('click', mostrar);
    }
    document.getElementById('subZona1').addEventListener('click', mover);
    document.getElementById('subZona2').addEventListener('click', mover);
}

function mostrar(parrafo) {
    console.log(parrafo.target.innerHTML);
    if (parrafo.target.hasAttribute('style')) {
        parrafo.target.removeAttribute('style', '');
    } else {
        parrafo.target.setAttribute('style', 'background-color: red;');
    }

}

function mover(e) {
    var numero = document.getElementById('numero').value;
    var parrafo = document.getElementById('p' + numero).cloneNode(false);
    document.getElementById('zona1').removeChild(document.getElementById('p' + numero));
    parrafo.innerHTML = "Párrafo " + numero;
    document.getElementById('zona2').insertAdjacentElement("beforeend", parrafo);
}