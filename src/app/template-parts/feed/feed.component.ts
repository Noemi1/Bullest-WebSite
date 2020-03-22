import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

import { Animacoes } from "../../shared/animacoes";
import { feeds } from "./../../shared/feed";
import * as $ from 'jquery';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, AfterViewInit {


  feeds = feeds;
  swiperConfig;

  constructor(
    private animacoes: Animacoes,
  ) {
    this.swiperConfig = {
      direction: 'vertical',
      spaceBetween: 30,
      effect: 'fade',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 3000,
      keyboard: true,
      forceToAxis: true,
      observer: true, 
      observeParents: true,

      mousewheel: {
        invert: false,
      },

      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
      breakpoints: {
        600: {
          direction: 'horizontal',
        }
      }

    };
  }

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.animacoes.bubbles();

  }
  animacaoTransform() {
    const cards = $(".blog-slider");
    const img = $(".blog-slider__img");
    const title = $("blog-slider__title");
    const text = $("blog-slider__text");
    const button = $("blog-slider__button");
    const content = $("blog-slider__content");
    const range = 40;

    const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1) // thanks @alice-mx

    let timeout;

    document.addEventListener('mousemove', ({ x, y }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);
        $(cards).css({
          transform: `rotateX(${yValue}deg) rotateY(${xValue}deg)`,
        })
        $(img).css({
          transform: `translateX(${-xValue}px) translateY(${yValue}px)`,
        })
        $(content).css({
          transform: `translateX(${-xValue}px) translateY(${yValue}px)`,
        })

      })
    }, false);
  }


}
