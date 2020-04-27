/**
 *
 * Vamos a modificar los estilos dependiendo de si es par o no
 * Los pares: van a tener color de fondo negro, texto en blanco y un padding de 10px
 * Los impares: un padding de 20px;
 *
 */

const parrafos = document.getElementsByTagName('p');

// Modificamos los estilos de manera individual
for (let i = 0; i < parrafos.length; i++) {
    if (i % 2 === 0) {
        // Es PAR
        parrafos[i].style.color = 'white';
        parrafos[i].style.backgroundColor = 'black';
    }
    parrafos[i].style.padding = '20px 10px 15px 12px';
}

// Modificamos los estilos todos a la vez
for (let i = 0; i < parrafos.length; i++) {
    if (i % 2 === 0) {
        // getAttribute y setAttribute
        parrafos[i].setAttribute('style', 'background-color: red; color: blue;');
    }
    parrafos[i].style.padding = '20px';
}

console.log(parrafos[4].getAttribute('style'));