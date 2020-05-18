import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() empleadoNuevo: EventEmitter<Empleado>;
  empleado: Empleado;

  constructor() {
    this.empleadoNuevo = new EventEmitter();
    this.empleado = new Empleado();
  }

  ngOnInit(): void {
  }

  onClick() {
    // console.log(this.empleado);
    this.empleadoNuevo.emit(this.empleado);
    this.empleado = new Empleado();
  }

}
