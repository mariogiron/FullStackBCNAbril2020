import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() tareas: any[];
  arrTareas: any[];

  constructor() {
    this.arrTareas = [];
  }

  ngOnInit(): void {
    this.arrTareas = this.tareas;
    console.log('componente', this.arrTareas);
  }

}
