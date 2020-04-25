import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertModalComponent} from './alert-modal/alert-modal.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {ErrorMessageComponent} from './error-message/error-message.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {InputErrorDirective} from './input-error.directive';
import {ConfirmModalComponent} from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [AlertModalComponent, ErrorMessageComponent, InputFieldComponent, InputErrorDirective, ConfirmModalComponent],
  exports: [
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule
  ]
})
export class SharedModule {
}
