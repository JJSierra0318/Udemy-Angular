import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // renderer is a better approach to access and change the DOM
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue'); */
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
