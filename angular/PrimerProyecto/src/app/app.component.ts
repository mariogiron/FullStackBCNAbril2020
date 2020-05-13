import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeros: number[];
  arrPersonas: any[];

  constructor() {
    this.numeros = new Array(1, 2, 4, 7, 83, 34);
    this.arrPersonas = new Array(
      { nombre: 'Juan', apellidos: 'Perez', edad: 18, imagen: 'https://thispersondoesnotexist.com/image' },
      { nombre: 'David', apellidos: 'Bisbal', edad: 40, imagen: 'https://thispersondoesnotexist.com/image' },
      { nombre: 'Pablo', apellidos: 'Motos', edad: 57, imagen: 'https://thispersondoesnotexist.com/image' }
    )
  }

  onSumaRealizada($event) {
    console.log('Desde appcomponent', $event);
  }
}
