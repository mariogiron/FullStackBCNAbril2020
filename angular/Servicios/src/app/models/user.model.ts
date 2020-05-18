export class User {
    nombre: string;
    email: string;

    constructor(pNombre: string = '', pEmail: string = '') {
        this.nombre = pNombre;
        this.email = pEmail;
    }
}
