import {FormArray, FormControl, FormGroup} from "@angular/forms";

export class CustomValidators {

  static requiredMinCheckbox(min = 1) {
    return (formArray: FormArray) => {
      const totalChecked = formArray.controls.filter((v) => v.value).length;
      return totalChecked >= min ? null : {required: true}
    }
  }

  static cepValidator(control: FormControl) {

    const cep = control.value;
    if (!cep || cep === '') {
      return null;
    }

    const validaCep = /^[0-9]{8}$/;
    return (validaCep.test(cep)) ? null : {invalid: true};
  }

  static equalsTo(otherFieldName: string) {
    return (formControl: FormControl) => {

      if (!formControl.value) {
        return null;
      }

      if (!otherFieldName) {
        throw new Error('É necessário informar um campo');
      }

      let formGroup: FormGroup = (<FormGroup>formControl.root);
      if (!formGroup || !formGroup.controls) {
        return null;
      }

      const otherField = formGroup.get(otherFieldName);
      if (!otherField) {
        throw new Error('É necessário informar um campo válido');
      }

      return (otherField.value === formControl.value) ? null : {notEqualsTo: {otherFieldName: otherFieldName}};
    };
  }

  static getErrorMessage(fieldName: string, errorName: string, errorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório`,
      'email': 'Email inválido',
      'emailExiste': 'Esse email já está sendo utilizado',
      'invalid': `${fieldName} inválido`,
      'notEqualsTo': `A confirmação de ${errorValue.otherFieldName} está diferente do campo ${errorValue.otherFieldName}`
    };
    return config[errorName] ? config[errorName] : null;
  }

}
