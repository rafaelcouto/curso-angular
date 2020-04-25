import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoComponent } from './novo/novo.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent, NovoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
