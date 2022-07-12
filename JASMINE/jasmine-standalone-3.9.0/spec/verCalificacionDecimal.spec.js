
describe('Testeo de la función verCalificacionDecimal', function () {

	// Método 1: Usando varias llamadas

	it('Debería devolver -1 VALOR INCORRECTO', function () {
		expect(verCalificacionDecimal(-1.0)).toEqual("VALOR INCORRECTO");
	});
	it('Debería devolver 0 INSUFICIENTE', function () {
		expect(verCalificacionDecimal(0.5)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 1.5 INSUFICIENTE', function () {
		expect(verCalificacionDecimal(1.5)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 2 INSUFICIENTE', function () {
		expect(verCalificacionDecimal(2.5)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 3 INSUFICIENTE', function () {
		expect(verCalificacionDecimal(3.5)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 4.9 INSUFICIENTE', function () {
		expect(verCalificacionDecimal(4.9)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 5.9 SUFICIENTE', function () {
		expect(verCalificacionDecimal(5.9)).toEqual("SUFICIENTE");
	});
	it('Debería devolver 6 BIEN', function () {
		expect(verCalificacionDecimal(6.5)).toEqual("BIEN");
	});
	it('Debería devolver 7 NOTABLE', function () {
		expect(verCalificacionDecimal(7.5)).toEqual("NOTABLE");
	});
	it('Debería devolver 8.9 NOTABLE', function () {
		expect(verCalificacionDecimal(8.9)).toEqual("NOTABLE");
	});
	it('Debería devolver 9 SOBRESALIENTE', function () {
		expect(verCalificacionDecimal(9.5)).toEqual("SOBRESALIENTE");
	});
	it('Debería devolver 10 SOBRESALIENTE', function () {
		expect(verCalificacionDecimal(10.0)).toEqual("SOBRESALIENTE");
	});



	/*
	// Método 2: Usando un array de valores de entrada y otro de salidas de la función esperadas
	let entradas=[400,1200,1904,1905];
	let salidasEsperadas=[true,true,true,false];

	function testeo(entrada,salidaEsperada){
		let salidaStr=salidaEsperada?"si":"no";
		it('debería devolver que  el año ' + entrada + " " + salidaStr + ' es bisiesto', function(){
			expect(verCalificacionDecimal(entrada)).toEqual(salidaEsperada);
	});
	}
	
	for(let i=0;i<entradas.length; i++){
		testeo(entradas[i],salidasEsperadas[i]);
	}
	*/


});

