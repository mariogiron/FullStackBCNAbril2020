const numCuadrados = parseInt(prompt('¿Cuántos elementos quieres dibujar?'));
const anchoNum = parseInt(prompt('¿Qué ancho quieres?'));
const altoNum = parseInt(prompt('¿Qué alto quieres?'));

const colorPrincipal = prompt('¿De qué color quieres los cuadrados?');
const colorSecundario = prompt('¿Cuál es el color secundario?')

// for (let i = 0; i < numCuadrados; i++) {
//     if (i % 2 === 0) {
//         const cuadrado = `<div style="width: ${anchoNum}px; height: ${altoNum}px; background-color: ${colorPrincipal}; margin: 3px;"></div>`;
//         document.write(cuadrado);
//     } else {
//         const cuadrado = `<div style="width: ${anchoNum}px; height: ${altoNum}px; background-color: ${colorSecundario}; margin: 3px;"></div>`;
//         document.write(cuadrado);
//     }

// }

for (let i = 0; i < numCuadrados; i++) {

    const colorSeleccionado = (i % 2 === 0) ? colorPrincipal : colorSecundario;

    const cuadrado = `<div style="width: ${anchoNum}px; height: ${altoNum}px; background-color: ${colorSeleccionado}; margin: 3px;"></div>`;
    document.write(cuadrado);
}