// tslint:disable
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { frases } from './../../shared/frases-banner'

import * as $ from 'jquery';
import { HeaderComponent } from 'src/app/template-parts/header/header.component';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

    bannerFull = false;
    frases = frases as [];
    contrasteAtivo = false;

    renderScriptSlickHomeBanner = `
        <script>
            $('.banner__frases').slick({
                infinite: false,
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 1700,
                speed: 2000,
                vertical: true,
                touchMove: false,
                swipe: false,
            });
        </script>
    `;

    constructor(
        private contrasteService: ContrasteService,
    ) {
    }

    ngOnInit() {
        this.alterarBanner();
        this.getContraste();
    }

    ngAfterViewInit() {
        $('.renderScript-slick-bannerHome').html(this.renderScriptSlickHomeBanner);
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
    getContraste() {
        this.contrasteService.getContraste().subscribe((value) => {
            this.contrasteAtivo = value;
            return this.contrasteAtivo;
        })
    }


}
