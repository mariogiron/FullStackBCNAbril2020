import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrTareas: any[];
  tarea: any;

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

  tareaEnviada($event) {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

  tareaBorrada($event) {
    // console.log('tareaBorrada', $event);

    // primero tengo que buscar la posicion del id en mi array -> findIndex

    const posicionBorrar = this.arrTareas.findIndex(tarea => {
      return tarea.id === parseInt($event);
    });
    // despues borrare ese elemento con splice pasandole la posicion y 1 como cantidad de valor

    this.arrTareas.splice(posicionBorrar, 1);
  }

}
