import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  numProductos: number;
  departamento: string;

  constructor() {
    this.numProductos = 12;
    this.departamento = 'desarrollo';
  }

  ngOnInit(): void {
  }

}
