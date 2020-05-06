class Estudiante {

    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = new Array();
    }

    agregarAsignatura(...pAsignatura) {
        this.asignaturas.push(...pAsignatura)
    }

    mostrarEstudiante() {
        console.log(`ESTUDIANTE(nombre:${this.nombre}, apellidos: ${this.apellidos})`);
        console.log('Estas son las asignaturas que cursa:')

        this.asignaturas.forEach(asignatura => {
            asignatura.mostrarAsignatura(true)
        })
    }

}

module.exports = Estudiante