import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle-escritores',
  templateUrl: './detalle-escritores.component.html',
  styleUrls: ['./detalle-escritores.component.css']
})
export class DetalleEscritoresComponent implements OnInit {

  detalleEscritor: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) {
  }

  ngOnInit(): void {
    this.obtenerIdEscritor();
  }

  obtenerIdEscritor() {
    this.activatedRoute.params.subscribe(async params => {
      // console.log(params.idEscritor);
      const id = parseInt(params.idEscritor);
      this.detalleEscritor = await this.escritoresService.getEscritorById(id);
      console.log(this.detalleEscritor);
    });
  }

}
