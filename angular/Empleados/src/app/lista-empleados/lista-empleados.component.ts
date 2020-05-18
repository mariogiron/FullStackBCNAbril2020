import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input() empleados: Empleado[];
  // @Input() empleados: Array<Empleado>;

  constructor() { }

  ngOnInit(): void {
    console.log('lista-empleados', this.empleados);
  }

  cambiarEstado(pEmpleado: Empleado) {
    pEmpleado.activo = !pEmpleado.activo;
  }

}
