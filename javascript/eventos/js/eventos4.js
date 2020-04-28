const inputTexto = document.getElementById('inputTexto');

// keypress, keydown, keyup
// inputTexto.addEventListener('keypress', (event) => {
document.addEventListener('keypress', (event) => {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 13:
            inputTexto.value = 'Has pulsado el enter';
            break;
        case 32:
            inputTexto.value = 'Has pulsado el espacio';
            break;
        default:
            inputTexto.value = 'Tecla no admitida';
    }
});

// event.target hace referencia al elemento sobre el cual hemos enganchado el evento