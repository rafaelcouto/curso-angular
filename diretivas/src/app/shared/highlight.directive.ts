import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {


  @Input() defaultColor = 'white';
  // tslint:disable-next-line: no-input-rename
  @Input('hightlight') highlightColor = 'yellow';

  @HostBinding('style.backgroundColor')
  private backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter')
  onMouseOver() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
