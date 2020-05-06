const Profesor = require('./profesor');
const Asignatura = require('./asignatura');
const Estudiante = require('./estudiante');
const Universidad = require('./universidad');

let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
// profesor1.mostrarProfesor()
// profesor2.mostrarProfesor()
// PROFESOR (nombre: Ramón, apellidos: García, experiencia: 5)
// PROFESOR (nombre: Rosa, apellidos: Martinez, experiencia: 9)

let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)
// algebra.mostrarAsignatura(false)
// electronica.mostrarAsignatura(true)
// fisica.mostrarAsignatura(true)


let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')
estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra, electronica, fisica);
// estudiante1.mostrarEstudiante()
// console.log();
// estudiante2.mostrarEstudiante()
// console.log();
// estudiante3.mostrarEstudiante()

let uni1 = new Universidad('UC3M')
uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)
uni1.mostrarUniversidad()
console.log('numeroAlumnos:', uni1.obtenerAlumnosAsignatura('Electrónica'))