let paciente = {
    nombre: 'Juan',
    apellido: 'Perez',
    diagnostico: 'Cefaleas',
    edad: 36,
    numeross: 'A34905'
};

// paciente["nombre"]
// paciente.nombre

let claves = Object.keys(paciente);
for (let clave of claves) {
    console.log(`${clave}: ${paciente[clave]}`);
}

for (let clave in paciente) {
    console.log(`${clave}: ${paciente[clave]}`);
}

// Funciones STRING

let texto = 'Hola Mundo';
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.indexOf('la'));
console.log(texto.split(' '));

// Funciones ARRAYs

let animales = ['perro', 'gato', 'tigre', 'leopardo', 'tortuga'];
let numeros = [3, 45, 12, 99, 43, 67, 89, 12];
let alumnos = [
    { nombre: 'Mario', apellidos: 'Girón', email: 'mario@neoland.es', nota: 9.4 },
    { nombre: 'Rocío', apellidos: 'García', email: 'rocio@neoland.es', nota: 7.3 },
    { nombre: 'Ramón', apellidos: 'González', email: 'ramon@neoland.es', nota: 6.5 },
    { nombre: 'Luisa', apellidos: 'Prada', email: 'luisa@neoland.es', nota: 2.4 }
];

// PUSH
// Agregar un elemento al final del array

animales.push('caballo', 'rana');
console.log(animales);

let nuevoAlumno = {
    nombre: 'María',
    apellidos: 'Martínez',
    email: 'maria@neoland.es',
    nota: 8.45
}
alumnos.push(nuevoAlumno);

alumnos.push({ nombre: 'Manuel', apellidos: 'Rico', email: 'manuel@neoland.es', nota: 3.4 });
console.log(alumnos);

// POP
// Elimina el último elemento del array

// Array<string>.pop(): string
let animalEliminado = animales.pop();
console.log(animales);
console.log(animalEliminado);

/*
Array<{ nombre: string; apellidos: string; email: string; nota: number; }>.pop(): {
    nombre: string;
    apellidos: string;
    email: string;
    nota: number;
}
*/
let alumnoEliminado = alumnos.pop();
console.log(alumnos);
console.log(alumnoEliminado);

// SHIFT
// Eliminar el primer elemento del array

// Array<string>.shift(): string
let animalEliminado2 = animales.shift();
console.log(animalEliminado2);
console.log(animales);

let alumnoEliminado2 = alumnos.shift();
console.log(alumnoEliminado2);
console.log(alumnos);

// UNSHIFT
// Agrega elementos en la parte inicial del array

// Array<string>.unshift(...items: string[]): number
animales.unshift('rata', 'colibrí');
console.log(animales);

alumnos.unshift({
    nombre: 'Hugo',
    apellidos: 'García',
    email: 'hugo@gmail.com',
    nota: 5.6
});
console.log(alumnos);

// indexOf
// Recupera el índice de un elemento dentro del array

const indice = animales.indexOf('leopardo');
console.log(indice);

const posNum12 = numeros.indexOf(12); // 2 (posición en la que se encuentra por primera vez el 12)
console.log(numeros);
console.log(posNum12);

const posNum12_v2 = numeros.indexOf(12, posNum12 + 1);
// 7 (posición en la que se encuentra el número 12 dentro del array empezando desde la posición del anterior 12 + 1)
console.log(posNum12_v2);

// CONCAT

const numPares = [4, 8, 32, 54, 68];

// const total = numeros.concat(numPares);
// const total = numeros.concat(numPares, [1, 2, 3]);
const total = (numeros.concat(numPares)).concat([3, 4, 5]);

console.log(total);

// SLICE

// Array<number>.slice(start?: number, end?: number): number[]
const numerosCopia = numeros.slice(3, 6);
console.log(numeros);
console.log(numerosCopia);

// REVERSE

const numerosReverse = numeros.reverse();
console.log(numerosReverse);

const frase = 'frase super secreta';
// frase es string 
const fraseArr = frase.split('');
// fraseArr es array
const fraseArrReverse = fraseArr.reverse();
// fraseArrReverse es un array
const fraseReverse = fraseArrReverse.join('');
console.log(fraseReverse);

const fraseReverse2 = frase.split('').reverse().join('');
console.log(fraseReverse2);
