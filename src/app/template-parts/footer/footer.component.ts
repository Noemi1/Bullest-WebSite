import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContrasteService } from 'src/app/services/contraste.service';
import { Animacoes } from 'src/app/shared/animacoes';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

    ano: number;
    d: Date;
    contrasteAtivo: boolean;
    constructor(
        private contrasteService: ContrasteService,
        private animacoes: Animacoes,
    ) { }


    ngOnInit() {
        this.d = new Date();
        this.ano = this.d.getFullYear();
        this.getContraste();
    }

    ngOnDestroy() { }

    getContraste() {
        this.contrasteService.getContraste().subscribe((value) => {
            this.contrasteAtivo = value;
            return this.contrasteAtivo;
        });
    };

    // Scroll em ancoras da pagina 
    scrollToSection(section: string) {
        this.animacoes.scrollToSection(section);
    };


}
