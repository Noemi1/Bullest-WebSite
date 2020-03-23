import { Component, OnInit } from '@angular/core';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ano: number;
  d: Date;
  contrasteAtivo: boolean;
  constructor(
    private contrasteService: ContrasteService,
  ) { }


  ngOnInit() {
    this.d = new Date();
    this.ano = this.d.getFullYear();
    this.getContraste();
  }
  
  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
      this.contrasteAtivo = value;
      console.log(value);
      return this.contrasteAtivo;
    })
  }

}
