var imagenes = $('.imagen');

imagenes.on('click', cargarModal);

function cargarModal() {

    //recoger los valores que quiero utilizar
    var urlImagen = $(this).find('img').attr('src');
    var titulo = $(this).data('titulo');
    var descripcion = $(this).data('descripcion');

    //carga de la modal en el body
    $('body').append(`<div class="modal">
        <div class="manto">
            <div class="contenedor">
                <img src="${urlImagen}">
                <h4>${titulo}</h4>
                <p>${descripcion}</p>
                <div class="cerrar">
                    X
                </div>
            </div>
        </div>
    </div>`);
    //animaciones de entrada
    $('.modal').fadeIn(500);
    $('.modal .contenedor').animate({ 'top': '50px' }, 500);

    //eventos de cierre
    $('.modal .cerrar').on('click', borrarModal);
    $(document).on('keydown', borrarModal);
}

function borrarModal(event) {
    //si pulsamos la tecla esc y el boton de cerrar se cierra la modal.
    if (event.keyCode == 27 || event.type == "click") {
        $('.modal').fadeOut(500, () => {
            $('.modal').remove();
        });

    }
}