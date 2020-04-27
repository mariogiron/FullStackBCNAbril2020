// Este bucle solo valida una condición
// Me tengo que asegurar que la condición deja de cumplirse

let cont = 101;
while (cont <= 100) {
    console.log(cont);
    cont++;
}

do {
    console.log(cont);
    cont--;
} while (cont > 0);