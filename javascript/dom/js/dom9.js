const cuadrados = document.querySelectorAll('.cuadrado');

for (let cuadrado of cuadrados) {
    const colorFondo = cuadrado.dataset.color;
    const posicion = cuadrado.dataset.posicion;
    const radio = cuadrado.dataset.radio;

    cuadrado.style.marginLeft = posicion + 'px';
    if (radio) {
        cuadrado.style.borderRadius = radio + '%';
    }
    if (colorFondo) {
        cuadrado.style.backgroundColor = colorFondo;
    }
}
