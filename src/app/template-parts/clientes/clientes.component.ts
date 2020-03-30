import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import { clientes, clientesContraste } from 'src/app/shared/clientes';
import { ContrasteService } from 'src/app/services/contraste.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  clientes: object;
  clientesContraste: object;
  cartaAberta = false;
  card = 0;
  verClientesOpen = false;
  contrasteAtivo: boolean;

  constructor(
    private contrasteService: ContrasteService,
  ) { 
    this.clientes = clientes;
    this.clientesContraste = clientesContraste;
  }

  ngOnInit(): void {
    this.getContraste();
  }
  ngAfterViewInit() {
    // for (let i = 1; i <= $('.clientes__content-item').length + 1; i++) {
    //   $('.clientes__content-item:nth-child(' + i + ')').addClass('card-' + i);
    // }
  }

  // Botão Mobile de Ver clientes
  verClientes() {
    this.verClientesOpen = !this.verClientesOpen;
    return this.verClientesOpen;
  };
  
  getContraste() {
    this.contrasteService.getContraste().subscribe((value) => {
        this.contrasteAtivo = value;
        return this.contrasteAtivo;
    })
  };

  toggleContraste() {
      this.contrasteService.setContraste(!this.contrasteAtivo);
  };
}
