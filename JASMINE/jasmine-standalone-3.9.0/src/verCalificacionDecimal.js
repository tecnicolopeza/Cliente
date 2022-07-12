function verCalificacionDecimal(nota) {
    var nota;
    
    if(nota<5 && nota>=0){
        nota="INSUFICIENTE";
    }else if(nota>=5 && nota<6){
        nota="SUFICIENTE";
    }else if(nota>=6 && nota<7){
        nota="BIEN";
    }else if(nota>=7 && nota<9){
        nota="NOTABLE";
    }else if(nota>=9 && nota<=10){
        nota="SOBRESALIENTE";
    }else{
        nota="VALOR INCORRECTO";
    }

    return nota;
  }