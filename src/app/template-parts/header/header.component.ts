import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classeActive = false;
  headerFixo = false;
  menuAcessibilidadeOpen = false;
  contrasteAtivo = false;
  
  constructor() { }

  ngOnInit() {
    this.alterarHeader();
  }
  toggleMenu(): boolean {
    this.classeActive = !this.classeActive;
    return this.classeActive;
  }

  alterarHeader() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 70) {
        this.headerFixo = true;
      } else {
        this.headerFixo = false;
      }
      return this.headerFixo;
    });
  }
  scrollToSection(section: string) {
    if ($(section).offset() !== undefined) {
      const header = $('.header').hasClass('fixed') ? 70 : 140;
      $('html, body').animate({
        scrollTop: $(section).offset().top - header
      }, '300');
    }
  }
  abrirMenuAcessibilidade() {
    this.menuAcessibilidadeOpen = !this.menuAcessibilidadeOpen;
    return this.menuAcessibilidadeOpen;
  }
  aumentarFonte() {

  }
  diminuirFonte() {}

    

  contrasteToggle() {
    this.contrasteAtivo = !this.contrasteAtivo;
    $('body').toggleClass('contraste');
    return this.contrasteAtivo;
  }

}
