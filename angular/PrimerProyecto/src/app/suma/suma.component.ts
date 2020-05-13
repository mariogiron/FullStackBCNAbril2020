import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'neo-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;

  @Output() sumaRealizada: EventEmitter<number>;

  resultado: number;

  constructor() {
    this.sumaRealizada = new EventEmitter();
  }

  ngOnInit(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
    this.sumaRealizada.emit(this.resultado);
  }

  devolverResultado() {
    alert(this.resultado);
  }

}
