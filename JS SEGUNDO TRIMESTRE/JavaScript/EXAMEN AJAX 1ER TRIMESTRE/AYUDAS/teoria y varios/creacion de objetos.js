//Existen tres formas de crear objetos (usaremos la primera de ellas, notación literal de objeto):

//Notación literal de objeto:
var persona = {
        nombre: "Pedro",
        edad: 30,
        cumplirAños: function() {
            this.edad++
        }
    }
    //2. Mediante el uso de new:
var persona = new Object();
persona.nombre = "Vanesa";
persona.edad = 30;
persona.cumplirAños = function() { this.edad++; };

//3. Mediante función constructora:
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.cumplirAños = function() { this.edad++; };
}
var persona1 = new Persona("Pedro", 30);
persona1.cumplirAños();