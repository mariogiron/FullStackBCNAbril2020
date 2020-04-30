const url = 'https://swapi.dev/api/people/?format=json';

const ulPersonajes = document.getElementById('personajes');

const req = new XMLHttpRequest();
req.open('GET', url, true);
req.send();
req.addEventListener('load', (event) => {
    const responseText = event.target.responseText;
    const response = JSON.parse(responseText);
    const people = response.results;
    pintarPersonajes(people);
});

function pintarPersonajes(pPeople) {
    ulPersonajes.innerHTML = '';
    for (let person of pPeople) {
        const li = document.createElement('li');
        li.innerText = person.name;
        ulPersonajes.appendChild(li);
    }
}