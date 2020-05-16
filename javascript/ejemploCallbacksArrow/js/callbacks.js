//funciones que se pasan como parmetros de otras funciones.

function saludar(pNombre) {
    console.log('Hola ' + pNombre);
}

saludar('Juan');

function getUser() {
    let nombre = 'Pepe';
    return nombre;
}

saludar(getUser());

//opcion 2

function calcular(pFn) {
    pFn(3, 4);
}

calcular(function (pNumero1, pNumero2) {
    console.log(pNumero1 + pNumero2);
})


//opcion 3

function calcularArrow(pFn) {
    console.log(pFn(7, 2));
}

calcularArrow((pNumero1, pNumero2) => pNumero1 - pNumero2);
