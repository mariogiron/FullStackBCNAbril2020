//import para node y frameworks, se utiliza la regla require y se necesita una variable o constante para almacenar el require. NO HACE FALTA LA EXTENSION

const funciones = require('./funciones');
const Tarea = require('./tarea');

console.log(funciones.sumar(3, 4));

console.log(funciones.literal);

let miTareaHoy = new Tarea('Estudiar javascript', 'urgente');

let tareaDeportiva = new Tarea('Salir a correr', 'diaria');


miTareaHoy.modificarPrioridad('diaria');

miTareaHoy.mostrarTarea();
tareaDeportiva.mostrarTarea();
