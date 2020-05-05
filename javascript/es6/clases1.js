class Coche {

    constructor(pColor, pMarca, pModelo) {
        this.color = pColor;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.velocidad = 0;
    }

    acelerar(pCambioVel) {
        this.velocidad = this.velocidad + pCambioVel;
    }

    frenar(pCambioVel) {
        this.velocidad -= pCambioVel;
    }

}

// Creando un objeto de la clase Coche
// Esta sentencia ejecuta el constructor de la clase
const coche1 = new Coche('rojo', 'Mercedes', 'XC180');
const coche2 = new Coche('verde', 'Fiat', 'Punto');

console.log(coche1);
coche1.acelerar(50);
coche1.acelerar(20);
console.log(coche1);
coche1.frenar(60);
console.log(coche1);
coche1.velocidad = 45;
console.log(coche1);