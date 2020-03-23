import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuAcessibilidadeService {

  private menuAcessibilidade: BehaviorSubject<boolean>;

  constructor() {
    this.menuAcessibilidade = new BehaviorSubject<boolean>(false);
  }
  setMenuStatus(valor: boolean): void {
    this.menuAcessibilidade.next(valor);
  }
  getMenuStatus(): Observable<boolean> {
    return this.menuAcessibilidade;
  }
}
