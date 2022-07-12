function comparaFechas(fecha1, fecha2) {

    fecha1 = new Date(fecha1);
    fecha2 = new Date(fecha2);

    if ((fecha1.getTime() > fecha2.getTime())) {
        console.log('Fecha1 mayor');
    } else {
        console.log('Fecha2 mayor');
    }
}

//mes/dia/año
// comparaFechas('01/04/2022', '06/03/2022');