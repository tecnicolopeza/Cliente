addEventListener('load', iniciar);

function iniciar() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('zona1').insertAdjacentHTML("beforeend", "<p id=\"p" + (i) + "\">Párrafo " + (i) + "</p>");
        document.getElementById("p" + (i)).addEventListener('click', mostrar);
    }
}

function mostrar(parrafo) {
    alert(parrafo.target.value);
}