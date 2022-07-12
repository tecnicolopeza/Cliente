//volumenCono (radio,altura) ⇒ Devuelve el volumen del cono
function volumenCono(radio, altura) {
    var volumen = (1 / 3) * Math.PI * Math.pow(radio, 2) * altura;
    return volumen;
}