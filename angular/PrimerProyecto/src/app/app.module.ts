import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SumaComponent } from './suma/suma.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CronometroComponent,
    SumaComponent,
    DetallePersonaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
