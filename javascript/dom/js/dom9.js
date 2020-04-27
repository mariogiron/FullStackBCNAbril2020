const cuadrados = document.querySelectorAll('.cuadrado');

for (let cuadrado of cuadrados) {
    const colorFondo = cuadrado.dataset.color;
    if (colorFondo) {
        cuadrado.style.backgroundColor = colorFondo;
    }
}