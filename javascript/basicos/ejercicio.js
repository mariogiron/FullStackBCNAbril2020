const letras = [];
const pizarra = 'pizarra';
for (let i = 0; i < pizarra.length; i++) {
    if (i % 2 !== 0) {
        letras.push(pizarra[i]);
    }
}
alert(letras);