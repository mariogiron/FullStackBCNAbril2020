let animales = ['perro', 'gato', 'tigre', 'leopardo', 'tortuga'];
let numeros = [3, 45, 12, 99, 42, 67, 89, 14];
let alumnos = [
    { nombre: 'Mario', apellidos: 'Girón', email: 'mario@neoland.es', nota: 9.4, activo: true, ciudad: 'Madrid' },
    { nombre: 'Rocío', apellidos: 'García', email: 'rocio@neoland.es', nota: 7.3, activo: true, ciudad: 'Barcelona' },
    { nombre: 'Ramón', apellidos: 'González', email: 'ramon@neoland.es', nota: 6.5, activo: false, ciudad: 'Barcelona' },
    { nombre: 'Luisa', apellidos: 'Prada', email: 'luisa@neoland.es', nota: 3.4, activo: true, ciudad: 'Madrid' }
];

// Obtener un nuevo array con los números pares

const pares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}
// console.log(pares);

// FILTER
// Obtenemos un nuevo array con los elementos del array antiguo que cumplan con una condición

// const paresFilter = numeros.filter(function (item) {
//     const esPar = (item % 2 === 0);
//     if (esPar === true) {
//         return true;
//     } else {
//         return false;
//     }
// });

const paresFilter = numeros.filter(item => item % 2 === 0);
console.log(paresFilter);

// Filtrar los alumnos aprobados
const aprobados = alumnos.filter(alumno => alumno.nota >= 5);
console.log(aprobados);

// Filtro de alumnos activos
const activos = alumnos.filter(alumno => alumno.activo);
console.log(activos);


// FIND

const animalLeopardo = animales.find(animal => animal === 'leopardo');
console.log(animalLeopardo);

// Buscar el primer alumno aprobado
const primerAprobado = alumnos.find(alumno => alumno.nota >= 5);
console.log(primerAprobado);

const primerSuspenso = alumnos.find(alumno => alumno.nota < 5);
console.log(primerSuspenso);

// Primera versión 
// 1 - Filtramos los alumnos por ciudad
// 2 - A partir del filtro anterior, filtramos los aprobados

// function filtrarAprobadosPorCiudad(pCiudad) {
//     const alumnosPorCiudad = alumnos.filter(alumno => alumno.ciudad === pCiudad);
//     const aprobados = alumnosPorCiudad.filter(alumno => alumno.nota >= 5);
//     return aprobados;
// }

// Segunda versión
// function filtrarAprobadosPorCiudad(pCiudad) {
//     return alumnos.filter(alumno => alumno.ciudad === pCiudad).filter(alumno => alumno.nota >= 5);
// }

// Tercera versión
function filtrarAprobadosPorCiudad(pCiudad) {
    return alumnos.filter(alumno => (alumno.ciudad.toLowerCase() === pCiudad.toLowerCase()) && (alumno.nota >= 5));
}

console.log(filtrarAprobadosPorCiudad('maDrId'));


// MAP
// Obtenemos un nuevo array con tantos elementos como tenga el array sobre el cual ejecutamos el método. Y a cada uno de estos elementos le podemos aplicar una fórmula

const dobles = numeros.map(numero => numero * 2);
console.log(dobles);

// Array con los nombres y apellidos de los alumnos
// let nombresApellidos = [];
// for (let i = 0; i < alumnos.length; i++) {
//     let nomAp = alumnos[i].nombre + ' ' + alumnos[i].apellidos;
//     nombresApellidos.push(nomAp);
// }

const concatNombreApellidos = (alumno) => {
    return `${alumno.nombre} ${alumno.apellidos}`;
}

function concatNombreApellidosV2(alumno) {
    return `${alumno.nombre} ${alumno.apellidos}`;
}

const nombresApellidos = alumnos.map(concatNombreApellidos);
console.log(nombresApellidos);

// Recuperar el nombre y los apellidos de los alumnos aprobados

const nombresApellidosAprobados = alumnos.filter(alumno => alumno.nota >= 5).map(concatNombreApellidos);
console.log(nombresApellidosAprobados);

// Recuperar el nombre y los apellidos de los aprobados de Madrid

const nomApAprobadosMadrid = filtrarAprobadosPorCiudad('madrid').map(concatNombreApellidos);
console.log(nomApAprobadosMadrid);


// EVERY
// Devuelve TRUE si todos los elementos de un array cumplen con una condición
const estanAprobados = alumnos.every(alumno => alumno.nota >= 5);
console.log(estanAprobados);

// SOME
// Devuelve TRUE si alguno de los elementos del array cumple con la condición expuesta
const algunoAprobado = alumnos.some(alumno => alumno.nota >= 5);
console.log(algunoAprobado);

// FOREACH
alumnos.forEach(alumno => console.log(alumno.nota));

// Mostrar por consola las notas de los alumnos aprobados de Barcelona

console.log();
filtrarAprobadosPorCiudad('barcelona')
    .forEach(alumno => console.log(alumno.nota));

// Mostrar por consola el nombre y los apellidos de los alumnos aprobados de Madrid
filtrarAprobadosPorCiudad('barcelona')
    .map(concatNombreApellidos)
    .forEach(nombreCompleto => console.log(nombreCompleto));