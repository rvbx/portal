import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[rvbxButton], a[rvbxButton]',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  constructor(private _elementRef: ElementRef<HTMLButtonElement>) { }

  @Input('rvbxButton') tipoBotao: string = 'primaryButton';

  ngOnInit(): void {
    const element = this._elementRef.nativeElement;
    element.classList.add('btn');
    element.classList.add(this.getClass(this.tipoBotao));
  }

  getClass(tipoBotao): string {
    console.log(tipoBotao);
    switch (this.tipoBotao) {
      case 'secondaryButton':
        return 'btn-secondary';
      default:
        return 'btn-primary';
    }
  }
}
