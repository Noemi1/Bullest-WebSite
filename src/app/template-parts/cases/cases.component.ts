import { CaseModel } from './../../shared/case.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { cases } from '../../shared/cases'
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Animacoes } from 'src/app/shared/animacoes';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit, AfterViewInit {

  cases = cases;
  initialCase: CaseModel;
  constructor(
    private router: Router,
    private animacoes: Animacoes,
    
  ) { }

  ngOnInit(): void {   
  }
  ngAfterViewInit(): void {
    this.animacoes.bubbles();    
    
  }
  verMais(conteudo: CaseModel) {
    localStorage.setItem('conteudo', JSON.stringify(conteudo))
    this.router.navigate(['cases', conteudo.Id])
  }
}
