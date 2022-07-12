describe('Testeo de la función duplicidad_array', function() {

    array = [4, 0, 4, 7, 7, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1];
    array2 = [0, 1, 2, 3, 4, 5, 7, 8];
    it('Debería devolver [0,1,2,3,4,5,7,8]', function() {
        expect(arraySinDuplicidad(array)).toEqual(array2);
    });

});