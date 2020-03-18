import { HttpClient } from '@angular/common/http';
import { CaseModel } from './../../shared/case.model';
import { Component, OnInit } from '@angular/core';
import { cases } from '../../shared/cases'
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  cases = cases;
  initialCase: CaseModel;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }
  verMais(conteudo: CaseModel) {
    localStorage.setItem('conteudo', JSON.stringify(conteudo))
      this.router.navigate(['cases', conteudo.Id])
  }
}
