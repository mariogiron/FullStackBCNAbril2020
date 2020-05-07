const Animal = require('./animal');

class Gato extends Animal {
    constructor(pNombre, pRaza, Pcolor) {
        super(pNombre, pRaza, Pcolor);
    }

    imprimir() {
        return super.imprimir();
    }
}

module.exports = Gato;