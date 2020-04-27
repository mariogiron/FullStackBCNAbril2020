const parrafos = document.querySelectorAll('.parrafo');

// parrafos[0].className = parrafos[0].className + ' rojo';
parrafos[0].className += ' rojo';

console.log(parrafos[0].classList);

console.log(parrafos[0].classList.item(1));
parrafos[0].classList.remove('parrafo');
parrafos[1].classList.add('azul');
parrafos[0].classList.replace('rojo', 'azul');

let estado = false;
parrafos[0].classList.toggle('activa', estado);