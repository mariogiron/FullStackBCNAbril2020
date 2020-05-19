import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-lista-emails',
  templateUrl: './lista-emails.component.html',
  styleUrls: ['./lista-emails.component.css']
})
export class ListaEmailsComponent implements OnInit {

  arrUsers: User[];

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    // Sin promesas
    // this.arrUsers = this.usersService.getAllUsers();

    // Promesa then-catch
    /* this.usersService.getAllPromise()
      .then(usuarios => {
        this.arrUsers = usuarios;
      })
      .catch(err => console.log(err)); */

    // asyn await
    try {
      this.arrUsers = await this.usersService.getAllPromise();
    } catch (err) {
      console.log(err);
    }

  }

  async onClickTodos() {
    this.arrUsers = await this.usersService.getAllPromise();
  }

  async onClickActivos() {
    this.arrUsers = await this.usersService.getActivos();
  }

  async onChangeDepartamento($event) {
    const departamento = $event.target.value;
    if (departamento !== '') {
      this.arrUsers = await this.usersService.getUserByDepartment(departamento);
    }
    else {
      this.arrUsers = await this.usersService.getAllPromise();
    }
  }

}
