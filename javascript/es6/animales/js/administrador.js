const Usuario = require('./usuario');

class Administrador extends Usuario {
    constructor(pNombre, pUsername, pPassword) {
        super(pNombre, pUsername, pPassword);
    }

    agregarGato() {
        alert('Eres administrador. No estás autorizado a insertar animales.')
    }

    agregarPerro() {
        alert('Eres administrador. No estás autorizado a insertar animales.')
    }
}

module.exports = Administrador;