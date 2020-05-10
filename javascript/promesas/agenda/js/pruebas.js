

getContactos()
    .then(contactos => {
        imprimirContactos(contactos);
    })
    .catch(error => {
        console.log(error);
    });











function imprimirContactos(pListaContactos) {
    const agendaContactos = document.querySelector('.contactos')
    for (contacto of pListaContactos) {
        const article = document.createElement('art')
        const div1 = document.createElement('div')
        const img = document.createElement('img')
        img.src = contacto.avatar
        const div2 = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.innerHTML = `${contacto.first_name} ${contacto.last_name}`

        const p = document.createElement('p')
        const a = document.createElement('a')
        a.href = contacto.email
        a.innerHTML = contacto.email

        div1.appendChild(img)
        p.appendChild(a)
        div2.appendChild(p)
        div2.appendChild(h3)


        article.appendChild(div1)
        article.appendChild(div2)
        agendaContactos.appendChild(article)
    }





















    function loadContactos(page) {

        getContactos(page)
            .then(contactos => {
                imprimirContactos(contactos);
            })
            .catch(error => {
                console.log(error);
            });

    }





    // querySelectorAll busco todos los h3
    // for para cada h3 y pongo su eventlistener
    h3.addEventListener('click', (event) => {

        loadDetalle(ID DEL USUARIO);
    }
    )
}


loadContactos(1);






/*

let contactoHTML = '';

contactoHTML += `<article>
                            <div>
                                <img src="${contacto.avatar}" alt="">
                            </div>
                            <div>
                                <h3>${contacto.first_name} ${contacto.last_name}</h3>
                                <p><a href="mailto:"${contacto.email}>${contacto.email}</a></p>
                            </div>
                        </article>`




agendaContactos.innerHTML = contactoHTML */