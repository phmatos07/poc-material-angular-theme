import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class CardModule { }
