function averigua() {
    cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    posicion = formulario.dni.value % 23;
    letra = cadena.substring(posicion, posicion + 1);
    document.formulario.dni.value = formulario.dni.value + "  " + letra;
}

/** 
    Y para colocar el formulario:
    <form name="formulario"> 
        DNI:<br> 
        <input type="text" name="dni" maxlength="11" size="11"> 
        <input type="button" value="OK" language="JavaScript" onclick="averigua()"> 
    </form 
*/