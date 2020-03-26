import { Component, OnInit, AfterViewInit } from '@angular/core';
import { clientes } from 'src/app/shared/clientes';
import * as $ from 'jquery';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  clientes: object;
  cartaAberta = false;
  card = 0;
  constructor() { 
    this.clientes = clientes;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    for (let i = 1; i <= $('.clientes__content-item').length + 1; i++) {
      $('.clientes__content-item:nth-child(' + i + ')').addClass('card-' + i);
    }

  }
  

  abrirCarta() {
    return this.cartaAberta = !this.cartaAberta;
  }
}
