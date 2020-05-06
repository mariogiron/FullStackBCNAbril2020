class Persona {

    constructor(pNombre, pApellidos, pEdad, pAficiones = []) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
        this.aficiones = pAficiones;
    }

    // mostrar() {
    //     return `PERSONA - Nombre: ${this.nombre}. Apellidos: ${this.apellidos}. Edad: ${this.edad}. Aficiones: ${this.aficiones.join(',')}`;
    // }

    mostrar() {
        let detallePersona = `PERSONA
    Nombre: ${this.nombre}
    Apellidos: ${this.apellidos}
    Edad: ${this.edad}`;

        if (this.aficiones.length > 0) {
            detallePersona += `\nAficiones: `;
            for (let aficion of this.aficiones) {
                detallePersona += `\n\t- ${aficion}`;
            }
        }

        return detallePersona;
    }

}

class Vivienda {
    constructor(pPiso, pLetra) {
        this.piso = pPiso; // number
        this.letra = pLetra; // string
        this.habitantes = []; // Array de objetos Persona
    }

    agregarHabitante(pHabitante) {
        this.habitantes.push(pHabitante);
    }

    mostrar() {
        let detalleVivienda = `VIVIENDA
    Piso: ${this.piso}
    Letra: ${this.letra}`;
        if (this.habitantes.length > 0) {
            detalleVivienda += `\nHabitantes`;
            for (let habitante of this.habitantes) {
                detalleVivienda += '\n' + habitante.nombre;
            }
        }
        return detalleVivienda;
    }
}

class Edificio {
    constructor(pCalle, pNumero, pAnio = "2020") {
        this.anioContruccion = pAnio;
        this.calle = pCalle;
        this.numero = pNumero;
        this.casas = new Array();
    }

    agregarCasa(...pCasa) {
        this.casas.push(...pCasa);
    }

    mostrar() {
        let resultado = `Calle; ${this.calle}. Numero: ${this.numero}\n`
        for (let casa of this.casas) {
            resultado += casa.mostrar() + '\n';
        }
        return resultado;
    }
}

const pers1 = new Persona('Mario', 'Girón', 36, ['baloncesto', 'macramé']);
const pers2 = new Persona('Rosa', 'Moreno', 32, ['cocina']);
const pers3 = new Persona('Miguel', 'Robles', 24, ['limpiar armarios', 'videojuegos']);
const pers4 = new Persona('Ramón', 'González', 18);

const viv1 = new Vivienda(3, 'C');
viv1.agregarHabitante(pers1);
viv1.agregarHabitante(pers2);
// console.log(viv1.mostrar());

const viv2 = new Vivienda(2, 'D');
viv2.agregarHabitante(pers3);
viv2.agregarHabitante(pers4);
// console.log(viv2.mostrar());


const edif1 = new Edificio('Benito Gutierrez', 14);
const edif2 = new Edificio('Granvia', 69, '1986');

edif1.agregarCasa(viv1, viv2);

console.log(edif1.mostrar())