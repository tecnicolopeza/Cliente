//Medir tiempo de ejecución de un trozo de código

//Date.now() devuelve el número de milisegundos transcurridos desde el 1/1/1970

//Nos puede servir para medir tiempo de ejecución de un trozo de código leyendo 
//el valor antes y después de la ejecución de dicho código y haciendo la resta. 
//Así obtendremos el número de milisegundos que han transcurrido.

var t1 = Date.now(); // Obtenemos tiempo antes de la ejecución del código

// Invocamos la función o trozo de código 

var t2 = Date.now(); //Volvemos a obtener tiempo después de la ejecución del código

var tiempoTranscurridoMsg = t2 - t1; // Nos dará el valor transcurrido en mSg