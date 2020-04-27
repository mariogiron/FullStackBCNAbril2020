const enlaces = document.querySelectorAll('#menu a');

for (let enlace of enlaces) {
    console.log(enlace.href);
    enlace.href = 'http://www.neoland.es';
    enlace.target = '_blank';
}