const color = prompt('Dame un color (azul, amarillo, rojo, verde)');

// Evaluamos una variable
// Realizamos acciones dependiendo del valor que tenga dicha variable

switch (color) {
    case 'azul':
        alert('Has seleccionado el color AZUL');
        break;
    case 'amarillo':
        alert('Has seleccionado el color AMARILLO');
        break;
    case 'rojo':
        alert('Has seleccionado el color ROJO');
        break;
    case 'verde':
        alert('Has seleccionado el color VERDE');
        break;
    default:
        alert('El color no es válido');
}