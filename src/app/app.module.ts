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

import { ToastrModule, IndividualConfig } from 'ngx-toastr';
import { CasesComponent } from './template-parts/cases/cases.component';
import { CasesDetalhesComponent } from './template-parts/cases-detalhes/cases-detalhes.component';
import { ServicosComponent } from './template-parts/servicos/servicos.component';
import { SobreNosComponent } from './template-parts/sobre-nos/sobre-nos.component';
import { FaqComponent } from './template-parts/faq/faq.component';
import { FeedComponent } from './template-parts/feed/feed.component';


// Layout
import { AccordionModule } from 'primeng/accordion';
// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxMaskModule, IConfig } from 'ngx-mask'


import { Animacoes } from "./shared/animacoes";
import { ClientesComponent } from './template-parts/clientes/clientes.component';


// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'vertical',
//   slidesPerView: 'auto'
// };

export let options: Partial<IConfig> | (() => Partial<IConfig>);
 
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
    CasesComponent,
    CasesDetalhesComponent,
    ServicosComponent,
    SobreNosComponent,
    FaqComponent,
    FeedComponent,
    ClientesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

    // Layout
    AccordionModule,
    // SwiperModule,
    NgxMaskModule.forRoot(options),
    
  ],
  providers: [
    // { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG, } ,
    Animacoes,
  ],
  bootstrap: [ AppComponent,  ]
})
export class AppModule { }
