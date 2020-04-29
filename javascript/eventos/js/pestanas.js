// Recupero todos los li
const lis = document.querySelectorAll('.menu li');

for (let li of lis) {
    // ! Primera opción - Diferentes funciones
    // li.addEventListener('mouseover', mostrar);
    // li.addEventListener('mouseout', esconder);

    // ! Segunda opción - Misma Función
    li.addEventListener('mouseover', mover);
    li.addEventListener('mouseout', mover);
    li.addEventListener('click', cargarContenido);
}

function mostrar(event) {
    event.target.style.marginLeft = '0px';
}

function esconder(event) {
    event.target.style.marginLeft = '-20px';
}

function mover(event) {
    // if (event.type === 'mouseover') {
    //     event.target.style.marginLeft = '0px';
    // } else {
    //     event.target.style.marginLeft = '-20px';
    // }
    const margin = (event.type === 'mouseover') ? '0px' : '-20px';
    event.target.style.marginLeft = margin;
}

function cargarContenido(event) {
    const nombreImagen = event.target.innerText.toLowerCase();
    document.body.style.backgroundImage = `url(images/${nombreImagen}.jpg)`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}