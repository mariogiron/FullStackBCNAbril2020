class Persona {

}

let activo: boolean = true;
let numero: number;
let cadena: string = "Hola mundo";
let nombre: string = `${cadena} otro mensaje`;

let arrElementos: number[] = [2, 1, 123.4, 5.89];
arrElementos.push(5);

let animales: Array<string> = ['pajaro', 'perro'];

//tupla

let t: [string, number] = ['hola', 4];

let miPersonita: Persona = new Persona();

//que pasa cuando  yo no se que tipo de dato voy almacenar.

let noTengoniIdea: any = 4;
noTengoniIdea = true;
noTengoniIdea = "hola";

//tipado a las funciones, tanto a los paremetros que recibo como a los que devuelvo.

function sumar(num1: number, num2: number): number {
    return num1 + num2
}

let resultado: number = sumar(6, 5);


function saludar(nombre: any): void {
    console.log('Hola mundo' + nombre);
}

saludar(() => {
    return 'Pepe';
});

saludar('Juan');
