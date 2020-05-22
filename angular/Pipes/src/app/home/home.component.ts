import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrPeople: Person[] = [];

  percentage: number = 0.25;

  dateFull: true;

  constructor() { 

    this.arrPeople.push(new Person("John","1984-01-05",60000));
    this.arrPeople.push(new Person("Alice","1964-03-09",30000));
    this.arrPeople.push(new Person("Albert","1944-05-12",20000));
    this.arrPeople.push(new Person("Bruno","1924-05-12",26000));
    this.arrPeople.push(new Person("Hugo","1914-05-12",21000));
    this.arrPeople.push(new Person("Arlette","1914-05-12",23000));

    

    console.log(this.arrPeople);

  }

  ngOnInit() {

  }

  get formatDateInComponent() {

    if (this.dateFull) {
      return 'dd/MM/YYYY';
    }
    else {
      return 'dd/MM';
    }


  }

}
