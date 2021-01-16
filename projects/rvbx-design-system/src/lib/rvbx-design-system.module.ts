import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent, InputDirective } from './input/input';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    InputComponent,
    InputDirective,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    InputDirective,
    ButtonComponent
  ]
})
export class RvbxDesignSystemModule { }
