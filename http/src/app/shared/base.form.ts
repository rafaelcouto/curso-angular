import {FormGroup} from '@angular/forms';
import {FormularioUtilService} from './services/formulario-util.service';

export abstract class BaseForm {

  private innerFormulario: FormGroup;
  formularioUtil: FormularioUtilService;

  get formulario() {
    return this.innerFormulario;
  }

  set formulario(formGroup: FormGroup) {
    this.innerFormulario = formGroup;
    this.formularioUtil = new FormularioUtilService(formGroup);
  }

  abstract submit();

  onSubmit() {
    if (!this.formulario.valid) {
      this.formularioUtil.markAllTouched();
      return;
    }

    this.submit();
  }


}
