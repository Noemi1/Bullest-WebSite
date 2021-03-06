import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import { Animacoes } from "../../shared/animacoes";
import { feeds } from "./../../shared/feed";
import { ContrasteService } from 'src/app/services/contraste.service';


@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, AfterViewInit {

    feeds = feeds;
    swiperConfig;
    contrasteAtivo: boolean;

    renderScriptFeed = `
        <script>
            $('.swiper-button-prev').on('click', function() {
                mySwiper.allowSlidePrev = true;
                mySwiper.slidePrev();
            });
        
            $('.swiper-button-next').on('click', function() {
                mySwiper.allowSlideNext = true;
                mySwiper.slideNext();
            });
        
            let mySwiper = new Swiper('.blog-slider', {
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
                allowSlideNext: true,
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
            });
        </script>
    `;

    constructor(
        private animacoes: Animacoes,        
        private contrasteService: ContrasteService,
    ) {
        }

    ngOnInit(): void {
        this.getContraste();
    }
    ngAfterViewInit(): void {
        $('.renderScript-slick-feed').html(this.renderScriptFeed);
    }
    
    // Altera estado da tela para visão em contraste 
    contrasteToggle() {
        $('body').toggleClass('contraste');
        this.contrasteService.setContraste(!this.contrasteAtivo);
    };
    
    // Acessa status da tela retornando se esta ou nao em contraste
    getContraste() {
        this.contrasteService.getContraste().subscribe((value) => {
            this.contrasteAtivo = value;
            if (this.contrasteAtivo) {
                $('body').addClass('contraste');
            } else {
                $('body').removeClass('contraste');
            }
            return this.contrasteAtivo;
        })
    };
}
