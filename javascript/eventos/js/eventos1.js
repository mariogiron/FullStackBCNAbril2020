function cambiarColor(event) {
    console.log(event.target);
    const texto = event.target.innerText;
    console.log(texto);
    document.body.style.backgroundColor = texto;
}

function cambiarColorV2(pElem) {
    console.log(pElem);
    const texto = pElem.innerText;
    document.body.style.backgroundColor = texto;
}

function entrarBoton() {
    console.log('Entra en el botón');
}

function cambiarColorV3(pElem) {
    const color = pElem.dataset.color;
    document.body.style.backgroundColor = color;
}

// la variable event contiene información sobre el EVENTO
// la variable this es una referencia al elemento sobre el cual pulsamos
