
describe('Testeo de la función europea2talla', function () {

	// Método 1: Usando varias llamadas

	it('Debería devolver XS pequeña', function () {
		expect(europea2talla("XS")).toEqual("pequeña");
	});
	it('Debería devolver S pequeña', function () {
		expect(europea2talla("S")).toEqual("pequeña");
	});
	it('Debería devolver M mediana', function () {
		expect(europea2talla("M")).toEqual("mediana");
	});
	it('Debería devolver L grande', function () {
		expect(europea2talla("L")).toEqual("grande");
	});
	it('Debería devolver XL grande', function () {
		expect(europea2talla("XL")).toEqual("grande");
	});
	it('Debería devolver XXL grande', function () {
		expect(europea2talla("XXL")).toEqual("grande");
	});
	

	/*
	// Método 2: Usando un array de valores de entrada y otro de salidas de la función esperadas
	let entradas=[400,1200,1904,1905];
	let salidasEsperadas=[true,true,true,false];

	function testeo(entrada,salidaEsperada){
		let salidaStr=salidaEsperada?"si":"no";
		it('debería devolver que  el año ' + entrada + " " + salidaStr + ' es bisiesto', function(){
			expect(europea2talla(entrada)).toEqual(salidaEsperada);
	});
	}
	
	for(let i=0;i<entradas.length; i++){
		testeo(entradas[i],salidasEsperadas[i]);
	}
	*/


});

