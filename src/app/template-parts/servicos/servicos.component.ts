import { Component, OnInit } from '@angular/core';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  contrasteAtivo: boolean;
  imagensMobile = false;

  constructor(    
    private contrasteService: ContrasteService,

  ) { }

  ngOnInit(): void {
    this.getContraste();
    if ($(window).width() <= 800) {
      this.imagensMobile = true;
    }
  }
  
  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
      this.contrasteAtivo = value;
      return this.contrasteAtivo;
    })
  }

}
