// SetTimeout
// Ejecutar ciertas sentencias de código pasado un tiempo

function mostrarMensaje() {
    console.log('Mensaje aparece después de 2 segundos');
}
setTimeout(mostrarMensaje, 2000);

setTimeout(function () {
    console.log('Mensaje aparece después de 3 segundos');
}, 3000);

// SetInterval
// Ejecutar una acción cada X tiempo

let cont = 0;
let interval = setInterval(function () {
    console.log('Mensaje desde el intervalo');
    cont++;
    if (cont >= 5) {
        clearInterval(interval);
    }
}, 1250);

// let segundos = 0;
// setInterval(function () {
//     segundos++;
//     document.write(segundos);
// }, 1000);

// Arrow Functions

// SIN
const saludar = function () {
    console.log('Hola Mundo');
}
saludar();

// CON
const saludarArrow = () => {
    console.log('Hola Mundo');
}

// SIN
const sumar = function (pNum1, pNum2) {
    return pNum1 + pNum2;
}

//CON
const sumarArrow = (pNum1, pNum2) => pNum1 + pNum2;
// Si la función arrow solo tiene una sentencia y esa sentencia es la return, se puede eliminar dicha palabra y las llaves que definen la función

// Si solo tiene un parámetro se pueden eliminar los paréntesis
const saludarNombre = pNombre => console.log(`Hola ${pNombre}`);

const doble = pNum => pNum * 2;

// SetTimeout con arrow function
setTimeout(() => console.log('Mensaje después de 5 segundos'), 5000);