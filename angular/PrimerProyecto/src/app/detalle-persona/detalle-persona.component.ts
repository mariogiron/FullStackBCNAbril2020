import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  @Input() persona: any;
  numeroSS: string;
  constructor() {
    this.numeroSS = 'A12345';
  }

  ngOnInit(): void {
    console.log(this.persona);
  }

}
