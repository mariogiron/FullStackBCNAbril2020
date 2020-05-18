import { Component, OnInit } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = new Array(new Empleado('Juan', 'Perez', '45678D', 'juan@neoland.es', 'desarrollo', false, 'https://api.adorable.io/avatars/285/abott@adorable.png'));
  }

  ngOnInit() {
    console.log(this.arrEmpleados);
  }

  onEmpleadoNuevo($event) {
    // console.log('appcomponent', $event);
    this.arrEmpleados.push($event);
  }
}
