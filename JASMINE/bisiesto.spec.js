// bisiesto.spec.js
describe('Testeo de la función bisiesto', function() {

    // Método 1: Usando varias llamadas

    it('Debería devolver que año 400 si es bisiesto', function() {
        expect(esBisiesto(400)).toEqual(true);
    });
    it('Debería devolver que año 1200 si es bisiesto', function() {
        expect(esBisiesto(1200)).toEqual(true);
    });
    it('Debería devolver que año 1904 si es bisiesto', function() {
        expect(esBisiesto(1904)).toEqual(true);
    });
    it('Debería devolver que año 1905 no es bisiesto', function() {
        expect(esBisiesto(1905)).toEqual(false);
    });


    /*
	// Método 2: Usando un array de valores de entrada y otro de salidas de la función esperadas
	let entradas=[400,1200,1904,1905];
	let salidasEsperadas=[true,true,true,false];

	function testeo(entrada,salidaEsperada){
		let salidaStr=salidaEsperada?"si":"no";
		it('debería devolver que  el año ' + entrada + " " + salidaStr + ' es bisiesto', function(){
			expect(esBisiesto(entrada)).toEqual(salidaEsperada);
    });
	}
	
	for(let i=0;i<entradas.length; i++){
		testeo(entradas[i],salidasEsperadas[i]);
	}
    */


});