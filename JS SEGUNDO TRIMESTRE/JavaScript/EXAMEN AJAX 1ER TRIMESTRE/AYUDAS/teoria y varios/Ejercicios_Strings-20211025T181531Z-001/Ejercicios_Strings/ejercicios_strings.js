//1. Crea una variable que contenga tu nombre completo. Vuelca a consola el número de caracteres. 
let ej1_nombre="Fco. Javier Soldado Galvín";
let ej1_numeroCaracteres=ej1_nombre.length;
console.log(`Número caracteres nombre completo:${ej1_numeroCaracteres}`)


//2. Crear una variable que contenga tu nombre. Crea un bucle que vuelque a consola cada uno de los caracteres que contiene (un carácter por línea) usando el método charAt.
let ej2_nombre="Fco. Javier Soldado Galvín";
for (let i=0; i < ej2_nombre.length ; i++){
    console.log(ej2_nombre.charAt(i));
}

//3. Crear una variable que contenga tu nombre.  Convierte toda la cadena a mayúsculas y vuélcala por consola. Haz lo mismo pero convirtiéndola a minúsculas.
let ej3_nombre="Fco. Javier Soldado Galvín";
let ej3_nombre_mayusculas=ej3_nombre.toUpperCase();
console.log(`Nombre en mayúsculas:${ej3_nombre_mayusculas}`);
let ej3_nombre_minusculas=ej3_nombre.toLowerCase();
console.log(`Nombre en minúsculas:${ej3_nombre_minusculas}`);

//4. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Examina la longitud de la cadena. Usando el método indexOf busca la palabra ‘Mancha’ e indica en qué posición se encuentra. Usando de nuevo el método indexOf busca la palabra ‘Quijote’, indicando que valor ha devuelto el método. 
let ej4_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let ej4_posicion_mancha=ej4_cadena.indexOf("Mancha");
console.log(`Posición de Mancha: ${ej4_posicion_mancha}`);
let ej4_posicion_quijote=ej4_cadena.indexOf("Quijote");
console.log(`Posición de Quijote: ${ej4_posicion_quijote}`);

//5. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Usando el método substring debes extraer la palabra ‘lugar’.
let ej5_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let ej5_subcadena=ej5_cadena.substring(6,11);
console.log(`Subcadena:${ej5_subcadena}`);


//6. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Usando el método includes debes comprobar si la frase contiene la palabra ‘cuyo’. Busca también si contiene la palabra ‘lugar’ a partir de la posición 12. 
let ej6_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let ej6_contiene_cuyo=ej6_cadena.includes("cuyo");
console.log(`La cadena incluye la palabra cuyo:${ej6_contiene_cuyo?'Sí':'No'}`);
let ej6_posicion_lugar=ej6_cadena.indexOf('lugar',12);
console.log(`Posición de lugar a partir de la posición 12:${ej6_posicion_lugar}`);

//7. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Usando el método endsWith debes comprobar si la frase termina con la palabra ‘acordarme’. Comprueba también si termina con la palabra ‘hidalgo’.
let ej7_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let ej7_termina_con_acordarme=ej7_cadena.endsWith('acordarme');
console.log(`Cadena termina con acordarme:${ej7_termina_con_acordarme?'Sí':'No'}`);
let ej7_termina_con_hidalgo=ej7_cadena.endsWith('hidalgo');
console.log(`Cadena termina con hidalgo:${ej7_termina_con_hidalgo?'Sí':'No'}`);


//8. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Usando el método replace sustituye la palabra ‘Mancha’ por ‘Andalucía’.
let ej8_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
ej8_cadena_reemplazada=ej8_cadena.replace('Mancha','Andalucía');
console.log(`Cadena con palabra reemplazada:${ej8_cadena_reemplazada}`);

//9. Crea una variable que contenga “Cebollas;Patatas;Pimientos;Tomates”. Usando el método split y como separador el punto y coma debes crear un array que contenga [‘Cebollas’, ’Patatas’, ’Pimientos’, ‘Tomates’]
let ej9_cadena="Cebollas;Patatas;Pimientos;Tomates";
let ej9_array_eltos=ej9_cadena.split(";");
console.log(`Array con los eltos de la cadena:`);
console.log(ej9_array_eltos);

//10. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Usando el método startsWith debes comprobar si la frase comienza por ‘En’. Comprueba también si comienza por ‘lugar’.
let ej10_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let empieza_con_en=ej10_cadena.startsWith('En');
console.log(`Cadena empieza con En:${empieza_con_en?'Sí':'No'}`);
let empieza_con_lugar=ej10_cadena.startsWith('lugar');
console.log(`Cadena empieza con lugar:${empieza_con_lugar?'Sí':'No'}`);

//11. Crea una variable contenga “En un lugar de la Mancha de cuyo nombre no quiero acordarme”. Usando el método substr debes extraer la palabra ‘lugar’. Extrae también de la frase la palabra ‘lugar’ pero usando el método substring.
let ej11_cadena="En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let ej11_subcadena=ej5_cadena.substr(6,5);
console.log(`Subcadena:${ej11_subcadena}`);

//12. Crea la variable “   Javier Soldado   “. Usando el método trim debes obtener la palabra “Javier Soldado” (debes quitar todos espacios anteriores y posteriores).
let ej12_nombre="   Javier Soldado   ";
let ej12_nombre_sin_espacios=ej12_nombre.trim();
console.log(`Cadena sin espacios:*${ej12_nombre_sin_espacios}*`);