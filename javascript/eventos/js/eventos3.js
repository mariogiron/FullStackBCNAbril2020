const lis = document.querySelectorAll('.menu li');

for (let li of lis) {
    li.addEventListener('click', (event) => {
        const color = event.target.dataset.color;
        document.body.style.backgroundColor = color;
    });
}
