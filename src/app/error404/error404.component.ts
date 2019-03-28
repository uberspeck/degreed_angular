import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'degreed-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {

  constructor(
    private router: Router,
  ) {}

  public saveMe() {
    this.router.navigateByUrl('/demo?s=batman');
  }
}
