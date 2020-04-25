import {Directive, OnInit, OnDestroy, ElementRef, Renderer2, HostListener, Input} from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[inputError]'
})
export class InputErrorDirective implements OnInit, OnDestroy {

  @Input('inputError') model: NgModel | FormControl;

  modelValueChangeSubscription: Subscription;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    this.modelValueChangeSubscription = this.model.valueChanges.subscribe(() => {
      this.changeElementClass();
    });

  }

  changeElementClass() {

    if (!this.model.valid && this.model.touched) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
    }

  }

  @HostListener('blur')
  onMouseOver() {
    this.changeElementClass();
  }

  ngOnDestroy() {
    this.modelValueChangeSubscription.unsubscribe();
  }

}
