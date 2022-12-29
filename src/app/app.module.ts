import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



// !Modulos personalizados

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    WhatsappModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
