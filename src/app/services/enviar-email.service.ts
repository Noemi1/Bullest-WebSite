import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class EnviarEmailService {

	private rootUrl = `${window.location.origin}/`
	constructor(
		private http: HttpClient,
	) { }

	postEmail(dados) {
		return this.http.post(this.rootUrl + 'assets/mail.php', dados);
	}
}
