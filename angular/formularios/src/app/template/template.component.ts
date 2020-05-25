import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  arrUsuarios: User[];

  constructor() {
    this.arrUsuarios = [];
  }

  ngOnInit(): void {
  }

  recogerDatos(pForm) {
    this.arrUsuarios.push(pForm);
    // console.log(this.arrUsuarios);
    

  }

}
