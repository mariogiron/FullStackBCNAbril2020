export default class Tarea {
    constructor(pTitulo, pPrioridad) {
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
    }

    modificarPrioridad(pPrioridad) {
        this.prioridad = pPrioridad;
    }

    borrarTarea() {
        this.titulo = "";
        this.prioridad = "";
    }

    mostrarTarea() {
        return `Para hoy tenemos: ${this.titulo} con una prioridad de ${this.prioridad} `;
    }
}