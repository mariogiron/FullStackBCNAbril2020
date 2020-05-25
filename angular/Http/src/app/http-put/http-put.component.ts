import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-http-put',
  templateUrl: './http-put.component.html',
  styleUrls: ['./http-put.component.css']
})
export class HttpPutComponent implements OnInit {

  arrPost: any[];
  postActualizar: any;

  constructor(private peticionesService: PeticionesService) {
    this.postActualizar = {};
  }

  async ngOnInit() {
    this.arrPost = await this.peticionesService.getPost();
    this.arrPost = this.arrPost.splice(1, 4);
  }

  actualizarPost(pId) {
    this.postActualizar = this.arrPost.find(post => {
      return post.id === pId;
    });
    // console.log(this.postActualizar);
  }

  async enviar() {
    // tengo que pasar al servicio el objeto completo que quiero actualizar.
    const mensaje = await this.peticionesService.updatePost(this.postActualizar);
    console.log(mensaje);

  }

}
