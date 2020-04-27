const hospital = [
    { nombre: 'Juan', apellido: 'Perez', diagnostico: 'Cefaleas', edad: 36, numeross: 'A34905' },
    { nombre: 'Juan', apellido: 'Gutierrez', diagnostico: 'Cefaleas', edad: 33, numeross: 'A34907' },
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
const mostrarPaciente = (pPaciente) => {
    console.log(`NOMBRE: ${pPaciente.nombre} ${pPaciente.apellido}
    DIAGNÓSTICO: ${pPaciente.diagnostico}
    EDAD: ${pPaciente.edad}
    NUMEROSS: ${pPaciente.numeross}
    `);
}

const filtrarPorEdad = (pEdadMin = 18, pEdadMax = 30) => {
    return hospital.filter(paciente => paciente.edad >= pEdadMin && paciente.edad <= pEdadMax);
}

const filtrarPorEnfermedad = (pEnfermedad) => {
    return hospital.filter(paciente => paciente.diagnostico === pEnfermedad);
}

const filtrarPorNumSS = (pCaracter) => {
    return hospital.filter(paciente => {
        const ultimoCaracter = paciente.numeross[paciente.numeross.length - 1];
        return ultimoCaracter === pCaracter;
    });
}

const hospitalFiltradoEdad = filtrarPorEdad(12, 30);
for (let paciente of hospitalFiltradoEdad) {
    // mostrarPaciente(paciente);
}

const hospitalFiltradoEnfermedad = filtrarPorEnfermedad('Cefaleas');
for (let paciente of hospitalFiltradoEnfermedad) {
    // mostrarPaciente(paciente);
}

const hospitalFiltradoNumSS = filtrarPorNumSS('1');
for (let paciente of hospitalFiltradoNumSS) {
    mostrarPaciente(paciente);
}