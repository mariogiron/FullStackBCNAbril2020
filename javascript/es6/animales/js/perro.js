const Animal = require('./animal');

class Perro extends Animal {
    constructor(pNombre, pRaza, Pcolor, pPedigree) {
        super(pNombre, pRaza, Pcolor);
        this.pedigree = pPedigree;
    }

    imprimir() {
        let resultado = `<p>Pedigree: ${this.pedigree}</p>`
        return super.imprimir() + resultado;
    }
}

// const perro1 = new Perro('Tobi', 'Galgo', 'Marron', 'No');

// console.log(perro1.imprimir());

module.exports = Perro;