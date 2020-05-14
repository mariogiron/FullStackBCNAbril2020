import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  @Output() tareaEnviada: EventEmitter<any>;

  titulo: string;
  prioridad: string;
  tarea: any;
  idTarea: number;

  constructor() {
    this.tareaEnviada = new EventEmitter();
    this.titulo = '';
    this.prioridad = '';
    this.tarea = {};
    this.idTarea = 5;
  }

  ngOnInit(): void {
  }

  recogerDatos() {
    this.tarea = {
      id: this.idTarea,
      title: this.titulo,
      priority: this.prioridad
    };
    this.idTarea++;
    this.tareaEnviada.emit(this.tarea);
  }

}
