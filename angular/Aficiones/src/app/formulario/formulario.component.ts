import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() hobbieEnviado: EventEmitter<any>;

  hobbie: any;
  nombre: string;
  aficion: string;


  constructor() {
    this.hobbie = {};
    this.hobbieEnviado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarDatos() {
    this.hobbie.nombre = this.nombre;
    this.hobbie.aficion = this.aficion;
    /*console.log(this.hobbie);*/
    this.hobbieEnviado.emit(this.hobbie);
    /*
    {
      nombre:'Juan'
      aficion: 'Basket'
    }
    */
  }

}
