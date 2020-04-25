import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CustomValidators} from '../../../../../formularios/src/app/shared/custom-validators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styles: []
})
export class ErrorMessageComponent implements OnInit {

  @Input() customMessages: any;
  @Input() control: FormControl;
  @Input() label: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  get errorMessage() {

    if (!this.control.touched) {
      return null;
    }

    // tslint:disable-next-line:forin
    for (const propertyName in this.control.errors) {
      // Primeiro verificamos se foi há alguma mensagem personalizada
      if (this.customMessages && this.customMessages.hasOwnProperty(propertyName)) {
        return this.customMessages[propertyName];
      }

      // Depois buscamos nas mensagens padrão
      return CustomValidators.getErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
    }
  }

}
