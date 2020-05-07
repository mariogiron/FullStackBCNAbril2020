class Animal {
    constructor(pNombre, pRaza, pColor) {
        this._nombre = pNombre;
        this.raza = pRaza;
        this.color = pColor;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(pNombre) {
        this._nombre = pNombre;
    }

    imprimir() {
        let resultado = `<h1>Nombre: ${this.nombre}</h1><br><p> Raza: ${this.raza}</p><br><p>Color: ${this.color}</p>`;
        return resultado;
    }
}

//const animal1 = new Animal('Brutus', 'Bull Terrier', 'Blanco');

//console.log(animal1.imprimir());

module.exports = Animal;