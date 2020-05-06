import Articulo from './articulo.js';
import Tarea from './tarea.js';

const articulo1 = new Articulo('Jabon de manos', 'Urgente', 1.20, 2);
const articulo2 = new Articulo('Leche', 'Diaria', 0.80, 10);
const articulo3 = new Articulo('Pan', 'Diaria', 0.35, 2);
const tarea = new Tarea('Ir a la compra', 'mensual');


var titulo = document.querySelector('#titulo');
titulo.innerText = tarea.mostrarTarea();

const listaCompra = new Array(articulo1, articulo2, articulo3);

var seccionArticulos = document.querySelector('#listacompra');

for (let articulo of listaCompra) {
    seccionArticulos.innerHTML += `<li>${articulo.titulo} : ${articulo.calcularPrecio()}</li>`
}

console.log(articulo1.mostrarTarea())
