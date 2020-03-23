import { Component, OnInit } from '@angular/core';

import { FaqModel } from './../../shared/faq.model';
import { duvidas } from 'src/app/shared/faq';
import * as $ from 'jquery';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    duvidas: FaqModel[];
    faqOpen = false;
    contrasteAtivo: boolean;

    constructor(
        private contrasteService: ContrasteService,
    ) { }

    ngOnInit(): void {
        this.duvidas = duvidas;
        this.getContraste();
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
