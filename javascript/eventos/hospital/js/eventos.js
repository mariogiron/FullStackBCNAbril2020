const btnFiltroEdad = document.getElementById('btnFiltroEdad');
const btnReset = document.getElementById('btnReset');
const inputNombre = document.getElementById('inputNombre');

btnFiltroEdad.addEventListener('click', (event) => {
    const edadMin = parseInt(selectEdadMin.value);
    const edadMax = parseInt(selectEdadMax.value);
    const arrFiltrado = pacientes.filter((paciente) => {
        return paciente.edad >= edadMin && paciente.edad <= edadMax;
    });
    pintarPacientes(arrFiltrado);
});

selectDiagnostico.addEventListener('change', (event) => {
    const diagnosticoSeleccionado = event.target.value;
    const arrFiltrado = pacientes.filter((paciente) => {
        return paciente.diagnostico === diagnosticoSeleccionado;
    });
    pintarPacientes(arrFiltrado);
});

inputNombre.addEventListener('change', (event) => {
    const nombreSeleccionado = event.target.value.toLowerCase();
    const arrFiltrado = pacientes.filter((paciente) => {
        const nombreApellidos = `${paciente.nombre} ${paciente.apellido}`.toLowerCase();
        return nombreApellidos.includes(nombreSeleccionado);
    });
    pintarPacientes(arrFiltrado);
});

btnReset.addEventListener('click', (event) => {
    pintarPacientes(pacientes);
});