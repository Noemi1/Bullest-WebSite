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
    const email = this.http.post('././mail/contact_me.php', dados);
    return email;
  }

}
