import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor')
  private backgroundColor: string;

  get BackgroundColor() {
    return this.backgroundColor;
  }

  set BackgroundColor(value: string) {
    console.log(value);
    this.backgroundColor = value;
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter')
  onMouseOver() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.BackgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.BackgroundColor = 'white';
  }

}
