// Utilizamos el IF cuando queremos lanzar una serie de sentencias asociadas a una condición
// Utilizamos el op. ternario si queremos asignar un valor a una variable en función de una condición

const nota = prompt('Introduce tu nota:');

const notaNum = parseInt(nota);

// Problemas de ámbito
// Ámbito de bloque
// Si defino una variable dentro de un bloque, la variable solo está disponible dentro del mismo

let mensaje = '';
if (notaNum >= 5) {
    // const mensaje = 'Has aprobado'; DEFINICIÓN DENTRO DE BLOQUE -> MAL!!!
    mensaje = 'Has aprobado'; // Modifico la variable
} else {
    // const mensaje = 'Estás suspenso'; DEFINICIÓN DENTRO DE BLOQUE -> MAL!!!
    mensaje = 'Estás suspenso';
}

console.log(mensaje);

// OPERADOR TERNARIO
/*
    const VARIABLE = (CONDICIÓN) ? VALOR SI TRUE : VALOR SI FALSE;
*/
const mensaje2 = (notaNum >= 5) ? 'Has aprobado' : 'Estás suspenso';
console.log(mensaje2);

// TERNARIO DE FLIPAO

// "Estás suspenso" si has sacado menos de 5
// "Tu nota está entre 5 y 7" si has sacado entre 5 y 7
// "Has sacado más de 7" si has sacado más de 7

const mensaje3 = (notaNum >= 5) ? ((notaNum >= 7) ? 'Has sacado más de 7' : 'Tu nota está entre 5 y 7') : 'Estás suspenso';


// Sin TERNARIO
const activo = 'SI';
let activoBool = true;
if (activo === 'SI') {
    activoBool = true;
} else {
    activoBool = false;
}

// Con TERNARIO
const activoBool2 = (activo === 'SI') ? true : false;
console.log(activoBool2);

const activoBool3 = (activo === 'SI');

const suma = 5 + 4;