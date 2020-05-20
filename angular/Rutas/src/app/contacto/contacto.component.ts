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
      // SI el usuario existe, tengo guardar un dato isLogado = true en algun sitio donde pueda despues recogerlo.
      const isLogado = 'activo';
      localStorage.setItem('logado', isLogado);
      // navegacion a otro componente cuando acabe de recoger la info del formulario.
      this.router.navigate(['/info'])
    } else {
      alert('Usuario no existe');
    }
  }

}
