const alumno = {
    nombre: 'Mario', edad: 22, estado: true,
    asignaturas: ['matemáticas', 'física', 'química']
};

const alumno2 = {
    nombre: 'Pepe', edad: 32, estado: false,
    asignaturas: ['física', 'química']
};

const alumno3 = {
    nombre: 'Rosa', edad: 24, estado: true,
    asignaturas: ['matemáticas', 'química']
};

const clase = [alumno, alumno2, alumno3];

for (let i = 0; i < alumno.asignaturas.length; i++) {
    console.log(alumno.asignaturas[i]);
}

for (let asignatura of alumno.asignaturas) {
    console.log(asignatura);
}

function mostrarAlumno(pAlumno) {
    console.log(`ALUMNO: ${pAlumno.nombre}. Edad: ${pAlumno.edad}`);
    console.log(pAlumno.asignaturas);
}

// Mostrar los datos de aquellos alumnos que tengan el estado activo
for (let alumno of clase) {
    if (alumno.estado) {
        mostrarAlumno(alumno);
    }
}

// Mostrar todos los alumnos que tengan 3 asignaturas