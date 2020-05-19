import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usuarios: User[];

  constructor() {
    // console.log('Arranca el servicio');
    this.usuarios = [
      new User('Juan', 'juan@neoland.es', 38, 'profesorado', false),
      new User('Mario', 'mario@neoland.es', 36, 'profesorado', true),
      new User('Sol', 'sol@neoland.es', 39, 'staff', true),
      new User('Carlos', 'carlos@neoland.es', 50, 'direccion', true),
      new User('Alvaro', 'alvaro@neoland.es', 35, 'comercial', true),
      new User('Pepe', 'pepe@neoland.es', 45, 'staff', false)
    ];
  }

  getAllUsers(): User[] {
    return this.usuarios;
  }

  getAllPromise(): Promise<User[]> {
    const prom = new Promise<User[]>((resolve, reject) => {
      resolve(this.usuarios);
    });
    return prom;
  }

  getActivos(): Promise<User[]> {
    const prom = new Promise<User[]>((resolve, reject) => {
      const arrFiltrado: User[] = this.usuarios.filter(usuario => usuario.activo);
      resolve(arrFiltrado);
    });
    return prom;
  }

  getUserByDepartment(pDepartamento): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado: User[] = this.usuarios.filter(usuario => usuario.departamento === pDepartamento);
      resolve(arrFiltrado);
    });
  }


  addUser(pUsuario: User): Promise<string> {
    return new Promise((resolve, reject) => {
      this.usuarios.push(pUsuario);
      resolve('Usuario guardado correctamente');
    });
  }

  /*
  reto: hacer un campo de busqueda para devolver aquellos
  registros cuyo nombre incluya el texto metido en ese
  campo.
  El metodo tiene que estar en el servicio y tiene que llamarse desde el componente listaEmails 
  */

}
