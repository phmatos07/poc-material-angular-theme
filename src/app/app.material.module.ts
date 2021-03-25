import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  MatGridListModule,
  MatIconModule,
  MatSliderModule,
  MatToolbarModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class AppMaterialModule { }
