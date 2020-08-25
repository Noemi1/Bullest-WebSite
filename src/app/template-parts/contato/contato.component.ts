import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EnviarEmailService } from './../../services/enviar-email.service';

import { ToastrService } from 'ngx-toastr';
import { ContrasteService } from 'src/app/services/contraste.service';
import { Email } from 'src/app/shared/email';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

    telefoneMask: string;
    contrasteAtivo: boolean;

    mensagem: Email;

    constructor(
        private serviceEmail: EnviarEmailService,
        private toastr: ToastrService,
        private contrasteService: ContrasteService,
    ) { }

    ngOnInit() {
        this.getContraste();
        this.mensagem = {
            Nome: 'oi',
            Telefone: 'oi',
            Email: 'oi',
            Assunto: 'oi',
            Mensagem: 'oi'
        }
    };

    // Formulario de enviar um email
    enviarEmail(form: NgForm) {
        console.log(form.value)
        this.serviceEmail.postEmail(form.value)
            .subscribe(
                res => {
                    console.log(res);
                    this.toastr.success('Obrigada pelo seu contato. Entraremos em contato em breve!!', 'Sucesso');
                }, err => {
                    console.log(err);
                    this.toastr.error(
                        `Erro`,
                        `Que pena que isso aconteceu!! Entre em contato
                        conosco pelo whatsapp ou pelo email`);
                });
    };
    // Altera estado da tela para visão em contraste 
    contrasteToggle() {
        $('body').toggleClass('contraste');
        this.contrasteService.setContraste(!this.contrasteAtivo);
    };

    // Acessa status da tela retornando se esta ou nao em contraste
    getContraste() {
        this.contrasteService.getContraste().subscribe((value) => {
            this.contrasteAtivo = value;
            if (this.contrasteAtivo) {
                $('body').addClass('contraste');
            } else {
                $('body').removeClass('contraste');
            }
            return this.contrasteAtivo;
        });
    };
};
