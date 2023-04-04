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
// Fin de ingreso de datos
document.write("<h1>Muestro los datos ingresados<h1>"); // Muestro los datos
// Ahora los muestro a todos en H2
document.write("<h2> El Caracter ingresado es:   "+ caracterIngresado + " </h2>");
document.write("<h2> El String ingresado es:  "+ stringIngresado + " </h2>");
document.write("<h2> El Entero ingresado es:  "+ enteroIngresado + " </h2>");
document.write("<h2> El Núm. con Decimales ingresado es:  "+ puntoflotanteIngresado + " </h2>");
document.write("<h2> El Booleano ingresado es:  "+ booleanoIngresado + " </h2>");
document.write("<h3>Fin<h3>"); //  Fin



