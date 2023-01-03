import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';




// !Modulos personalizados

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        WhatsappModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ]
})
export class AppModule { }
