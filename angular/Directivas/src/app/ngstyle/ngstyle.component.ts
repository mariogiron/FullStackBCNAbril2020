import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  color: string;
  estilosParrafo: any;
  prioridad: string;

  constructor() {
    this.prioridad = 'urgente';
    this.color = 'blue';
    this.estilosParrafo = {
      backgroundColor: (this.prioridad === 'urgente') ? 'orange' : 'lightblue',
      fontSize: '24px',
      color: 'white'
    };
  }

  ngOnInit(): void {
    //let avance = 0;
    // setInterval(() => {
    //   avance = avance + 10;
    //   this.color = '#ff' + avance + avance;
    //   console.log(this.color);
    // }, 3000);

  }

  cambiarEstilos() {
    this.estilosParrafo.border = '2px solid black';
    this.estilosParrafo.backgroundColor = 'tomato';
    this.estilosParrafo.transition = '1s';
    this.estilosParrafo.padding = '10px';
    this.estilosParrafo.borderRadius = '20px';
  }

  cambiarFuente($event) {
    this.estilosParrafo.fontSize = $event.target.value + 'px';
  }

}
