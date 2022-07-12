
describe('Testeo de la función comprobarEsPar', function () {

	// Método 1: Usando varias llamadas

	it('Debería devolver 1 false', function () {
		expect(comprobarEsPar(1)).toEqual(false);
	});
	it('Debería devolver 2 true', function () {
		expect(comprobarEsPar(2)).toEqual(true);
	});
	it('Debería devolver 3 false', function () {
		expect(comprobarEsPar(3)).toEqual(false);
	});
	it('Debería devolver 4 true', function () {
		expect(comprobarEsPar(4)).toEqual(true);
	});
	it('Debería devolver 5 false', function () {
		expect(comprobarEsPar(5)).toEqual(false);
	});

});

