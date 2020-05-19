import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: User;

  constructor(private userService: UsersService) {
    this.usuario = new User();
  }

  ngOnInit(): void {
  }

  async onClickGuardar() {
    const mensaje: string = await this.userService.addUser(this.usuario);
    this.usuario = new User();
    alert(mensaje);
  }

}
