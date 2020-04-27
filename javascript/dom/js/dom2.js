const div = document.getElementById('main');
div.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/lNattW06LlA" frameborder="0" allow="accelerometer; autoplay=true; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

// Modificar el texto de todos los li
const ul = document.getElementsByClassName('menu');
const lis = ul[0].getElementsByTagName('li');

for (let li of lis) {
    li.innerText = 'Hola Mundo';
}