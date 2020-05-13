import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje: string;
  resultado: string;
  arrHobbies: any[];

  constructor() {
    this.resultado = '';
    this.arrHobbies = [];
  }

  pintarMensaje() {
    this.resultado = this.mensaje;
  }

  onHobbieEnviado($event) {
    // console.log('hobbieEnviado', $event);
    const hobbieTemporal = { ...$event };
    this.arrHobbies.push(hobbieTemporal);
    console.log(this.arrHobbies);
  }

}
