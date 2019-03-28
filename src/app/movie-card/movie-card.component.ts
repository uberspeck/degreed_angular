import { Component, Input } from '@angular/core';
import { OmdbMediaObject } from '../shared/movie.model';

@Component({
  selector: 'degreed-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: OmdbMediaObject;

  public viewOnImdb(): void {
    window.open(`https://www.imdb.com/title/${this.movie.imdbID}/`, '_blank');
  }

}
