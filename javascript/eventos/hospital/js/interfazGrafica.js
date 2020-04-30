const selects = document.querySelectorAll('.selectores-edad select');
const selectEdadMin = document.querySelector('.selectores-edad #edadMin');
const selectEdadMax = document.querySelector('.selectores-edad #edadMax');
const selectDiagnostico = document.getElementById('selectDiagnostico');

// Generando el contenido de los select para la edad máxima y la edad mínima
for (let select of selects) {
    for (let i = 0; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        select.appendChild(option);
    }
}

// Capturo los cambios sobre el select de la edad mínima para adaptar el select de la edad máxima
selectEdadMin.addEventListener('change', (event) => {
    const numSeleccionado = parseInt(event.target.value);
    // Elimino todos los elementos hijo del select de edad máxima
    selectEdadMax.innerHTML = '';
    for (let i = numSeleccionado + 1; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        selectEdadMax.appendChild(option);
    }
});

// Generar el contenido del select de diagnóstico
// Recupero los diagnósticos a partir de los pacientes
const diagnosticos = [];
for (let paciente of pacientes) {
    const estaIncluido = diagnosticos.includes(paciente.diagnostico);
    if (!estaIncluido) {
        diagnosticos.push(paciente.diagnostico);
    }
}
diagnosticos.sort();

// Creo los option a partir de los diagnósticos
for (let diagnostico of diagnosticos) {
    const option = document.createElement('option');
    option.value = diagnostico;
    option.innerText = diagnostico;
    selectDiagnostico.appendChild(option);
}
