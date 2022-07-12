function areaPiramide(lado, altura) {

    function redondearDecimales(numero, decimales) {

        return Math.round(numero * Math.pow(10, decimales)) / Math.pow(10, decimales);

    }


    var area = lado * (lado + (Math.sqrt(4 * Math.pow(altura, 2) + Math.pow(lado, 2))));
    area = redondearDecimales(area, 5);

    return area;
}