const nota = prompt('Introduce tu nota');

if (nota >= 5) {
    // Si nota es mayor o igual que 5
    console.log('Estás aprobado');
} else {
    // Si nota es menor que 5
    console.log('Estás suspenso');
}

// SI nota ES MAYOR QUE 5 y ES MENOR QUE 7
//      MUESTRA "Tienes un BIEN"
// SI nota ES MAYOR QUE 7 y ES MENOR QUE 9
//      MUESTRA "Tienes un NOTABLE"
// SI nota ES MAYOR QUE 9 y ES MENOR QUE 10
//      MUESTRA "Tienes un SOBRESALIENTE"
// SI nota es MENOR QUE 5 
//      MUESTRA "SUSPENSO"

if (nota < 5 && nota >= 0) { // 0...5
    console.log('Estás SUSPENSO');
} else if (nota >= 5 && nota < 7) { // 5...7
    // Si nota es mayor o igual que 5 Y ADEMÁS nota es menor que 7
    console.log('Tienes un BIEN');
} else if ((nota >= 7) && (nota < 9)) { // 7...9
    console.log('Tienes un NOTABLE');
} else if (nota >= 9 && nota < 10) { // 9...10
    console.log('Tienes un SOBRESALIENTE');
} else {
    console.log('La nota debe estar entre 0 y 10');
}