import { Component, OnInit, Input } from '@angular/core';

import { OmdbMediaObject } from '../shared/movie.model';
import { SortByPipe } from '../shared/sort-by-pipe/sort-by.pipe';
import { getDecadeForYear } from '../shared/helpers';

@Component({
  selector: 'degreed-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movieData: OmdbMediaObject[];

  public decadeChoices: number[];
  public selectedDecade = null;

  ngOnInit() {
    this.movieData = this.sortMoviesByYearDescending(this.movieData);
    this.decadeChoices = this.getIncludedDecades(this.movieData);
  }

  private sortMoviesByYearDescending(movies: OmdbMediaObject[]): OmdbMediaObject[] {
    return new SortByPipe()
      .transform(movies, 'Year')
      .reverse();
  }

  private getIncludedDecades(movies: OmdbMediaObject[]): number[] {
    return movies
      .map( m => getDecadeForYear(+m.Year) )
      .filter( (v, i, a) => a.indexOf(v) === i ) // unique only
      .sort()
      .reverse();
  }

  public selectDecade(choice: number): void {
    this.selectedDecade = choice;
  }
}
