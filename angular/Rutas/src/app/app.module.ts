import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';
import { ProductoComponent } from './producto/producto.component';
import { RelacionadosComponent } from './producto/relacionados/relacionados.component';
import { ComentariosComponent } from './producto/comentarios/comentarios.component';
import { EspecificacionesComponent } from './producto/especificaciones/especificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ContactoComponent,
    InfoComponent,
    ProductoComponent,
    RelacionadosComponent,
    ComentariosComponent,
    EspecificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
