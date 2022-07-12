describe("Testeo clase Jarra", function() {
  var jarra1,jarra2;
  
  
  beforeEach(function() { // Se ejecuta una vez antes de llamar a cada especificación it
    jarra1 = new Jarra(10,4); //Creamos jarra de 10l de capacidad y llena con 4l
    jarra2 = new Jarra(15,8); //Creamos jarra de 15l de capacidad y llena con 8l
  });

  it("Debería devolver que jarra2 contiene más litros que jarra1", function() {
    var jarraMasListros=Jarra.comparar(jarra1,jarra2);
    expect(jarraMasListros).toEqual(jarra2);
  });

  it("Tras llenar jarra1 de jarra2 la primera debería tener 10l y la segunda 2l", function() {
    jarra1.llenarDesde(jarra2);
    expect(jarra1.cantidad).toEqual(10);
    expect(jarra2.cantidad).toEqual(2);
  });


  it("jarra2 debería quedar vacía tras llamar al método vaciar()", function() {
    jarra2.vaciar();
    expect(jarra2.cantidad).toEqual(0);
  });

  it("jarra1 debería debería devolver una excepción si en cantidad cargamos un valor negativo", function() {
    expect(function(){jarra1.cantidad=-5}).toThrowError("La cantidad debe ser un número positivo");
  });

 
  it("jarra1 debería tener contener una cantidad no superior a la capacidad", function(){
    jarra1.cantidad= 2 * jarra1.capacidad; //* jarra1.capacidad; // Intentamos cargar más litros de los que caben
    expect(jarra1.cantidad).toEqual(jarra1.capacidad);
  });



});
