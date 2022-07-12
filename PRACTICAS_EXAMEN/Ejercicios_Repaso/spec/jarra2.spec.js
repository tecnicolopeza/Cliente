// bisiesto.spec.js
describe('Testeo de la clase jarra', function() {
    var jarra1, jarra2;
    beforeEach(function() {
        jarra1 = new Jarra(10, 4);
        jarra2 = new Jarra(15, 8);
    });

    it('Debería devolver La segunda jarra es la que tiene más litros que la primera.', function() {
        expect(Jarra.comparar(jarra1, jarra2)).toEqual(jarra2);
    });

    it('Debería devolver que jarra1 contiene 10 litros y jarra2 2 litros.', function() {
        jarra1.llenarDesde(jarra2);
        expect(jarra1._cantidad).toEqual(10);
        expect(jarra2._cantidad).toEqual(2);
    });

    it('Devería devolver que la jarra2 tiene 0 litros.', function() {
        jarra2.vaciar();
        expect(jarra2._cantidad).toEqual(0);
    });
});