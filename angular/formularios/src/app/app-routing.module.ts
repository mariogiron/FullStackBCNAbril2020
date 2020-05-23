import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/template' },
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent },
  { path: '**', redirectTo: '/template' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
