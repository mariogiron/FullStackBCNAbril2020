import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-aficiones',
  templateUrl: './lista-aficiones.component.html',
  styleUrls: ['./lista-aficiones.component.css']
})
export class ListaAficionesComponent implements OnInit {

  @Input() hobbies: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
