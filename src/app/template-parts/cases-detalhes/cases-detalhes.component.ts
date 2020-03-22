import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CaseModel } from './../../shared/case.model';
import { cases } from './../../shared/cases';

@Component({
  selector: 'app-cases-detalhes',
  templateUrl: './cases-detalhes.component.html',
  styleUrls: ['./cases-detalhes.component.css']
})
export class CasesDetalhesComponent implements OnInit {

  case: CaseModel;
  cases = cases as CaseModel[];
  modalOpen = false;

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit() {    
    
    this.case = JSON.parse(localStorage.getItem('conteudo'));

    $('body').addClass('modalOpen')
    setTimeout(() => {
      this.modalOpen = true;
    }, 100)
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


}
