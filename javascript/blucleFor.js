// FOR (INICIALIZACIÓN DEL ÍNDICE; CONDICIÓN DE FIN; MODIFICACIÓN DEL ÍNDICE)
// Elegiremos el bucle FOR cuando conocemos el número de iteraciones a realizar

// Recorremos los números de 1 al 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Recorremos los números de 100 a 1
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// Recorrer los números pares entre 0 y 100
// OPCIÓN 1
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        // El número par
        console.log(i);
    }
}

// OPCIÓN 2
for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
}

// Recorriendo ARRAYS
const numeros = [3, 56, 32, 89, 114, 345];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const nombres = ['Mario', 'Rosa', 'Manuel', 'Ramiro', 'Ana'];
for (let i = 0; i < nombres.length; i++) {
    const parrafo = '<p>' + (i + 1) + ' - ' + nombres[i] + '</p>';
    const parrafo2 = `<p>${i + 1} - ${nombres[i]}</p>`;
    document.write(parrafo);
}

// 1 - Mario
// 2 - Rosa...