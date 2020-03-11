import { ContatoComponent } from './template-parts/contato/contato.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template-parts/header/header.component';
import { FooterComponent } from './template-parts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BotaoScrollTopComponent } from './template-parts/botao-scroll-top/botao-scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoScrollTopComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
