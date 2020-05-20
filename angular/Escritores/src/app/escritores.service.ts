import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Promise<Escritor[]> {
    const prom: Promise<Escritor[]> = new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
    return prom;
  }

  getEscritorById(pId: number): Promise<Escritor> {
    const prom: Promise<Escritor> = new Promise((resolve, reject) => {
      const escritorEncontrado = ESCRITORES.find(escritor => {
        return escritor.id === pId;
      });
      resolve(escritorEncontrado);
    });
    return prom;
  }
}
