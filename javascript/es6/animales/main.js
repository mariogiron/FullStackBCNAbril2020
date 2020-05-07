const Animal = require('./js/animal.js');
const Usuario = require('./js/usuario.js');

const Perro = require('./js/perro.js');
const Gato = require('./js/gato.js');

const Propietario = require('./js/propietario.js');
const Administrador = require('./js/administrador.js');

//Creación de animales
const animal1 = new Perro('Tobi', 'Pomeranian', 'Negro', 'no');
const animal2 = new Perro('Roli', 'Mestizo', 'Marrón y negro', 'no');
const animal3 = new Perro('Janis', 'West highlander', 'Blanco', 'si');

const animal4 = new Gato('Alberto', 'Mestizo', 'Atigrado gris y beige', 'no');
const animal5 = new Gato('Voldemort', 'Persa', 'Negro', 'si');
const animal6 = new Gato('Faraón', 'Esfinge', 'Gris', 'si');

//Creación de usuarios
const usuario1 = new Administrador('Julio', 'JMartin', 'jm1965');
const usuario2 = new Propietario('Manuela', 'MissGattis', 'ManGattis');
const usuario3 = new Propietario('Aurelio', 'Aure_74', 'aure07041974');
const usuario4 = new Propietario('Isabel', 'Isabelita', 'isaisa');


//Vincular animales a usuarios
usuario2.agregarPerro(animal1);
usuario2.agregarGato(animal4, animal6);
usuario3.agregarPerro(animal2);
usuario4.agregarPerro(animal3);
usuario4.agregarGato(animal5);


//Relizamos consultas

// console.log(usuario2.listaAnimales());
// console.log(usuario3.listaAnimales());
// console.log(usuario4.listaAnimales());

console.log(usuario2.imprimir());
// console.log(usuario3.imprimir());
// console.log(usuario4.imprimir());