// Recupera todos los elementos que coincidan con la etiqueta del parámetro
const parrafos = document.getElementsByTagName('p');

console.log(parrafos[1].innerText);
parrafos[1].innerText = 'Nuevo Texto';

parrafos[2].innerHTML = '<ul><li>Primero</li><li>Segundo</li></ul>';

// Modifico todas las etiquetas A del segundo UL
const uls = document.getElementsByTagName('ul');
const ultimoUl = uls[2];
const enlaces = ultimoUl.getElementsByTagName('a');

const textos = ['Servicios', 'Equipo'];
for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].innerText = textos[i];
}