import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssisteUrlService {

  private url: BehaviorSubject<string>;
  private escondeMenu: BehaviorSubject<boolean>;
  constructor(
    private router: Router
  ) { 
    this.url = new BehaviorSubject<string>(this.router.url);
    this.escondeMenu = new BehaviorSubject<boolean>(false);
  }
  
  setUrl(valor: string): void {
    this.url.next(valor);
    if (valor === '/not-found') {
      this.hiddeMenu(true);
    }
  }
  getUrl(): Observable<string> {
    return this.url;
  }
  hiddeMenu(valor) {
    this.escondeMenu.next(valor);
  }
  getMenuState(): Observable<boolean> {
    return this.escondeMenu;
  }

  
}
