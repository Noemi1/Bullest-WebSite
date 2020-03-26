import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { MenuAcessibilidadeService } from './services/menu-acessibilidade.service';

import { linguagens } from './shared/linguagens';

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
        private menuService: MenuAcessibilidadeService
    ) { }

    ngOnInit() {}

    fecharMenuAcessibilidade() {
        this.menuService.setMenuStatus(false)
    }

}
