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
  idRota = (this.activatedRoute.snapshot.paramMap.get('Id') as unknown) as number

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem('conteudo'))
    this.case = JSON.parse(localStorage.getItem('conteudo'));
  }
  fecharModal() {
    this.case = ('' as unknown) as CaseModel;
    localStorage.removeItem('conteudo');
    $('body').removeClass('modalOpen');
    this.router.navigate(['../'])
  }


}
