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
    // Calle, numero, casas[]
}

const pers1 = new Persona('Mario', 'Girón', 36, ['baloncesto', 'macramé']);
const pers2 = new Persona('Rosa', 'Moreno', 32, ['cocina']);
const pers3 = new Persona('Miguel', 'Robles', 24, ['limpiar armarios', 'videojuegos']);
const pers4 = new Persona('Ramón', 'González', 18);

const viv1 = new Vivienda(3, 'C');
viv1.agregarHabitante(pers1);
viv1.agregarHabitante(pers2);
console.log(viv1.mostrar());

const viv2 = new Vivienda(2, 'D');
viv2.agregarHabitante(pers3);
viv2.agregarHabitante(pers4);
console.log(viv2.mostrar());