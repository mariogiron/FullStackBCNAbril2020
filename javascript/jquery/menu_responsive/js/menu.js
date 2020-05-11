var boton = $('.botonMovil');
boton.on('click', desplegar);

function desplegar() {
    $('header nav').slideToggle(400);
}