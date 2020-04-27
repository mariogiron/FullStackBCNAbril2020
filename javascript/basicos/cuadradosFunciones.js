// document.write('<div style="width: 100px; height: 100px; background-color: black; margin: 3px;"></div>');

function crearCuadrados(pCantidad, pColor = "black", pAncho = 100, pAlto = 100) {
    for (let i = 0; i < pCantidad; i++) {
        // document.write('<div style="width: ' + pAncho + 'px; height: ' + pAlto + 'px; background-color: ' + pColor + '; margin: 3px; display: inline-block;"></div>');
        document.write(`<div style="width: ${pAncho}px; height: ${pAlto}px; background-color: ${pColor}; margin: 3px; display: inline-block;"></div>`);
    }
}

// crearCuadrados(14);
// crearCuadrados(5, 'green');
// crearCuadrados(6, '#FF1245', 50, 75);
// crearCuadrados(10, 'blue', 34);
// crearCuadrados(4, 'yellow', 200, 200);

function crearCuadradosV2(pValues) {
    for (let i = 0; i < pValues.cantidad; i++) {
        document.write(`<div style="width: ${pValues.ancho}px; height: ${pValues.alto}px; background-color: ${pValues.color}; margin: 3px; display: inline-block;"></div>`);
    }
}

crearCuadradosV2({
    cantidad: 10,
    color: 'tomato',
    ancho: 200,
    alto: 250
});

function crearCuadradosV3({ cantidad = 5, color = 'black', ancho = 150, alto = 150 }) {
    for (let i = 0; i < cantidad; i++) {
        document.write(`<div style="width: ${ancho}px; height: ${alto}px; background-color: ${color}; margin: 3px; display: inline-block;"></div>`);
    }
}

crearCuadradosV3({
    cantidad: 23,
    color: 'blue',
    ancho: 200,
    alto: 175
});
crearCuadradosV3({
    color: 'yellow'
});
crearCuadradosV3({
    cantidad: 10,
    alto: 40
});
crearCuadradosV3({
    pCantidad: 10,
    pColor: 'green',
    pAlto: 100,
    pAncho: 100
})
