class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        console.log(`PROFESOR(nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia:
           ${this.experiencia}`);
    }
}

module.exports = Profesor;