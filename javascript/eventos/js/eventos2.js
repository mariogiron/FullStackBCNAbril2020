// Asignación dinámica de EVENTOS
const btnPulsa = document.getElementById('btnPulsa');
const selectPais = document.getElementById('pais');
const inputEmail = document.getElementById('inputEmail');

function pulsarBoton() {
    console.log('Botón Pulsado!!');
}
btnPulsa.addEventListener('click', pulsarBoton);

selectPais.addEventListener('change', function (event) {
    console.log('Cambia!!');
    console.log(selectPais.value);
    console.log(event.target.value);
});

inputEmail.addEventListener('input', (event) => {
    console.log(event.target.value);
});