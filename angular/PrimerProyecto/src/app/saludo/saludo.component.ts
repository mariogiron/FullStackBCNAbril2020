import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  /*declarar propiedades*/
  nombre: string;
  numero: number;
  identificador: string;

  constructor() {
    /* inicializo */
    let valor: number = 4;
    this.numero = valor;
    this.nombre = 'Juan';
    this.identificador = 'miparrafito';
    setTimeout(() => {
      this.nombre = 'Gabriel';
    }, 5000)

  }

  ngOnInit(): void {
  }

  mostrarMensaje() {
    return 'Este es mi mensaje';
  }

  pulsarBoton() {
    //alert('pulsado');
    this.identificador = 'otroid';
  }

  cambiarSelect($event) {
    console.log($event.target.value);
  }

  cambiarTexto($event) {
    this.nombre = $event.target.value;
  }

}
