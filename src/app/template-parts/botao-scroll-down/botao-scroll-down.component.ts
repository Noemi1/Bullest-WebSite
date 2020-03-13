import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-botao-scroll-down',
  templateUrl: './botao-scroll-down.component.html',
  styleUrls: ['./botao-scroll-down.component.css']
})
export class BotaoScrollDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollDown() {
    const header = $('.header').hasClass('fixed') ? 70 : 140;
    console.log(header);
    $('html, body').animate({
      scrollTop: $('.home__banner').next().offset().top - header
    }, '300');
  }

}
