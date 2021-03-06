import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() tareas: any[];
  @Output() tareaBorrada: EventEmitter<number>;
  @Output() tareaCompletada: EventEmitter<number>;
  arrTareas: any[];
  completed: number;

  constructor() {
    this.arrTareas = [];
    this.tareaBorrada = new EventEmitter();
    this.tareaCompletada = new EventEmitter();
    this.completed = 0;
  }

  ngOnInit(): void {
    this.arrTareas = this.tareas;
    // console.log('componente', this.arrTareas);
  }

  borrarTarea($event) {
    const id = $event.target.dataset.id;
    this.tareaBorrada.emit(id);
  }

  completarTarea($event) {
    this.completed = parseInt($event.target.dataset.id);
    this.tareaCompletada.emit(this.completed);
  }

}
