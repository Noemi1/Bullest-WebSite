import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
  selector: 'app-botao-scroll-top',
  templateUrl: './botao-scroll-top.component.html',
  styleUrls: ['./botao-scroll-top.component.css']
})
export class BotaoScrollTopComponent implements OnInit {

  showBtnScrollTop = false;
  contrasteAtivo: boolean;

  constructor(
    private contrasteService: ContrasteService,
    ) { }

  ngOnInit() {
    this.mostrarBtnScrollTop();
    this.getContraste();
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
  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
      this.contrasteAtivo = value;
      return this.contrasteAtivo;
    })
  }

}
