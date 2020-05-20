import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  texts: any;

  constructor() {

    this.texts = {
      es: {
        header_title: 'Bienvenido',
        lead: 'Copyright - Todos los derechos reservados.',
        message: 'Hola como estas?'
      },
      en: {
        header_title: 'Welcome',
        lead: 'Copyright - All rights reserved.',
        message: 'What!!!!'
      },
      cat: {
        header_title: 'Benvingut',
        lead: 'Copyright - Tots el drets reservats.',
        message: 'Pep Guardiola'
      }
    };


  }

  getIdiomas(pIdioma: string): Promise<any> {
    const prom = new Promise<any>((resolve, reject) => {
      if (pIdioma === 'es') {
        resolve(this.texts.es);
      }
      if (pIdioma === 'en') {
        resolve(this.texts.en);
      }
      if (pIdioma === 'cat') {
        resolve(this.texts.cat);
      }
    });
    return prom;
  }





}
