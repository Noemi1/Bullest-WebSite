import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-botao-scroll-top',
  templateUrl: './botao-scroll-top.component.html',
  styleUrls: ['./botao-scroll-top.component.css']
})
export class BotaoScrollTopComponent implements OnInit {

  showBtnScrollTop = false;

  constructor() { }

  ngOnInit() {
    this.mostrarBtnScrollTop();
  }

  mostrarBtnScrollTop() {
    $(window).on('scroll', () => {
      if( $(window).scrollTop() > 80) {
        this.showBtnScrollTop = true;
      } else {
        this.showBtnScrollTop = false;
      }
      return this.showBtnScrollTop;
    });
  }
  scrollTop() {
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  }

}
