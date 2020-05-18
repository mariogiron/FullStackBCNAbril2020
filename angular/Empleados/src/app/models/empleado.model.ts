export class Empleado {

    nombre: string;
    apellidos: string;
    dni: string;
    email: string;
    departamento: string;
    imagen: string;
    activo: boolean;

    constructor(
        pNombre: string = '', pApellidos: string = '',
        pDni: string = '', pEmail: string = '',
        pDepartamento: string = '', pActivo: boolean = true, pImagen: string = '') {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.dni = pDni;
        this.email = pEmail;
        this.departamento = pDepartamento;
        this.activo = pActivo;
        this.imagen = pImagen;
    }
}