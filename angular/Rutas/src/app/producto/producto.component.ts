import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  arrProductos: any[];
  productoCargado: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.arrProductos = new Array(
      { id: 1, nombre: 'Leche desnatada' },
      { id: 2, nombre: 'Pan' },
      { id: 3, nombre: 'Pizza' },
      { id: 4, nombre: 'Carne' },
    );
    this.productoCargado = this.arrProductos[0];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idProducto = parseInt(params.productoId);
      this.productoCargado = this.arrProductos.find(producto => producto.id === idProducto);
    })
  }

}
