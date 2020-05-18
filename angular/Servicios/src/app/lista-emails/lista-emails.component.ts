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

  ngOnInit(): void {
    this.arrUsers = this.usersService.getAllUsers();
    //console.log(this.arrUsers);
  }

}
