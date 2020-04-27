// Definición de la función
// Qué es lo que hace
// Función sin parámetros
function saludar() {
    console.log('Hola Mundo!');
}

// Ejecución de la función
// Utilizo la función
saludar();

// Función con un parámetro
function saludarConNombre(pNombre) {
    console.log(`Hola ${pNombre}`);
}

saludarConNombre('Mario');
saludarConNombre('Rosa');

function doble(pNumero) {
    console.log(pNumero * 2);
}

doble(4);
doble(8);

// Función con más de un parámetro
function suma(pNum1, pNum2) {
    console.log(pNum1 + pNum2);
}

const x = 49;
const y = 24;

suma(4, 9);
suma(2, 7);
suma(x, y);
suma(325, x);

// Retorno de las funciones
function sumaRetorno(pNum1, pNum2) {
    return pNum1 + pNum2;
}

const resultado = sumaRetorno(3, 67);
console.log(resultado);
document.write(resultado);
console.log(sumaRetorno(resultado, 15))

console.log(sumaRetorno(2, 5));
document.write(sumaRetorno(4, 89));

function media(pNum1, pNum2) {
    const m = (pNum1 + pNum2) / 2;
    return m;
}

console.log(media(5, 22));

// Parámetros opcionales
function mediaOpcional(pNum1, pNum2 = 10) {
    const m = (pNum1 + pNum2) / 2;
    return m;
}

console.log(mediaOpcional(34, 65));
console.log(mediaOpcional(25));

// Función que reciba una serie de números (los que queramos) y calcule su media
function mediaCompleja() {
    const numArgs = arguments.length;
    let total = 0;
    if (numArgs > 0) {
        for (let i = 0; i < numArgs; i++) {
            console.log('ARGUMENTO: ', arguments[i]);
            // total = total + arguments[i];
            total += arguments[i];
        }
        return total / numArgs;
    } else {
        return 0;
    }
}

const res = mediaCompleja(3, 5, 7, 12, 45);
console.log(res);
console.log(mediaCompleja(9, 10));
console.log(mediaCompleja(8, 6, 2, 4, 14));