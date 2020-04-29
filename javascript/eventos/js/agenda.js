/**
 *
 * Crear el HTML y diseñar cómo sería un contacto
 * JS:
 * - Recuperar todos los elementos con los que voy a trabajar
 * - Asignar los diferentes eventos a los botones (Enviar, Reset)
 * - Crear las funciones para la creación de nuevos contactos, borrado...
 *
 */

const contactos = [];

// Elementos del formulario
const inputNombre = document.getElementById('inputNombre');
const inputDireccion = document.getElementById('inputDireccion');
const inputTelefono = document.getElementById('inputTelefono');
const selectTipo = document.getElementById('selectTipo');

// Botones
const btnEnviar = document.querySelector('.btn-info');
const btnReset = document.querySelector('.btn-danger');

const listaContactos = document.querySelector('.lista-contactos');
const numContactos = document.getElementById('numContactos');

function pintarContacto(pContacto) {
    // Cabecera
    const divHeader = document.createElement('div');
    divHeader.classList.add('card-header');
    divHeader.innerText = pContacto.nombre;

    // Body
    const divBody = document.createElement('div');
    divBody.classList.add('card-body');

    // Para generar los párrafos, como los 3 son iguales y solo cambia su valor
    // Defino un array con los 3 valores y genero tantos párrafos como elementos tenga ese array
    const datosParrafos = [pContacto.direccion, pContacto.telefono, pContacto.tipo];
    for (let dato of datosParrafos) {
        const p = document.createElement('p');
        p.classList.add('card-text');
        p.innerText = dato;
        divBody.appendChild(p);
    }

    const btnBorrar = document.createElement('button');
    btnBorrar.classList.add('btn', 'btn-danger', 'btn-sm');
    btnBorrar.innerText = 'Borrar';
    btnBorrar.addEventListener('click', (event) => {
        const card = event.target.parentNode.parentNode;
        listaContactos.removeChild(card);
    });
    divBody.appendChild(btnBorrar);

    // Bloque general
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'mt-2');

    divCard.appendChild(divHeader);
    divCard.appendChild(divBody);

    listaContactos.appendChild(divCard);
}

// Eventos
btnEnviar.addEventListener('click', () => {
    const contacto = {
        nombre: inputNombre.value,
        direccion: inputDireccion.value,
        telefono: inputTelefono.value,
        tipo: selectTipo.value
    }
    contactos.push(contacto);
    pintarContacto(contacto);
    numContactos.innerText = contactos.length;
});

btnReset.addEventListener('click', () => {
    inputNombre.value = "";
    inputDireccion.value = "";
    inputTelefono.value = "";
    selectTipo.value = "";
});