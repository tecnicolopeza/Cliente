// bisiesto.spec.js
describe('Testeo de la función verCalificacion', function () {

	// Método 1: Usando varias llamadas

	it('Debería devolver -1 VALOR INCORRECTO', function () {
		expect(verCalificacion(-1)).toEqual("VALOR INCORRECTO");
	});
	it('Debería devolver 0 INSUFICIENTE', function () {
		expect(verCalificacion(0)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 1 INSUFICIENTE', function () {
		expect(verCalificacion(1)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 2 INSUFICIENTE', function () {
		expect(verCalificacion(2)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 3 INSUFICIENTE', function () {
		expect(verCalificacion(3)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 4 INSUFICIENTE', function () {
		expect(verCalificacion(4)).toEqual("INSUFICIENTE");
	});
	it('Debería devolver 5 SUFICIENTE', function () {
		expect(verCalificacion(5)).toEqual("SUFICIENTE");
	});
	it('Debería devolver 6 BIEN', function () {
		expect(verCalificacion(6)).toEqual("BIEN");
	});
	it('Debería devolver 7 NOTABLE', function () {
		expect(verCalificacion(7)).toEqual("NOTABLE");
	});
	it('Debería devolver 8 NOTABLE', function () {
		expect(verCalificacion(8)).toEqual("NOTABLE");
	});
	it('Debería devolver 9 SOBRESALIENTE', function () {
		expect(verCalificacion(9)).toEqual("SOBRESALIENTE");
	});
	it('Debería devolver 10 SOBRESALIENTE', function () {
		expect(verCalificacion(10)).toEqual("SOBRESALIENTE");
	});



	/*
	// Método 2: Usando un array de valores de entrada y otro de salidas de la función esperadas
	let entradas=[400,1200,1904,1905];
	let salidasEsperadas=[true,true,true,false];

	function testeo(entrada,salidaEsperada){
		let salidaStr=salidaEsperada?"si":"no";
		it('debería devolver que  el año ' + entrada + " " + salidaStr + ' es bisiesto', function(){
			expect(verCalificacion(entrada)).toEqual(salidaEsperada);
	});
	}
	
	for(let i=0;i<entradas.length; i++){
		testeo(entradas[i],salidasEsperadas[i]);
	}
	*/


});

