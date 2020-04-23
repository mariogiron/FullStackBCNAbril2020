const hospital = [
    { nombre: 'Juan', apellido: 'Perez', diagnostico: 'Cefaleas', edad: 36, numeross: 'A34905' },
    { nombre: 'Juan', apellido: 'Guitierrez', diagnostico: 'Cefaleas', edad: 33, numeross: 'A34907' },
    { nombre: 'Alex', apellido: 'Rodriguez', diagnostico: 'Gripe', edad: 30, numeross: 'A58934' },
    { nombre: 'Carlos', apellido: 'Lopez', diagnostico: 'Hernia de disco', edad: 50, numeross: 'A45690' },
    { nombre: 'Luis', apellido: 'Ramirez', diagnostico: 'Conjutivitis', edad: 35, numeross: 'A98702' },
    { nombre: 'Patricia', apellido: 'Jimenez', diagnostico: 'Torcedura', edad: 25, numeross: 'A97821' },
    { nombre: 'Alberto', apellido: 'Lopez', diagnostico: 'Gripe', edad: 30, numeross: 'A4500' },
    { nombre: 'Damian', apellido: 'Rodriguez', diagnostico: 'Miopia', edad: 16, numeross: 'A35098' },
    { nombre: 'Lorem', apellido: 'Rodriguez', diagnostico: 'Migrañas', edad: 24, numeross: 'A68903' },
    { nombre: 'Natalia', apellido: 'Salinas', diagnostico: 'Rotura de dedo', edad: 27, numeross: 'A79300' }
];

// Mostrar paciente
function mostrarPaciente(pPaciente) {
    console.log(`NOMBRE: ${pPaciente.nombre} ${pPaciente.apellido}
    DIAGNÓSTICO: ${pPaciente.diagnostico}
    EDAD: ${pPaciente.edad}
    NUMEROSS: ${pPaciente.numeross}
    `);
}

/**
 * Función que filtra los pacientes por edad
 * 
 * @param {number} pEdadMin edad mínima de los pacientes
 * @param {number} pEdadMax edad máxima de los pacientes
 */
function filtrarPorEdad(pEdadMin = 18, pEdadMax = 30) {
    for (let paciente of hospital) {
        if (paciente.edad >= pEdadMin && paciente.edad <= pEdadMax) {
            mostrarPaciente(paciente);
        }
    }
}

/**
 * Función que filtra por enfermedad
 * 
 * @param {string} pEnfermedad enfermedad para hacer el filtro
 * @returns array con los pacientes que cumplan con el filtro de enfermedad
 */
function filtrarPorEnfermedad(pEnfermedad) {
    let hospitalFiltrado = [];
    for (let paciente of hospital) {
        if (paciente.diagnostico === pEnfermedad) {
            hospitalFiltrado.push(paciente);
        }
    }
    return hospitalFiltrado;
}

/**
 * Función que filtra a partir del último caracter del numeross del paciente
 * 
 * @param {string} pCaracter caracter mediante el cual filtraremos
 * @returns Array con los pacientes filtrados
 * 
 */
function filtrarPorNumSS(pCaracter) {
    // Inicializo el array vacío
    let hospitalFiltrado = [];
    // Recorro la lista de pacientes
    for (let paciente of hospital) {
        // Para cada paciente
        // Recupero la longitud de su numeross
        let longitudNumeroSS = paciente.numeross.length;
        // Recupero el último caracter del numeross (a través de la longitud anterior)
        let ultimoCaracter = paciente.numeross[longitudNumeroSS - 1];
        // Compruebo si el último caracter es igual al que recibo por parámetro
        if (ultimoCaracter === pCaracter) {
            hospitalFiltrado.push(paciente);
        }
    }
    return hospitalFiltrado;
}


/**
 * 
 * EJECUCIÓN DE LOS MÉTODOS
 * 
 */

// filtrarPorEdad(45, 55);

let pacientesFiltrados = filtrarPorEnfermedad('Gripe');
for (let paciente of pacientesFiltrados) {
    // mostrarPaciente(paciente);
}

let pacientesFiltradosNumSS = filtrarPorNumSS('5');
for (let paciente of pacientesFiltradosNumSS) {
    mostrarPaciente(paciente);
}