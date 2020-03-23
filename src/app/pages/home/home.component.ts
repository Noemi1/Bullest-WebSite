// tslint:disable
import { Component, OnInit } from '@angular/core';
import { frases } from './../../shared/frases-banner'

import * as $ from 'jquery';
import { HeaderComponent } from 'src/app/template-parts/header/header.component';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    bannerFull = false;
    frases = frases as [];
    contrasteAtivo = false;

    constructor(
        private contrasteService: ContrasteService,
    ) {
    }

    ngOnInit() {
        this.alterarBanner();
        this.getContraste();
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
