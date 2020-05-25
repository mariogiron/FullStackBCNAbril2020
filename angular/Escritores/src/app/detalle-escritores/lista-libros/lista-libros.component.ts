import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../libros.service';
import { Libro } from 'src/app/models/libro.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  arrLibros: Libro[];

  constructor(
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // aqui llamo al servicio para que me cargue el array de libros que pintaré en el html
    // tengo que obtener el id del escritor de la ruta /escritor/id/libros
    this.activatedRoute.parent.params.subscribe(async params => {
      // console.log('parametro', params.idEscritor);
      this.arrLibros = await this.librosService.getListaLibrosByEscritorId(parseInt(params.idEscritor));
      console.log(this.arrLibros);
    });
  }

}
