import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})//属性选择器

export class HighLightDirective {

  constructor(private el: ElementRef, private  renderer: Renderer){
    renderer.setElementStyle(el.nativeElement, 'background', 'null');
  }// 构造函数

  @HostListener('mouseover') onMouseOver(){
    this.hightlight ('bule');
  }

  @HostListener('mouseleave') onMouseOut(){
    this.hightlight ('yellow');
  }

  private hightlight(color: string){
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
