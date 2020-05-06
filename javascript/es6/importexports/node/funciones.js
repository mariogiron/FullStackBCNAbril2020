function sumar(pNumero1, pNumero2) {
    return pNumero1 + pNumero2;
}

const restar = (pNumero1, pNumero2) => pNumero1 - pNumero2;

let literal = "En un lugar de la mancha";

//es necesario poner la palabra module delante
module.exports = { sumar, restar, literal }