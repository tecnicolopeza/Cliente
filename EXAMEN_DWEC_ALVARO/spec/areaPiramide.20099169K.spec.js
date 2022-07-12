describe('Testeo de la función areaPiramide', function() {


    let entradas = [
        [13.1, 17.4],
        [13.4, 17.8],
        [13.7, 18.2]
    ];

    let salidasEsperadas = [658.72, 689.275, 720.521];

    function testeo(entrada, salidaEsperada) {
        let lado = entrada[0];
        let altura = entrada[1];
        it(`Area de piramide con lado ${lado} y altura ${altura} debería ser ${salidaEsperada} `, function() {
            expect(areaPiramide(lado, altura)).toBeCloseTo(salidaEsperada, 3);
        });
    }

    for (let i = 0; i < entradas.length; i++) {
        testeo(entradas[i], salidasEsperadas[i]);
    }


});