//importar para usar dentro de html. IMPORTANTE POR .js
//import { sumar, literal } from './funciones.js';
import * as funciones from './funciones.js';
import Tarea from './tarea.js';

let resultado = funciones.sumar(2, 3);

console.log(resultado);

console.log(funciones.literal);

const miTarea = new Tarea('Comprar el pan', 'diaria');

miTarea.mostrarTarea()
