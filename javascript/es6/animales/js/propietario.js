const Usuario = require('./usuario');

class Propietario extends Usuario {
    constructor(pNombre, pUsername, pPassword, pFoto, pGato = [], pPerro = []) {
        super(pNombre, pUsername, pPassword);
        this.foto = pFoto;
        this.listaGatos = pGato;
        this.listaPerros = pPerro;
    }

    agregarGato(...objGato) {
        this.listaGatos.push(...objGato);
    }

    agregarPerro(...objPerro) {
        this.listaPerros.push(...objPerro);
    }

    imprimir() {
        let resultado = super.imprimir();
        for (let gato of this.listaGatos) {
            var resGato = gato.imprimir();
        }
        for (let perro of this.listaPerros) {
            var resPerro = perro.imprimir();
        }
        return `${resultado}<br><h4>Lista de animales</h4><br>${resGato}<br>${resPerro}`;
    }

    listaAnimales() {
        let count = 0;

        count = this.listaPerros.length + this.listaGatos.length

        // for (let gato of this.listaGatos) {
        //     count++
        // }
        // for (let perro of this.listaPerros) {
        //     count++
        // }

        return count;
    }
}

module.exports = Propietario;