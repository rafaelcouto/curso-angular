import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styles: [],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Output() blur = new EventEmitter();
  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() control: FormControl;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  constructor() {
  }

  onBlur() {
    this.blur.emit();
    this.onTouchedCb(this.innerValue);
  }

  onChangeCb: (_: any) => void = () => {
  };
  onTouchedCb: (_: any) => void = () => {
  };

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  writeValue(v: any): void {
    this.value = v;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

}
