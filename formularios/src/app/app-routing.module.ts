import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';


const routes: Routes = [
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'data-form', component: DataFormComponent},
  {path: '', redirectTo: 'data-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
