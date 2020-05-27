import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[border]'
})
export class Border {
    constructor(private element: ElementRef) {

    }
    @HostListener('mouseenter') onMouseEnter() {
        this.myBorder('0 0 5px rgba(0,0,0,0.8)');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.myBorder('none');
    }

    myBorder(color: string) {
        this.element.nativeElement.style.boxShadow = color;
    }
}