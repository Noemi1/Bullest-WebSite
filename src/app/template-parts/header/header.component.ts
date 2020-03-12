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

  constructor() { }

  ngOnInit() {
    this.alterarHeader();
  }
  toggleMenu(): boolean {
    this.classeActive = !this.classeActive;
    console.log(this.classeActive);
    return this.classeActive;
  }

  alterarHeader() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 70) {
        this.headerFixo = true;
      } else {
        this.headerFixo = false;
      }
      console.log($(window).scrollTop());
      console.log(this.headerFixo);
      return this.headerFixo;
    });

  }
}
