var faq = $('.faq h2');

faq.on('click', desplegar);

function desplegar() {
    //opcion 1 - mas facil pero me da menos juego
    //$(this).next().slideToggle(400);
    let contenido = $(this).next(); //p con el contenido
    $('.faq p').slideUp(400);
    $('.faq h2').css('background-color', 'lightgrey');
    $('.faq h2').removeClass('titulo');
    
    if (contenido.css('display') == 'none') {
        //desplegar
        contenido.slideDown(400);
        $(this).addClass('titulo');
        $(this).css('background-color', 'beige');
    } else {
        //replegar
        contenido.slideUp(400);
    }
}