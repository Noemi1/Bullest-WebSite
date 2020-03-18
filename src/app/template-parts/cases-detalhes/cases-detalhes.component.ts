import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    console.log(localStorage.getItem('conteudo'))
    this.case = JSON.parse(localStorage.getItem('conteudo'));

    $('body').addClass('modalOpen')
    setTimeout(() => {
      this.modalOpen = true;
    }, 500)
  }
  fecharModal() {
    setTimeout(() => {
      this.case = ('' as unknown) as CaseModel;
      localStorage.removeItem('conteudo');
      this.router.navigate(['../'])
    }, 500)
    $('body').removeClass('modalOpen');
    this.modalOpen = false;
  }


}
