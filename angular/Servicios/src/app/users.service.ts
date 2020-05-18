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
      new User('Juan', 'juan@neoland.es'),
      new User('Mario', 'mario@neoland.es'),
      new User('Sol', 'sol@neoland.es'),
    ];
  }

  getAllUsers(): User[] {
    return this.usuarios;
  }
}
