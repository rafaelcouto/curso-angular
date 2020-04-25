import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputErrorDirective} from "./input-error.directive";
import {SharedModule} from "../shared/shared.module";
import {InvalidFeedbackComponent} from "./invalid-feedback/invalid-feedback.component";
import {InputFieldComponent} from "./input-field/input-field.component";

@NgModule({
  declarations: [
    DataFormComponent,
    InputErrorDirective,
    InvalidFeedbackComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class DataFormModule { }
