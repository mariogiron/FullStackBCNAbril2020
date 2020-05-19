import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  usuario: string;
  pass: string;

  constructor(private router: Router) {
    this.usuario = '';
    this.pass = '';
  }

  ngOnInit(): void {
  }

  login() {
    if (this.usuario === 'Juanan' && this.pass === '123456') {
      // alert('Usuario logado');
      // navegacion a otro componente cuando acabe de recoger la info del formulario.
      this.router.navigate(['/info'])
    } else {
      alert('Usuario no existe');
    }
  }

}
