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
      { id: 1, nombre: 'Leche desnatada', descripcion: 'Leche desnatada pascual' },
      { id: 2, nombre: 'Pan', descripcion: 'pan de pueblo del rico' },
      { id: 3, nombre: 'Pizza', descripcion: 'piza italiana de la toscana' },
      { id: 4, nombre: 'Carne', descripcion: 'Carne de ternera Angus' },
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idProducto = parseInt(params.productoId);
      this.productoCargado = this.arrProductos.find(producto => producto.id === idProducto);
    })
  }

}
