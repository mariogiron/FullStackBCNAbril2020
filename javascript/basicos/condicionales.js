const edad = prompt('¿Qué edad tienes?');
const MAYOR_EDAD = 21;

// SI edad ES MAYOR O IGUAL QUE 18
//     MUESTRA "Eres mayor de edad"
// SI NO 
//     MUESTRA "Eres menor de edad"

if (edad >= MAYOR_EDAD) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}
console.log('La mayoría de edad esta en los ' + MAYOR_EDAD);