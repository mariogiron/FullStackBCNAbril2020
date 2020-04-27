const titulos = ['Deportes', 'Política', 'Opinión'];

const h3s = document.querySelectorAll('article.articulo h3');
let cont = 0;
for (let h3 of h3s) {
    h3.innerText = titulos[cont++];
}

// console.log(h3s[h3s.length - 1])
const ultimoH3 = document.querySelector('.articulo:last-child h3');

setTimeout(() => {
    ultimoH3.innerText = 'Título modificado';
}, 3000);
