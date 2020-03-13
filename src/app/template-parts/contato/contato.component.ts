import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EnviarEmailService } from './../../services/enviar-email.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private serviceEmail: EnviarEmailService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  enviarEmail(form: NgForm) {
    this.serviceEmail.postEmail(form.value)
    .subscribe(
      res => {
        console.log(res);
        this.toastr.success('Sucesso', 'Cadastrado com Sucesso!!');
      }, err => {
        console.log(err);
        this.toastr.error(
          `Poxa, que pena que isso aconteceu!! Você ainda pode entrar em contato
           conosco pelo whatsapp ou pelo email`,
          `Erro`);
      });
    console.log(form.value);
  }

}
