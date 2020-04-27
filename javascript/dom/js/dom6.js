/**
 *
 * Crear una función que nos permita modificar el src de una imagen dependiendo de un número
 *
 */

function cambiaFoto(pNumero) {
    const img = document.querySelector('div img');
    img.src = `./images/imagen_${pNumero}.png`;
    // img.src = './images/imagen_' + pNumero + '.png';
}

let contador = 1;
setInterval(() => {
    cambiaFoto(contador++);
    if (contador > 3) {
        contador = 1;
    }
}, 2000);