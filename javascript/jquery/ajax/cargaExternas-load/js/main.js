var botones = $('#menu a');
var contenedor = $('#contenedor');

botones.on('click', cargarSecciones);

function cargarSecciones(event) {
    event.preventDefault();

    let documento = $(this).data('documento');

    if (documento === "docu4") {
        contenedor.load(documento + ".txt");
    } else {
        contenedor.load(documento + ".html");
    }

}