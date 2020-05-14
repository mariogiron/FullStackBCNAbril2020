import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrTareas: any[];

  constructor() {
    this.arrTareas = [
      {
        id: 1,
        title: 'Estudiar Javascript',
        priority: 'urgente'
      },
      {
        id: 2,
        title: 'Sacar al perro',
        priority: 'diario'
      },
      {
        id: 3,
        title: 'Leer un libro',
        priority: 'mensual'
      },
      {
        id: 4,
        title: 'Ir a la compra',
        priority: 'urgente'
      },
    ];
  }

}
