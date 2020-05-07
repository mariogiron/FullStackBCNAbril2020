const contenedorEquipo = document.querySelector('#team');

const getUsuarios = pCantidad => new Promise((resolve, reject) => {
    const url = 'https://randomuser.me/api/?results=' + pCantidad;

    let peticion = new XMLHttpRequest();
    peticion.open('GET', url, true);
    peticion.send();

    peticion.addEventListener('load', (event) => {
        if (event.target.status == 200) {
            let respuesta = JSON.parse(event.target.responseText)
            resolve(respuesta.results);
        } else {
            reject('No se ha podido cargar el contenido:' + event.target.statusText);
        }

    })
})

//async await
async function cargarUsuarios(pCantidad) {
    try {
        const usuarios = await getUsuarios(pCantidad);
        imprimirUsuarios(usuarios);
    }
    catch (err) {
        console.log(err);
    }

}


cargarUsuarios(5000);
document.querySelector('#texto').innerText = "texto que se cargará antes que lo usuarios";

function imprimirUsuarios(pListaUsuarios) {
    //console.log(pListaUsuarios);
    let usuariosHTML = '';

    for (usuario of pListaUsuarios) {
        usuariosHTML += `<article>
                        <div>
                            <img src="${usuario.picture.thumbnail}" alt="">
                        </div>
                        <div>
                            <h3>${usuario.name.first} ${usuario.name.last}</h3>
                            <p><a href="mailto:${usuario.eamil}">${usuario.email}</a></p>
                        </div>
                 </article>`;
    }

    contenedorEquipo.innerHTML = usuariosHTML;
}