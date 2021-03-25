import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule { }
