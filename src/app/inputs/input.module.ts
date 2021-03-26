import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [InputComponent],
  declarations: [InputComponent]
})
export class InputModule { }
