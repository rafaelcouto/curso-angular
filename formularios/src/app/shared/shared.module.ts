import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FormularioUtilService} from "./services/formulario-util.service";
import {DropdownService} from "./services/dropdown.service";
import {ConsultaCepService} from "./services/consulta-cep.service";
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [FormularioUtilService, DropdownService, ConsultaCepService],
  exports: [
    ErrorMessageComponent
  ],
})
export class SharedModule {
}
