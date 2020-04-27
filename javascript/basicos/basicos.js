console.log('Texto dentro de un fichero externo');

document.write('<p>Esto es un párrafo</p>');

// alert('¡Esto es una alerta!');
// prompt('Introduce tu nombre');

// Variables Numéricas
// Declaración variable
var numero;

// Inicialización de la variable
numero = 5;

var numero2 = 6;

// camelCase
var numeroEntero = 89;

console.log(numero);

// Modificamos su valor
numero = 13;
numero = 3.56;
numero = -34;

var suma = (numero + numeroEntero);

console.log('SUMA: ', suma);
console.log(numero);

// No debemos redeclarar variables!!
// var numero = 34;

// Tipo String (texto, cadena de caracteres)

var nombreCompleto = 'Mario Girón';
var direccion = 'C/ Gran Via';
var parrafo = '<p class="parrafo">Esto es un párrafo</p>';
console.log('nombreCompleto: ', nombreCompleto);

var info = nombreCompleto + '   ' + direccion;

console.log('INFO: ', info);

// typeof
console.log(typeof (info));
console.log(typeof (numero));

// Tipo Boolean (true / false)
var activo = false;
console.log(activo);

// Definición de variables

const PI = 3.14159;
const edad = 36;

let usuario = 'mariogiron';
usuario = 'mgiron';

// 1 - Siempre usamos const si no vamos a modificar el valor de la variable
// 2 - Utilizo let si quiero modificar su valor
// 3 - Como última opción usamos var

// OPERADORES

const num1 = 7; // number
const num2 = 7; // number
const num3 = '7'; // string

console.log(num1 + num2);
const resta = num1 - num2;
console.log(resta);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(8 % 2);

// console.log(5 > 10);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

console.log(num1 == num2); // No comprueba el tipo
console.log(num1 === num2);
console.log(num1 === num3); // Comprueba tipo y valor
console.log(num1 == num3);

console.log(num1 != num2);

// && AND y || OR

const bool1 = true;
const bool2 = false;

console.log(bool1 && bool2);
console.log(bool1 || bool2);

console.log((bool1 && true) || bool2);

