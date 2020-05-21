import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { DetalleEscritoresComponent } from './detalle-escritores/detalle-escritores.component';
import { ListaLibrosComponent } from './detalle-escritores/lista-libros/lista-libros.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/escritores' },
  { path: 'escritores', component: ListaEscritoresComponent },
  {
    path: 'escritor/:idEscritor', component: DetalleEscritoresComponent, children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  },
  { path: '**', redirectTo: '/escritores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
