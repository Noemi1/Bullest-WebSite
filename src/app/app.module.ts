import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './template-parts/contato/contato.component';
import { HeaderComponent } from './template-parts/header/header.component';
import { FooterComponent } from './template-parts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BotaoScrollTopComponent } from './template-parts/botao-scroll-top/botao-scroll-top.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import * as jquery from 'jquery';
@NgModule({
  declarations: [
    AppComponent,
    BotaoScrollTopComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [ AppComponent,  ]
})
export class AppModule { }
