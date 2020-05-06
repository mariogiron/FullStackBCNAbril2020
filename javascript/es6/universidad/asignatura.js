class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }

    mostrarAsignatura(pMuestraProfesor) {
        console.log(`ASIGNATURA (nombre: ${this.nombre})`);
        if (pMuestraProfesor) {
            console.log('Asignatura impartida por:');
            this.profesor.mostrarProfesor();
        }
    }

}

module.exports = Asignatura;