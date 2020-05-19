export class User {
    nombre: string;
    email: string;
    edad: number;
    departamento: string;
    activo: boolean;

    constructor(pNombre: string = '', pEmail: string = '', pEdad: number = 0, pDepartamento = 'staff', pActivo = true) {
        this.nombre = pNombre;
        this.email = pEmail;
        this.edad = pEdad;
        this.departamento = pDepartamento;
        this.activo = pActivo;
    }
}
