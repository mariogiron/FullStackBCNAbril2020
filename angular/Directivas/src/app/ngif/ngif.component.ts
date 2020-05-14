import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  seccion: string;
  constructor() {
    this.seccion = 'sobremi';
  }

  ngOnInit(): void {
  }

  cargarSeccion($event) {
    this.seccion = $event.target.dataset.seccion;
  }

}
