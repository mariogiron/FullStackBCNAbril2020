const seccionPersonas = document.getElementById('personas');

function pintarPersona(pNombre, pCiudad) {
    // createElement
    let article = document.createElement('article'); // <article></article>

    // Modifico el aspecto del article
    article.style.width = '200px';
    article.id = pCiudad;
    // article.className = 'persona';
    article.classList.add('persona');

    // Genero los nodos hijo del article
    // Creamos la cabecera
    let h3 = document.createElement('h3');
    h3.style.backgroundColor = 'tomato';
    h3.style.textAlign = 'center';
    h3.style.margin = '0';
    h3.style.padding = '10px';
    const textoH3 = document.createTextNode(pNombre);
    h3.appendChild(textoH3);

    // Creamos el párrafo
    let p = document.createElement('p');
    const textoP = document.createTextNode(`Ciudad: ${pCiudad}`);
    p.appendChild(textoP);

    article.appendChild(h3);
    article.appendChild(p);

    seccionPersonas.appendChild(article);
}

function pintarPersonaMal(pNombre, pCiudad) {
    seccionPersonas.innerHTML += `<article style="width:200px">
        <h3 style="background-color: tomato">${pNombre}</h3>
        <p>${pCiudad}</p>
    </article>`;
}

function borrarPersona(pId) {
    const personaBorrar = document.getElementById(pId);
    seccionPersonas.removeChild(personaBorrar);
}

function borrarTodo() {
    const personas = document.querySelectorAll('.persona');
    for (let persona of personas) {
        seccionPersonas.removeChild(persona);
    }
}