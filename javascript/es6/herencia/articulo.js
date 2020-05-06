import Tarea from './tarea.js';

export default class Articulo extends Tarea {

    constructor(pTitulo, pPrioridad, pPrecio, pCantidad = 1) {
        super(pTitulo, pPrioridad);
        this.precio = pPrecio;
        this.cantidad = pCantidad
    }

    calcularPrecio() {
        return this.precio * this.cantidad;
    }

} 