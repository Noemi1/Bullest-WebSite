import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoScrollTopComponent } from './template-parts/botao-scroll-top/botao-scroll-top.component';
import { BotaoScrollDownComponent } from './template-parts/botao-scroll-down/botao-scroll-down.component';
import { ContatoComponent } from './template-parts/contato/contato.component';
import { FooterComponent } from './template-parts/footer/footer.component';
import { HeaderComponent } from './template-parts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BotaoScrollTopComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    BotaoScrollDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent,  ]
})
export class AppModule { }
