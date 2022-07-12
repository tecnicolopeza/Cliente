function devolver_dia(dia_semana) {
    var fecha = new Date();
    fecha.setDate(dia_semana);
    var dia = fecha.getDay();

    switch (dia) {
        case 1:
            dia = "lunes";
            break;
        case 2:
            dia = "martes";
            break;
        case 3:
            dia = "miercoles";
            break;
        case 4:
            dia = "jueves";
            break;
        case 5:
            dia = "viernes";
            break;
        case 6:
            dia = "sábado";
            break;
        case 7:
            dia = "domingo";
            break;
        default:
            break;
    }
    return dia;
}