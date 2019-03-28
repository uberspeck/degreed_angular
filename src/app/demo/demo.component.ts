import { Component, OnInit } from '@angular/core';
import { OmdbMediaObject } from '../shared/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'degreed-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public movieData: OmdbMediaObject[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieData = this.route.snapshot.data.movieData;
  }

}
