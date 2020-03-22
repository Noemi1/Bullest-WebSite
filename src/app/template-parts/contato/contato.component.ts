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
  telefoneMask: string;

  constructor(
    private serviceEmail: EnviarEmailService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  enviarEmail(form: NgForm) {
    console.log(form.value)
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
  }
  verificaTelefone(t) {

    t = t.value.replace('(').replace(')').replace('.').replace('-')
    t = t.trim();
    console.log(t)
    let ddd = `(${t.slice(0,2)})`

    let l = t.length
    
    if (l <= 2) {
      this.telefoneMask = `${ddd}`;
      console.log(this.telefoneMask);
      return this.telefoneMask;
    } else if (l <= 10 && l >= 4) {
      this.telefoneMask = `${ddd} ${t.slice(2,6)}-${t.slice(6,10)}`;
      console.log(this.telefoneMask);
      return this.telefoneMask;
    } else if (l = 11){
      this.telefoneMask = `${ddd} ${t.slice(2,3)}.${t.slice(3,7)}-${t.slice(7,11)}`;
      console.log(this.telefoneMask);
      return this.telefoneMask;
    } else {
      this.telefoneMask = `${ddd} ${t.value}`;
      console.log(this.telefoneMask);
      return this.telefoneMask;
    }
  }

}
