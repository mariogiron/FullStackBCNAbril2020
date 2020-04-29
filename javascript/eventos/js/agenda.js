/**
 *
 * Crear el HTML y diseñar cómo sería un contacto
 * JS:
 * - Recuperar todos los elementos con los que voy a trabajar
 * - Asignar los diferentes eventos a los botones (Enviar, Reset)
 * - Crear las funciones para la creación de nuevos contactos, borrado...
 *
 */

// Elementos del formulario
const inputNombre = document.getElementById('inputNombre');
const inputDireccion = document.getElementById('inputDireccion');
const inputTelefono = document.getElementById('inputTelefono');
const selectTipo = document.getElementById('selectTipo');

// Botones
const btnEnviar = document.querySelector('.btn-info');
const btnReset = document.querySelector('.btn-danger');

// Eventos
btnEnviar.addEventListener('click', () => {
    console.log('Pulsa Enviar!!');
    console.log(inputNombre.value);
});

btnReset.addEventListener('click', () => {
    console.log('Pulsa Reset!!');
});