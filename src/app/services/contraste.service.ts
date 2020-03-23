import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContrasteService {
  private contraste: BehaviorSubject<boolean>;
  constructor() { 
    this.contraste = new BehaviorSubject<boolean>(false);
  }

  setContraste(valor: boolean): void {
    this.contraste.next(valor);
  }
  getContraste(): Observable<boolean> {
    return this.contraste;
  }
}
