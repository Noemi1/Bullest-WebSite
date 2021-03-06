import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
  selector: 'app-botao-scroll-down',
  templateUrl: './botao-scroll-down.component.html',
  styleUrls: ['./botao-scroll-down.component.css']
})
export class BotaoScrollDownComponent implements OnInit {

  contrasteAtivo: boolean;

  constructor(
    private contrasteService: ContrasteService,
  ) { }

  ngOnInit() {
    this.getContraste();
  }
  scrollDown() {
    const header = $('.header').hasClass('fixed') ? 70 : 140;
    $('html, body').animate({
      scrollTop: $('.home__banner').next().offset().top - header
    }, '400');
  }
  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
      this.contrasteAtivo = value;
      return this.contrasteAtivo;
    })
  }

}
