class Automovil {
    constructor(pMarca, pModelo, pColor, pNumeroPlazas) {
        this.marca = pMarca;
        this._color = pColor;
        this.modelo = pModelo;
        this.numeroPlazas = pNumeroPlazas;
    }

    get color() {
        //getter obtienen el valor
        return this._color;
    }

    set color(pColor) {
        //setter modifica el valor
        this._color = pColor;
    }

    ///metodos static 
    static velocidadPunta() {
        return "180km";
    }

}

var coche1 = new Automovil('set', 'leon', 'rojo', 4);
var coche2 = new Automovil('vw', 'tiguan', 'blanco', 5);

coche2.color = "Burdeos";
console.log(coche2.color);

//static 
let velocidad = Automovil.velocidadPunta()
console.log(velocidad);

// 

let aleatorio = Math.random() * 101; //un numero aleatorio entre 0 y 1 sin contar el 1
let resultado = Math.sqrt(245);
let redondearAlta = Math.ceil(4.2);