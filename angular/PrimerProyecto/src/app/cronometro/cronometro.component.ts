import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  /* Cuidado con el tipo de los INPUT. Suele ser string */
  @Input() inicio: string;
  @Input() fin: string;

  contador: number;

  constructor() {
    /*aqui no tenemos disponibles los valores Input*/
    this.contador = Math.round(Math.random() * 20);
  }

  ngOnInit(): void {
    /*aqui ya tenemos disponibles los valores Input*/
    /* console.log('NGONINIT', this.inicio); */
    if (this.inicio) {
      this.contador = parseInt(this.inicio);
    }

  }

  iniciarCronometro() {
    const intervalo = setInterval(() => {
      if (this.contador === parseInt(this.fin)) {
        /* que se pare mi componente que deje de contar */
        clearInterval(intervalo);
      }
      else {
        this.contador = this.contador + 2;
      }
    }, 1000)
  }


}
