import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person.model';

@Pipe({
  name: 'personasLetraA'
})
export class PersonasLetraAPipe implements PipeTransform {

  transform(arrPeople: Person[]): any {

    arrPeople = arrPeople.filter( person => person.name.substr(0,1) === 'A' );

    return arrPeople;

  }

}
