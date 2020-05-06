function sumar(pNumero1, pNumero2) {
    return pNumero1 + pNumero2;
}

const restar = (pNumero1, pNumero2) => pNumero1 - pNumero2;

let literal = "En un lugar de la mancha";


//siempre puedo decidir que exporto y que no 
export { sumar, restar, literal }