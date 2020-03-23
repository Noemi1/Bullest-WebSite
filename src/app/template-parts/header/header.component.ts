import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { of, from, fromEvent } from 'rxjs';
import { ContrasteService } from 'src/app/services/contraste.service';
import { MenuAcessibilidadeService } from 'src/app/services/menu-acessibilidade.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    headerFixo = false;
    menuAcessibilidadeOpen: boolean;
    menuMobileOpen = false;
    contrasteAtivo: boolean;

    constructor(
        private contrasteService: ContrasteService,
        private menuService: MenuAcessibilidadeService,
    ) { };

    ngOnInit() {
        this.alterarHeader();
        this.getContraste(); 
        this.getMenuAcessibilidadeStatus();
    };


    // Abre/Fecha o menu de acessibilidade
    toggleMenuAcessibilidade() {
        this.menuService.setMenuStatus(!this.menuAcessibilidadeOpen);
    };

    // Recupera o estado do menu de Acessibilidade
    getMenuAcessibilidadeStatus() {
        this.menuService.getMenuStatus().subscribe((value) => {
            this.menuAcessibilidadeOpen = value;
            return this.menuAcessibilidadeOpen;
        });
    };

    // Altera o tamanho e a posicao do header
    alterarHeader() {
        $(window).on('scroll', () => {
            if ($(window).scrollTop() > 70) {
                this.headerFixo = true;
            } else {
                this.headerFixo = false;
            }
            return this.headerFixo;
        });
    };

    // Scroll em ancoras da pagina 
    scrollToSection(section: string) {
        if ($(section).offset() !== undefined) {
            const header = $('.header').hasClass('fixed') ? 70 : 140;
            $('html, body').animate({
                scrollTop: $(section).offset().top - header
            }, '300');
        }
    };

    // Aumenta a fonte do texto de todo o site 
    aumentarFonte() { };

    // Diminui a fonte do texto de todo o site 
    diminuirFonte() { };

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

    // Abre/ Fecha menu mobile e consequentemente, menu de atividades
    toggleMenuMobile() {
        this.menuMobileOpen = !this.menuMobileOpen;
        this.menuService.setMenuStatus(false);
        return this.menuMobileOpen;
        
    };

}
