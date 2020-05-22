import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person.model';

@Pipe({
  name: 'personasLetra'
})
export class PersonasLetraPipe implements PipeTransform {

  transform(arrPeople: Person[], strLetra:string): any {

    arrPeople = arrPeople.filter( (person) => {
      
      return person.name.substr(0,1) === strLetra 
    
    }
    );

    return arrPeople;

  }

}
