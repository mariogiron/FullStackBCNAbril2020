// Declaración e inicialización de Arrays
const edades = [23, 56, 34, 21, 12];
const animales = ['perro', 'gato', 'nutria', 'cacatua', 'cocodrilo'];
const edadesVacio = [];
const nombres = new Array();
// ¡¡ Los arrays siempre hay que INICIALIZARLOS!!

// El índice de un  array SIEMPRE empieza por 0!!

console.log(edades.length);
console.log(edades[3]);

console.log(animales.length);
console.log(animales[2]);

console.log(animales[animales.length - 1]);

// Agregamos un elemento nuevo al array -> LIFO
animales.push('mono');
console.log(animales);
animales.pop();


// Objetos o Arrays Asociativos o JSON
const persona = {
    nombre: 'Mario',
    apellidos: 'Girón',
    edad: 36
};
console.log(persona.nombre);
persona.nombre = 'Rocío';
console.log(persona.nombre);
persona.direccion = 'C/ Valverde';
console.log(persona);