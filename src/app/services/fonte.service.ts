import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FonteService {

    private tamanhoFonte: BehaviorSubject<number>;

    constructor() {
        this.tamanhoFonte = new BehaviorSubject<number>(62.5);
    }

    setFonte(fonte: number)  {
        this.tamanhoFonte.next(fonte);
    }

    getTamanhoFonte(): Observable<number> {
        return this.tamanhoFonte;
    }
}
