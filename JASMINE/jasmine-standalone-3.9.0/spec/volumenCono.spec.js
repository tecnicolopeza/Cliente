describe('Testeo de la función volumenCono', function() {

    // Método 1: Usando varias llamadas

    it('Debería devolver (65.97)', function() {
        expect(volumenCono(3, 7)).toBeCloseTo(65.97, 2);
    });

    it('Debería devolver (314.16)', function() {
        expect(volumenCono(5, 12)).toBeCloseTo(314.16, 2);
    });

    it('Debería devolver (1452.67)', function() {
        expect(volumenCono(8.5, 19.2)).toBeCloseTo(1452.67, 2);
    });

    it('Debería devolver (299.00)', function() {
        expect(volumenCono(4.5, 14.1)).toBeCloseTo(299.00, 2);
    });
});