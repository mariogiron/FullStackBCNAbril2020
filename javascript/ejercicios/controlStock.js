/*
    Necesito variable stock con el número de productos disponibles X
    - Función que me devuelva el número de productos disponibles X
    - Función que me permita incrementar el stock en una cantidad X
    - Función para sacar productos del stock
        - Comprobar si la cantidad a retirar es mayor que el stock
        - Mandar un mensaje si el stock se queda con menos de 5 productos
*/

let stock = 15;

function getStock() {
    return stock;
}

function addStock(pCantidad) {
    // stock = stock + pCantidad;
    stock += pCantidad;
}

function buy(pCantidad) {
    if (pCantidad > stock) {
        console.log('No hay productos suficientes.');
    } else {
        // stock = stock - pCantidad;
        stock -= pCantidad;
        checkStock();
    }
}

function buyPrompt() {
    const count = parseInt(prompt('¿Qué cantidad quieres comprar?'));
    buy(count);
}

function checkStock() {
    if (stock >= 0 && stock <= 5) {
        console.log('No queda suficiente producto. Se debería comprar más.');
        addStock(5);
    } else {
        console.log('Hay suficientes productos');
    }
}