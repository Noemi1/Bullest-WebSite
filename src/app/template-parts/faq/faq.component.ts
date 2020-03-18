import { Component, OnInit } from '@angular/core';

import { FaqModel } from './../../shared/faq.model';
import { duvidas } from 'src/app/shared/faq';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  duvidas: FaqModel[];
  faqOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.duvidas = duvidas;
  }

}
