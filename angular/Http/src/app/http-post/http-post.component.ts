import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})
export class HttpPostComponent implements OnInit {

  title: string;
  body: string;

  constructor(private peticionesServices: PeticionesService) {
    this.title = '';
    this.body = '';
  }

  ngOnInit(): void {
  }

  async recogerInfo() {
    //console.log(this.title);
    // console.log(this.body);
    const peticion = await this.peticionesServices.createPost(this.title, this.body);
    console.log(peticion); // esto me va devolver en principio el post que he metido con un id nuevo de post
  }

}
