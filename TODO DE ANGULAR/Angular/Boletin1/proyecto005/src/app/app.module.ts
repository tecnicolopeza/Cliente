import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CronometroComponent } from './elementos-module/cronometro/cronometro.component';

import { MatButtonModule } from '@angular/material/button'; //para botones angular
@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
