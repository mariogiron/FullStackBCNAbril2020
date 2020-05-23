import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';



@Component({
  selector: 'app-http-delete',
  templateUrl: './http-delete.component.html',
  styleUrls: ['./http-delete.component.css']
})
export class HttpDeleteComponent implements OnInit {
  arrPost: any[];

  constructor(private peticionesService: PeticionesService) { }

  async ngOnInit() {
    this.arrPost = await this.peticionesService.getPost();
    this.arrPost = this.arrPost.splice(1, 4);
  }

  async borrar(pId) {
    const mensaje = await this.peticionesService.deletePost(pId);
    console.log(mensaje);
  }

  //CRUD 

}
