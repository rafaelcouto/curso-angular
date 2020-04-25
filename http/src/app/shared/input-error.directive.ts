import {Directive, OnInit, OnDestroy, ElementRef, Renderer2, Input, DoCheck} from '@angular/core';
import {FormControl} from "@angular/forms";
import {observeOn} from "rxjs/operators";

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[inputError]'
})
export class InputErrorDirective implements DoCheck {

  formControl: FormControl;

  @Input('inputError') set isInvalid(formControl: FormControl) {
    this.formControl = formControl;
  }

  ngDoCheck() {
    if (!this.formControl.valid && this.formControl.touched) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

}
