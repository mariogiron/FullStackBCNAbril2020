import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonasLetraAPipe } from './personas-letra-a.pipe';
import { PersonasLetraPipe } from './personas-letra.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SumaNumerosPipe } from './suma-numeros.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonasLetraAPipe,
    PersonasLetraPipe,
    FormatDatePipe,
    CalculadoraComponent,
    SumaNumerosPipe
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
