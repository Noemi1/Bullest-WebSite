import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  inicioBullest = 2009;
  hoje: Date = new Date();
  idadeBullest: number;

  constructor() { }

  ngOnInit(): void {
    this.idadeBullest = this.hoje.getFullYear() - this.inicioBullest;
  }

}
