import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      direccion: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      edad: new FormControl('', [
        this.edadValidador,
      ]),
    });

  }

  ngOnInit(): void {
  }

  recogerDatos() {
    console.log(this.formulario.value);
  }

  edadValidador(control) {
    const edad = parseInt(control.value);
    if (edad >= 18 && edad <= 65) {
      return null;
    } else {
      return { edadValidador: 'La edad tiene que ser entre 18 y 65 años' };
    }
  }

}
