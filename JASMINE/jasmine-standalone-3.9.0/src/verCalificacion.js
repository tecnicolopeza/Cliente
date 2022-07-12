function verCalificacion(nota) {
       
    var nota;
    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: 
            nota = "INSUFICIENTE";
            break;
        case 5: 
            nota = "SUFICIENTE";
            break;
        case 6:
            nota = "BIEN";    
            break;
        case 7:
        case 8:
            nota = "NOTABLE";
            break;
        case 9:
        case 10:
            nota = "SOBRESALIENTE";
            break;
        default:
            nota = "VALOR INCORRECTO";
            break;
    }
    return nota;
  }