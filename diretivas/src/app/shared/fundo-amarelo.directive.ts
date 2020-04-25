import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}
