import { Component, OnInit } from '@angular/core';
import { AssisteUrlService } from 'src/app/services/assiste-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  escondeMenu;
  constructor(
    private urlService: AssisteUrlService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.urlService.setUrl(this.router.url)
  }



}
