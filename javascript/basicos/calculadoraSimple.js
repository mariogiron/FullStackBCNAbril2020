// Vamos a pedir al usuario los operandos
// Vamos a pedir la operación
// Mostraremos por consola el resultado

// Que solo podamos introducir números como operandos

let operando1;
let operando2;
let operacion;
let resultado;

do {
    do {
        // Se recupera el valor del operando1 a travé del prompt y se transforma en un número
        operando1 = parseInt(prompt('Introduce el operando 1'));
        operando2 = parseInt(prompt('Introduce el operando 2'));
    } while (isNaN(operando1) || isNaN(operando2));

    // console.log('OPERANDO1: ', isNaN(operando1));
    // console.log('OPERANDO2: ', isNaN(operando2));

    operacion = prompt('Introduce la operación (suma, resta, mult, div). Escribe "exit" para salir');

    switch (operacion) {
        case 'suma':
            resultado = operando1 + operando2;
            break;
        case 'resta':
            resultado = operando1 - operando2;
            break;
        case 'mult':
            resultado = operando1 * operando2;
            break;
        case 'div':
            resultado = operando1 / operando2;
            break;
    }

    console.log(`El resultado es ${resultado}`);
} while (operacion !== 'exit');