import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ContrasteService } from 'src/app/services/contraste.service';
import { DepoimentosModel } from 'src/app/shared/depoimentos.model';
import { depoimentos } from 'src/app/shared/depoimentos';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css']
})
export class DepoimentosComponent implements OnInit {

  contrasteAtivo: boolean;
  depoimentos: DepoimentosModel[];

  constructor(
    private contrasteService: ContrasteService,
  ) { 
    this.depoimentos = depoimentos;
  }

  ngOnInit(): void {
    this.getContraste();   
  }
  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
      this.contrasteAtivo = value;
      return this.contrasteAtivo;
    })
  }

}
