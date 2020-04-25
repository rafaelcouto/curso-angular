import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class FormularioUtilService {

  formulario: FormGroup;

  constructor(formulario: FormGroup) {
    this.formulario = formulario;
  }

  markAllTouched(formGroup?: FormGroup | FormArray) {

    if (!formGroup) formGroup = this.formulario;

    Object.keys(formGroup.controls).forEach((nomeCampo: string) => {

      const campo = formGroup.get(nomeCampo);

      if (campo instanceof FormControl) {
        campo.markAsTouched();
      }

      if (campo instanceof FormGroup || campo instanceof FormArray) {
        this.markAllTouched(campo);
      }

    })

  }

}
