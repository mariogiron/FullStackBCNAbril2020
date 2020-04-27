/*
Modificar el texto de todos los párrafos contenidos dentro de la sección servicios.
Cambiar dicho texto por un nombre y un número correlativo.

<p>Pepe 1</p>
<p>Pepe 2</p>
<p>Pepe 3</p>
...
*/

const parrafos = document.querySelectorAll('#servicios p');

// Opción 1
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerText = `Texto que quiera ${i + 1}`;
}

// Opción 2
let cont = 0;
for (let parrafo of parrafos) {
    parrafo.innerText = `Otro texto ${cont++}`;
}

// Opción 3
let otroCont = 0;
parrafos.forEach(parrafo => {
    parrafo.innerText = `Último Texto ${otroCont++}`;
});