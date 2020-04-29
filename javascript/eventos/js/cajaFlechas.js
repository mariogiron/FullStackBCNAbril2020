// Hacer una caja negra centrada en la pantalla y dos botones con una flecha para la
// izquierda y otra para la derecha.Al clicar en la de la izquierda debe movimentar la
// caja para la izquierda, y al clicar en la derecha debe movimentar la caja para la
// derecha.
// Hacer con que la caja se mueva con las flechas del teclado izquierda y derecha

const caja = document.getElementById('caja');
const btnIzquierda = document.getElementById('btnIzquierda');
const btnDerecha = document.getElementById('btnDerecha');

let left = 0;

// function moverIzquierda() {
//     left -= 10;
//     caja.style.marginLeft = `${left}px`;
// }

// function moverDerecha() {
//     left += 10;
//     caja.style.marginLeft = `${left}px`;
// }

// btnIzquierda.addEventListener('click', moverIzquierda);
// btnDerecha.addEventListener('click', moverDerecha);

function mover(event) {
    const direccion = event.target.dataset.direccion;
    // if (direccion === 'der') {
    //     left += 10;
    // } else {
    //     left -= 10;
    // }
    left = (direccion === 'der') ? (left + 10) : (left - 10);
    caja.style.marginLeft = `${left}px`;
}

btnIzquierda.addEventListener('click', mover);
btnDerecha.addEventListener('click', mover);

document.body.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37:
            event.target.dataset.direccion = 'izq';
            mover(event);
            break;
        case 39:
            event.target.dataset.direccion = 'der';
            mover(event);
            break;
        default:
            console.log('Tecla no reconocida');
    }
});