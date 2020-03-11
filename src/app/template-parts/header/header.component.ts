import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classeActive = false;
  constructor() { }

  ngOnInit() {
  }
  toggleMenu(): boolean {
    this.classeActive = !this.classeActive;
    console.log(this.classeActive);
    return this.classeActive;
  }
}
