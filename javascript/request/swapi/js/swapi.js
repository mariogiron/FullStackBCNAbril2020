const ulPersonajes = document.getElementById('personajes');
const detallePersonaje = document.querySelector('.detalle-personaje');
const listaPeliculas = document.querySelector('.lista-peliculas ul');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');

let paginaPersonajes = 1;
let numPaginas = 0;

function swapi(type = 'people', page = 1, id = '') {
    let url = '';
    if (id === '') {
        url = `https://swapi.dev/api/${type}/?format=json&page=${page}`;
    } else {
        url = `https://swapi.dev/api/${type}/${id}/?format=json`;
    }

    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.send();
    req.addEventListener('load', (event) => {
        const responseText = event.target.responseText;
        const response = JSON.parse(responseText);

        if (type === 'people' && id === '') {
            // Recupera todos los personajes
            numPaginas = Math.ceil(response.count / 10);
            const people = response.results;
            pintarPersonajes(people);
        } else if (type === 'people' && id !== '') {
            // Recupera el detalle de un personaje            
            pintarDetallePersonaje(response);
        } else if (type === 'films') {
            const li = document.createElement('li');
            // li.innerText = response.title + ' (' + response.release_date + ')';
            li.innerText = `${response.title} (${response.release_date})`;
            listaPeliculas.appendChild(li);
        }
    });
}

function pintarPersonajes(pPeople) {
    ulPersonajes.innerHTML = '';
    for (let person of pPeople) {
        const id = getId(person.url);

        const li = document.createElement('li');
        li.innerText = person.name;
        li.dataset.id = id;
        li.addEventListener('click', peopleDetail);
        li.addEventListener('mouseover', iniciarAudio);
        li.addEventListener('mouseout', pararAudio);

        ulPersonajes.appendChild(li);
    }
}

function pintarDetallePersonaje(person) {
    detallePersonaje.innerHTML = `
        <h2>${person.name}</h2>
        <ul>
            <li>Altura: ${person.height}</li>
            <li>Peso: ${person.mass}</li>
            <li>Color Piel: ${person.skin_color}</li>
            <li>Color Pelo: ${person.hair_color}</li>
            <li>Género: ${person.gender}</li>
            <li>Año Nacimiento: ${person.birth_year}</li>
        </ul>`;

    listaPeliculas.innerHTML = '';
    for (let film of person.films) {
        const id = getId(film);
        swapi('films', 1, id);
    }
}

function getId(pUrl) {
    // Recupera el id situado dentro de la url que pasamos por parámetro
    // Siempre está en la antepenúltima posición
    const pUrlSplit = pUrl.split('/');
    return pUrlSplit[pUrlSplit.length - 2];
}

// EVENTOS
btnNext.addEventListener('click', changePage);
btnPrev.addEventListener('click', changePage);

function changePage(event) {
    const type = event.target.dataset.type;
    if (type === 'next') {
        if (paginaPersonajes === numPaginas) return;
        paginaPersonajes++;
    } else {
        if (paginaPersonajes === 1) return;
        paginaPersonajes--;
    }
    swapi('people', paginaPersonajes);
}

function peopleDetail(event) {
    const id = event.target.dataset.id;
    console.log(id);
    swapi('people', 1, id);
}

function iniciarAudio() {
    const audio = document.createElement('audio');
    audio.id = 'reproductor';
    audio.src = './sable.mp3';
    audio.autoplay = true;
    document.body.appendChild(audio);
}

function pararAudio() {
    const audio = document.getElementById('reproductor');
    const audioParent = audio.parentNode;
    audioParent.removeChild(audio);
}

swapi('people');