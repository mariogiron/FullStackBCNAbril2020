let aves = ['Águila', 'Guacamayo', 'Periquito', 'Colibrí'];
let felinos = new Array('Tigre', 'Leon', 'Gato');
let anfibios = ['Rana', 'Sapo', 'Salamandra'];

let zoo = [aves, felinos, anfibios];
let zoo2 = [
    ['Águila', 'Guacamayo', 'Periquito', 'Colibrí'],
    ['Tigre', 'Leon', 'Gato'],
    ['Rana', 'Sapo', 'Salamandra']
]

for (let i = 0; i < zoo.length; i++) {
    const arrTemp = zoo[i];
    for (let j = 0; j < arrTemp.length; j++) {
        console.log(arrTemp[j]);
    }
}

for (let i = 0; i < zoo.length; i++) {
    for (let j = 0; j < zoo[i].length; j++) {
        console.log(zoo[i][j]);
    }
}

// For-Of
for (let especie of zoo) {
    console.log(especie);
    for (let animal of especie) {
        console.log(animal);
    }
}

// se repite 3 veces
// 1 repetición -> especie = aves
// 2 repetición -> especie = felinos
// 3 repetición -> especie = anfibios

// Ejemplo anterior con función para imprimir el array

function imprimirArray(pArr) {
    for (let item of pArr) {
        console.log(item);
    }
}

function imprimirPosArray(pArr, pPos) {
    console.log(pArr[pPos]);
}

for (let especie of zoo) {
    imprimirArray(especie);
}

imprimirArray(zoo);
imprimirArray(felinos);
imprimirArray(zoo[2]);

console.log(anfibios[1]);
console.log(zoo[2][1]);
imprimirPosArray(anfibios, 1);