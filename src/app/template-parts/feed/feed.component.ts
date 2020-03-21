import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

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
  mySwiper;
  index;

  constructor(
    private elementRef: ElementRef
  ) {
    this.swiperConfig = {
      direction: 'vertical',
      spaceBetween: 30,
      effect: 'fade',
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },

      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      autoplay: 3000,

    };
  }

  ngOnInit(): void {
    this.bubbles();
    
   
  }
  ngAfterViewInit(): void {
    // this.animacaoTransform();

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

  bubbles() {
    for (let x = 1; x <= $('.circle').length; x++) {
      $('.circle:nth-child(' + x + ')');
      $('.circle:nth-child(' + x + ')').css({
        top: parseInt((Math.random() * (100 - 0) + 0).toString()) + '%',
        left: parseInt((Math.random() * (100 - 0) + 0).toString()) + '%'
      })
      
      setInterval(() => {
        let a = (Math.random() * (45 - 0) + 0);
        let b = (Math.random() * (45 - 0) + 0);

        // console.log(Math.random() * (45 - 0) + 0);
        // console.log(Math.random() * (100 - 60) + 60);
      // console.log((Math.random() * (45 - 0) + 0) && (Math.random() * (100 - 60) + 60))
      console.log(Math.random() * (45 - 0) + 0)
      
        $('.circle:nth-child(' + x + ')').css({
          top: parseInt(a.toString()) + '%',
          left: parseInt(b.toString()) + '%'
        })
      }, 3000);
    }

  }

}
