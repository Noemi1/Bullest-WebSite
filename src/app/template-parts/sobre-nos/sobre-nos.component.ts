import { Component, OnInit } from '@angular/core';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  inicioBullest = 2009;
  hoje: Date = new Date();
  idadeBullest: number;

  contrasteAtivo: boolean;

  constructor(
    private contrasteService: ContrasteService,
  ) { }

  ngOnInit(): void {
    this.idadeBullest = this.hoje.getFullYear() - this.inicioBullest;
    this.getContraste();
  }

  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
      this.contrasteAtivo = value;
      return this.contrasteAtivo;
    })
  }

}
