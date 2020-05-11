import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import { ContrasteService } from 'src/app/services/contraste.service';
import { DepoimentosModel } from 'src/app/shared/depoimentos.model';
import { depoimentos } from 'src/app/shared/depoimentos';

@Component({
    selector: 'app-depoimentos',
    templateUrl: './depoimentos.component.html',
    styleUrls: ['./depoimentos.component.css']
})
export class DepoimentosComponent implements OnInit, AfterViewInit {

    contrasteAtivo: boolean;
    depoimentos: DepoimentosModel[];

    renderScriptSliderDepoimentos = `<script>
        // Slick Depoimentos
        $('.slick-content').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.depoimentos__slick .slick-prev'),
            nextArrow: $('.depoimentos__slick .slick-next'),
            dots: true,
            speed: 500,
            useCSS: true,
            accessibility: true,
            adaptiveHeight: false,
            appendDots: '.slick__footer',
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }],
            initialSlide: 1,
            centerMode: true,
            centerPadding: 0
        });
    
    </script>`;

    constructor(
        private contrasteService: ContrasteService,
    ) {
        this.depoimentos = depoimentos;
    }

    ngOnInit(): void {
        this.getContraste();
    }
    ngAfterViewInit(): void {
        $('.renderScript-slick-depoimentos').html(this.renderScriptSliderDepoimentos);

    }
    getContraste() {
        this.contrasteService.getContraste().subscribe((value) => {
            this.contrasteAtivo = value;
            return this.contrasteAtivo;
        })
    }

}
