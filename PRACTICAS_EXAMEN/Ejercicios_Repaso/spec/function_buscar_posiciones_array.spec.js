describe('Testeo de la clase buscar posiciones en array', function() {

    var arrayN = [4, 0, 4, 7, 5, 8, 1, 0, 2, 3, 1];
    var arrayDevolver = [6, 10];
    it("Deberia devolver el [6,11]", function() {
        expect(buscaPosiciones(arrayN, 1)).toEqual(arrayDevolver);
    });


});