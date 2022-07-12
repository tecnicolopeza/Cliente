describe('Testeo de la clase jarra', function() {
    var jarra1, jarra2;
    beforeEach(function() {
        jarra1 = new Jarra(10, 4);
        jarra2 = new Jarra(15, 8);
    });

    it("Debería devolver La segunda jarra es la que tiene más litros que la primera.", function() {
        expect(Jarra.comparar(jarra1, jarra2)).toEqual(1);
    });

    it("Debería devolver jarra1 cantidad (10) y jarra2 cantidad(2)", function() {
        jarra1.llenarDesde(jarra2);
        expect(jarra1._cantidad).toEqual(10) && expect(jarra2._cantidad).toEqual(2);
    });

    it("Debería devolver jarra2 cantidad == 0", function() {
        jarra2.vaciar();
        expect(jarra2._cantidad).toEqual(0);
    });

});