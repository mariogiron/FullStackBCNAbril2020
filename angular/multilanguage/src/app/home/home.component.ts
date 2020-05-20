import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdiomasService } from '../idiomas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  texto: any;

  constructor(
    private activedRoute: ActivatedRoute,
    private idiomaservice: IdiomasService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(async params => {
      // console.log(params.language);
      // this.idiomaservice.getIdiomas(params.language)
      //   .then(objetoTextos => {
      //     this.texto = objetoTextos;
      //   });
      this.texto = await this.idiomaservice.getIdiomas(params.language);
    })
  }

}
