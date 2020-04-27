const dia = prompt('Introduce el número de orden del día de la semana');

const diaNum = parseInt(dia);

console.log(typeof (dia));
console.log(typeof (diaNum));

switch (diaNum) {
    case 1:
        console.log('El día seleccionado es el LUNES');
        break;
    case 2:
        console.log('El día seleccionado es el MARTES');
        break;
    case 3:
        console.log('El día seleccionado es el MIÉRCOLES');
        break;
    case 4:
        console.log('El día seleccionado es el JUEVES');
        break;
    case 5:
        console.log('El día seleccionado es el VIERNES');
        break;
    case 6:
    case 7:
        console.log('Es FIN DE SEMANA!');
        break;
    default:
        console.log('El número seleccionado no es válido');
}

// DRY- Dont repeat yourself
// KISS - Keep it simple stupid