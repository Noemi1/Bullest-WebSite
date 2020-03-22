import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

constructor(
  private http: HttpClient,
) { }

  postEmail(dados) {
    console.log(dados)
    return this.http.post('./enviar-email.php', dados);
  }
}
