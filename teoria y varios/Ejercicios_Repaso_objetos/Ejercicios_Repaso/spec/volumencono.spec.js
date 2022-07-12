// bisiesto.spec.js
describe('Testeo de la función volumenCono', function() {
	
		
	let entradas=[[3,7],[5,12],[8.5,19.2],[4.5,14.1]];
	//let entradas=[{radio:3,altura:7},{radio:5,altura:12},{radio:8.5,altura:19.2},{radio:4.5,altura:14.1}]
	let salidasEsperadas=[65.97,314.16,1452.67,299];

	function testeo(entrada,salidaEsperada){
        let radio=entrada[0];
		//let radio=entrada.radio;
        let altura=entrada[1];
		it(`Volumen de cono de radio ${radio} y altura ${altura} debería ser ${salidaEsperada} `, function(){
			expect(volumenCono(radio,altura)).toBeCloseTo(salidaEsperada,2);
    });
	}
	
	for(let i=0;i<entradas.length; i++){
		testeo(entradas[i],salidasEsperadas[i]);
	}
    


  }); 