const seccionBlog = document.getElementById('blog');

const url = 'https://jsonplaceholder.typicode.com/posts';

const req = new XMLHttpRequest();

req.open('GET', url, true);
req.send();
req.addEventListener('load', (event) => {
    const response = event.target.responseText;
    const posts = JSON.parse(response);
    pintarPosts(posts);
});

function pintarPosts(pPosts) {
    for (let post of pPosts) {
        const article = document.createElement('article');
        article.dataset.id = post.id;

        const h2 = document.createElement('h2');
        h2.innerText = post.title;

        const pBody = document.createElement('p');
        pBody.innerText = post.body;

        const pEscrito = document.createElement('p');
        pEscrito.innerText = `Escrito por ${post.userId}`;

        article.appendChild(h2);
        article.appendChild(pBody);
        article.appendChild(pEscrito);

        seccionBlog.appendChild(article);
    }
}
