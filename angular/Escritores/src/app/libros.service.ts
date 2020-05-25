import { Injectable } from '@angular/core';
import { LIBROS } from './db/libro.db';
import { Libro } from './models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getListaLibrosByEscritorId(pEscritorId: number): Promise<Libro[]> {

    const prom: Promise<Libro[]> = new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter(libro => {
        return libro.escritor === pEscritorId;
      });
      if (arrFiltrado.length > 0) {
        resolve(arrFiltrado);
      } else {
        reject('No se han encontrado ningun libro');
      }

    });
    return prom;
  }

}

