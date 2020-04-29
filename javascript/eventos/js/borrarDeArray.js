const contactos = [
    { nombre: 'Mario', direccion: 'gran via 32', telefono: 99192912, tipo: 'amigos' },
    { nombre: 'Luis', direccion: 'gran via 21', telefono: 99192912, tipo: 'familiares' },
    { nombre: 'Rosa', direccion: 'gran via 12', telefono: 99192912, tipo: 'trabajo' },
    { nombre: 'Manuel', direccion: 'gran via 43', telefono: 99192912, tipo: 'amigos' },
    { nombre: 'Alicia', direccion: 'gran via 56', telefono: 99192912, tipo: 'amigos' },
    { nombre: 'Elena', direccion: 'gran via 88', telefono: 99192912, tipo: 'trabajo' },
];

const numeros = [1, 22, 3, 4, 5, 7];
console.log(numeros.indexOf(5));

const indice = contactos.findIndex((contacto) => {
    return contacto.nombre === 'Rosa';
});
contactos.splice(indice, 1);
console.log(contactos);