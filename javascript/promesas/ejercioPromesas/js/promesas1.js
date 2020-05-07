const contenedorEquipo = document.querySelector('#team');
const descargarUsuarios = new Promise((resolve, reject) => {
    const url = 'https://randomuser.me/api/?results=15';

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

descargarUsuarios
    .then(usuarios => {
        imprimirUsuarios(usuarios);
    })
    .catch(err => {
        console.log(err);
    })

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