class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = new Array();
    }

    agregarAlumno(...pEstudiantes) {
        this.alumnos.push(...pEstudiantes);
    }

    mostrarUniversidad() {
        console.log(`UNIVERSIDAD(nombre:${this.nombre})`)
        this.alumnos.forEach(alumno => {
            alumno.mostrarEstudiante();
        })
    }

    obtenerAlumnosAsignatura(pNombreAsignatura) {
        let count = 0;

        for (let alumno of this.alumnos) {
            for (let asignatura of alumno.asignaturas) {
                //asignaturas
                if (asignatura.nombre === pNombreAsignatura) {
                    count++;
                }
            }
        }
        return count;
    }

}

module.exports = Universidad;