import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import {InputErrorDirective} from "./input-error.directive";
import {InvalidFeedbackComponent} from "./invalid-feedback/invalid-feedback.component";
import {EnderecoComponent} from "./endereco/endereco.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TemplateFormComponent,
    InputErrorDirective,
    InvalidFeedbackComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class TemplateFormModule { }
