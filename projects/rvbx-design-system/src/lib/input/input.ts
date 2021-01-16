import { Component, ElementRef, HostListener, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'rvbx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Directive({
  selector: 'input[rvbxInputText]'
})
export class InputDirective {

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>
  ) {
    _elementRef.nativeElement;
  }

  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  manipulaLabel(event) {
    const input: HTMLInputElement = this._elementRef.nativeElement;
    const label = <HTMLElement>input.previousElementSibling;
    if (!input.value) {
      if (event == false && label.classList.contains('active'))
        label.classList.remove('active');
      else if (event == true && !label.classList.contains('active'))
        label.classList.add('active');
    }
  }

}
