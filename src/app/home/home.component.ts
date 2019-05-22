import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public routes: Routes;
  constructor(private router: Router) {
    this.routes = this.router.config;
    console.log();
  }

  ngOnInit() {
  }

}
