// tslint:disable
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerFull = false;


  constructor() {
  }

  ngOnInit() {
    this.alterarBanner();
  }
    alterarBanner() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 70) {
        this.bannerFull = true;
      } else {
        this.bannerFull = false;
      }
      return this.bannerFull;
    });
  }

}
