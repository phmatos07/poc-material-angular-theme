import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [BadgeComponent],
  declarations: [BadgeComponent]
})
export class BadgeModule { }
