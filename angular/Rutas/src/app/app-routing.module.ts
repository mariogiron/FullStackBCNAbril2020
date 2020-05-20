import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ProductoComponent } from './producto/producto.component';
import { RelacionadosComponent } from './producto/relacionados/relacionados.component';
import { ComentariosComponent } from './producto/comentarios/comentarios.component';
import { EspecificacionesComponent } from './producto/especificaciones/especificaciones.component';
import { LoginGuard } from './login.guard';

/*
* /producto/23
* /producto/200
*/

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'info', component: InfoComponent, canActivate: [LoginGuard] },
  {
    path: 'producto/:productoId', component: ProductoComponent,
    children: [
      { path: 'relacionados', component: RelacionadosComponent },
      { path: 'comentarios', component: ComentariosComponent },
      { path: 'especificaciones', component: EspecificacionesComponent }
    ]
  },
  { path: '**', redirectTo: '/servicios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
