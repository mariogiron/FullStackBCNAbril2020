import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { HomeEsComponent } from './home-es/home-es.component';
// import { HomeEnComponent } from './home-en/home-en.component';
// import { HomeCatComponent } from './home-cat/home-cat.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/es' },
  { path: 'home/:language', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
