const contenedorPacientes = document.querySelector('.pacientes');

function pintarPacientes(pPacientes) {
    contenedorPacientes.innerHTML = '';
    for (let paciente of pPacientes) {
        const div = document.createElement('div');
        div.className = 'col-12 col-md-6 mt-3';

        const article = document.createElement('article');

        const cabecera = document.createElement('h4');
        cabecera.innerText = `${paciente.nombre} ${paciente.apellido}`;

        const ul = document.createElement('ul');
        const liEdad = document.createElement('li');
        liEdad.innerText = `EDAD: ${paciente.edad}`;
        const liNumSS = document.createElement('li');
        liNumSS.innerText = `NUM SS: ${paciente.numeross}`;
        const liDiagnostico = document.createElement('li');
        liDiagnostico.innerText = `DIAGNÓSTICO: ${paciente.diagnostico}`;

        ul.appendChild(liEdad);
        ul.appendChild(liNumSS);
        ul.appendChild(liDiagnostico);

        article.appendChild(cabecera);
        article.appendChild(ul);

        div.appendChild(article);

        contenedorPacientes.appendChild(div);
    }
}


pintarPacientes(pacientes);