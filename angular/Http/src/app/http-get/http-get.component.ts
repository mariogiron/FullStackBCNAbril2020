import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';


@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

  arrPokemons: any[];
  pokemon: any;

  constructor(private peticionesService: PeticionesService) { }

  async ngOnInit() {
    const peticion = await this.peticionesService.getAllPokemon();
    this.arrPokemons = peticion['results'];
  }

  async cargarPokemon($event) {
    const url = $event.target.dataset.url;
    this.pokemon = await this.peticionesService.getOnePokemon(url);
    console.log(this.pokemon);
  }

}
