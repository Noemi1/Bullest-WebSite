import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { of, from, fromEvent } from 'rxjs';
import { ContrasteService } from 'src/app/services/contraste.service';
import { MenuAcessibilidadeService } from 'src/app/services/menu-acessibilidade.service';
import { FonteService } from 'src/app/services/fonte.service';
import { Animacoes } from 'src/app/shared/animacoes';
import { Router } from '@angular/router';
import { AssisteUrlService } from 'src/app/services/assiste-url.service';

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
    tamanhoFonte: number;
    aumentarFonteDisabled = false;
    diminuirFonteDisabled = false;
    esconderMenu = false;
    urlAtual: string;

    constructor(
        private contrasteService: ContrasteService,
        private menuService: MenuAcessibilidadeService,
        private fonteService: FonteService,
        private animacoes: Animacoes,
        private urlService: AssisteUrlService,
    ) { 
    };

    ngOnInit() {
        this.alterarHeader();
        this.getContraste();
        this.getMenuAcessibilidadeStatus();
        this.getTamanhoFonte();
        this.getUrl();
        this.getMenuState();
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
        this.animacoes.scrollToSection(section);
    };

    // Aumenta a fonte do texto de todo o site 
    aumentarFonte() {
        if (this.tamanhoFonte <= 101.5) {
            this.fonteService.setFonte(this.tamanhoFonte + 3);
            this.diminuirFonteDisabled = false;
            return this.diminuirFonteDisabled;
        } else {
            this.aumentarFonteDisabled = true;
            return this.aumentarFonteDisabled;
        }
    };

    // Diminui a fonte do texto de todo o site 
    diminuirFonte() {
        if (this.tamanhoFonte >= 38.5) {
            this.fonteService.setFonte(this.tamanhoFonte - 3);
            this.aumentarFonteDisabled = false;
            return this.aumentarFonteDisabled;
        } else {
            this.diminuirFonteDisabled = true;
            return this.diminuirFonteDisabled;
        }
    };

    defaultFonte() {
        this.fonteService.setFonte(62.5);
        this.aumentarFonteDisabled = false;
        this.diminuirFonteDisabled = false;
        return [this.diminuirFonteDisabled, this.aumentarFonteDisabled];
    }

    getTamanhoFonte() {
        this.fonteService.getTamanhoFonte().subscribe((valor) => {
            this.tamanhoFonte = valor;
            $('html').css('font-size', `${valor}%`);
            return this.tamanhoFonte;
        });
    };

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

    getUrl(){
        this.urlService.getUrl().subscribe(url => {
            this.urlAtual = url;
            return this.urlAtual;
        })
    }
    getMenuState() {
        this.urlService.getMenuState().subscribe(menu => {
            this.esconderMenu = menu;
            return this.esconderMenu;
        })
        return this.esconderMenu;
    }

}
