import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule { }
