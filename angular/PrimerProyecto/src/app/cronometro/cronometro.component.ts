import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  contador: number;

  constructor() {
    this.contador = 2;
  }

  ngOnInit(): void {
  }

  iniciarCronometro() {
    setInterval(() => {
      this.contador = this.contador + 2;
    }, 1000)
  }


}
