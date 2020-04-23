const alumno = {
    nombre: 'Mario', edad: 22, estado: true,
    asignaturas: ['matemáticas', 'física', 'química'],
    notas: { matematicas: 4.65, fisica: 7.65, quimica: 6.4 }
};
// alumno.asignaturas[1]
// alumno.notas.fisica

const alumno2 = {
    nombre: 'Pepe', edad: 32, estado: false,
    asignaturas: ['física', 'química'],
    notas: { fisica: 6, quimica: 9.2 }
};

const alumno3 = {
    nombre: 'Rosa', edad: 24, estado: true,
    asignaturas: ['matemáticas', 'química'],
    notas: { matematicas: 7.8, quimica: 4.75 }
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
console.log('TODOS LOS ALUMNOS ACTIVOS')
for (let alumno of clase) {
    if (alumno.estado) {
        mostrarAlumno(alumno);
    }
}

// Mostrar todos los alumnos que tengan 3 asignaturas
console.log('3 ASIGNATURAS')
for (let alumno of clase) {
    if (alumno.asignaturas.length >= 3) {
        mostrarAlumno(alumno);
    }
}

// Calcular Nota Media
console.log('CALCULAR NOTA MEDIA');

// notas: { matematicas: 4.65, fisica: 7.65, quimica: 6.4 }
console.log(alumno.notas.fisica);
console.log(alumno['notas']['fisica']);

// Función que calcula la media de un objeto de tipo alumno
function calcularMedia(pAlumno) {
    let total = 0;
    let cont = 0;
    for (let clave in pAlumno.notas) {
        total += pAlumno['notas'][clave];
        cont++;
    }
    return (total / cont);
}

// Calculo la media de cada uno de ellos usando la función
console.log(calcularMedia(alumno));
console.log(calcularMedia(alumno2));
console.log(calcularMedia(alumno3));

// Calculo la media de cada uno de los alumnos a partir del array clase
for (let alumno of clase) {
    console.log(calcularMedia(alumno));
}