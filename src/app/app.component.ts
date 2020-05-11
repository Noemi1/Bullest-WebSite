import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { MenuAcessibilidadeService } from './services/menu-acessibilidade.service';

import { linguagens } from './shared/linguagens';
import { Animacoes } from './shared/animacoes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Bullest-WebSite';

    menuAberto: boolean;
    linguagensImagens = linguagens;

    constructor(
        private menuService: MenuAcessibilidadeService,
        private bolhasAnimacao: Animacoes
    ) { }

    ngOnInit() {
        console.log('init')
        setTimeout(() => {  this.bolhasAnimacao.bubbles() }, 50)
        setInterval(() => { this.bolhasAnimacao.bubbles() }, 6500)
    }

    fecharMenuAcessibilidade() {
        this.menuService.setMenuStatus(false)
    }

}
