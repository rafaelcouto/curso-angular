import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'busca-reativa'},
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
  {path: 'upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
  {path: 'busca-reativa', loadChildren: () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
