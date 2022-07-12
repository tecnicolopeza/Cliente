// bisiesto.spec.js
describe('Testeo de la bonoloto', function() {
	

	const NUM_COMBINACIONES=100000; // Vamos a generar un gran número de bonolotos, para detectar posibles duplicidades o elementos fuera de rango
		
	// Comprobación de que no existan elementos duplicados
	it('No debería haber duplicidades en las bonolotos', function(){
		for (let i=0; i< NUM_COMBINACIONES; i++){
			let combinacion=bonoloto();
			expect(compruebaDuplicidadArray(combinacion)).toEqual(false);
		}
	});

	// Comprobación de que todas las bolas de las bonolotos estén en rango
	it('No debería haber bolas fuera del rango 1 a 49', function(){
		for (let i=0; i< NUM_COMBINACIONES; i++){
			let combinacion=bonoloto();
			expect(compruebaEltosArrayEnRango(combinacion)).toEqual(true);
		}
	});


    


  }); 