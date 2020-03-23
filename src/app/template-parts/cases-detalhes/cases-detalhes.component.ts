import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CaseModel } from './../../shared/case.model';
import { cases } from './../../shared/cases';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
    selector: 'app-cases-detalhes',
    templateUrl: './cases-detalhes.component.html',
    styleUrls: ['./cases-detalhes.component.css']
})
export class CasesDetalhesComponent implements OnInit {

    case: CaseModel;
    cases = cases as CaseModel[];
    modalOpen = false;
    contrasteAtivo: boolean;

    constructor(
        private router: Router,
        private contrasteService: ContrasteService,
    ) { }

    ngOnInit() {

        this.case = JSON.parse(localStorage.getItem('conteudo'));

        $('body').addClass('modalOpen')
        setTimeout(() => {
            this.modalOpen = true;
        }, 100);

        this.getContraste();
    }
    fecharModal() {
        setTimeout(() => {
            this.case = ('' as unknown) as CaseModel;
            localStorage.removeItem('conteudo');
            this.router.navigate(['../'])
        }, 600)
        $('body').removeClass('modalOpen');
        this.modalOpen = false;
    }
    getContraste() {
        this.contrasteService.getContraste().subscribe((value) => {
            this.contrasteAtivo = value;
            return this.contrasteAtivo;
        })
    }

    toggleContraste() {
        this.contrasteService.setContraste(!this.contrasteAtivo);
    }


}
