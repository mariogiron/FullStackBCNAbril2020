var seccionBlog = $('#blog');
var inputTitulo = $('#titulo');
var textarea = $('#texto');
var id = 1;
pintarNoticia(noticias[0])

function pintarNoticia(pNoticia) {
    seccionBlog.append(` <div class="card my-4">
                <div class="card-body">
                    <h5 class="card-title">${pNoticia.titulo}</h5>
                    <p class="card-text">${pNoticia.texto}</p>
                    <a href="#" class="btn btn-danger eliminar" id="noticia_${pNoticia.id}">Eliminar</a>
                    <a href="#" class="btn btn-warning actualizar" id="noticia_${pNoticia.id}">Actualizar</a>
                </div>
            </div>`);
    $('.eliminar').on('click', function () {
        let idNoticia = $(this).attr('id');

        borrarNoticia(idNoticia);
    })
}

function borrarNoticia(pId) {
    let noticiaBorrar = $('#' + pId).parent().parent();
    console.log(noticiaBorrar);
    noticiaBorrar.remove();

    //borrar de mi array
    //para borrar de un array splice(posicionBorrar, cantidadElementos)

    //yo recibo un pId  que es noticia_1 y solo quiero el numero split('_') y me devuelve un array con los elementos que rodeen al guion bajo

    let id = pId.split('_')[1];


    posicionBorrar = noticias.findIndex(noticia => {
        return noticia.id == id
    })
    noticias.splice(posicionBorrar, 1);
}

//guardar una noticia

var botonGuardar = $('#guardar');
botonGuardar.on('click', capturarDatosForm);

function capturarDatosForm() {
    console.log($(this).val())

    let tituloGuardar = inputTitulo.val();
    let textoGuardar = textarea.val();

    //condicional
    guardarNoticia(tituloGuardar, textoGuardar);

}

function guardarNoticia(pTitulo, pTexto) {
    id++;
    let noticiaNueva = {
        id: id,
        titulo: pTitulo,
        texto: pTexto
    }

    noticias.push(noticiaNueva);
    pintarNoticia(noticiaNueva);


}

//reto: añadir un boton actualizar. recogerá los datos de esa noticia y los enviará al los input correspondientes del form, titulo al inputTitulo texto al textarea.

    //no utiliceis append usar html()
    //cuando deis al boton actualizar quitar el boton guardar  y poner uno de actualizar.
    //o cambiando el texto boton