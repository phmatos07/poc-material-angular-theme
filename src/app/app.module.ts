import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BadgeModule } from './badge/badge.module';
import { ButtonsModule } from './buttons/buttons.module';
import { CardModule } from './card/card.module';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
import { HeaderModule } from './header/header.module';
import { InputModule } from './inputs/input.module';
import { TitlesModule } from './titles/titles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BadgeModule,
    ButtonsModule,
    CardModule,
    ExpansionPanelModule,
    HeaderModule,
    InputModule,
    TitlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
