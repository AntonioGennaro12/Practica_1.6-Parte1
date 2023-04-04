// Esta es la parte 2
// Defino todas las variables a utilizar 
let caracterIngresado      = "x";      // un caracter genérico  
let stringIngresado        = "x123*";  // un string cualquiera
let enteroIngresado        = 999999;   // un entero cualquiera  
let puntoflotanteIngresado = 999.99;   // un numero con decimales 
let booleanoIngresado      = false ;   // boolean "True" o "False"
// Pido todos los valores para c/u de las variables  
caracterIngresado = prompt("Escribe un Caracter"); // pido el char
stringIngresado = prompt("Escribe una Cadena de Caracteres"); // pido el String
enteroIngresado = prompt("Escribe un Número Entero"); // pido el Integer
puntoflotanteIngresado = prompt("Escribe un Número con Decimales"); // pido el float
booleanoIngresado = prompt(`Escribe un Boolean "True" o "False"`); // pido un boolean
// Ahora los muestro a todos en H2
document.write("<h1><h1>"); // defino tipo de letra e inserto linea
document.write("Muestro los datos ingresados");
document.write("<h2><h2>"); // defino tipo de letra
document.write("El Caracter ingresado es:   " + caracterIngresado );
document.write("<h2><h2>"); // defino tipo de letra
document.write("El String ingresado es:  " + stringIngresado );
document.write("<h2><h2>"); // defino tipo de letra
document.write("El Entero ingresado es:  " + enteroIngresado );
document.write("<h2><h2>"); // defino tipo de letra
document.write("El Núm. con Decimales ingresado es:  " + puntoflotanteIngresado );
document.write("<h2><h2>"); // defino tipo de letra
document.write("El Booleano ingresado es:  " + booleanoIngresado );
document.write("<h3><h3>"); // defino tipo de letra e inserto linea
document.write("Fin");


