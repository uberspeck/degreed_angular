import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MovieDecadePickerComponent } from '../movie-decade-picker/movie-decade-picker.component';
import { FilterByDecadePipe } from '../shared/filter-by-decade-pipe/filter-by-decade.pipe';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { OmdbMediaObject } from '../shared/movie.model';

const movieData = [
  {
    Title: 'Batman: Under the Red Hood',
    Year: '2010',
    Rated: 'PG-13',
    Released: '27 Jul 2010',
    Runtime: '75 min',
    Genre: 'Animation, Action, Crime, Drama, Sci-Fi, Thriller',
    Director: 'Brandon Vietti',
    Writer: 'Judd Winick, Bob Kane (Batman created by)',
    Actors: 'Bruce Greenwood, Jensen Ackles, John DiMaggio, Neil Patrick Harris',
    Plot: 'There\'s a mystery afoot in Gotham City, and Batman must go toe-to-toe with a mysterious vigilante, who goes by the name of Red Hood. Subsequently, old wounds reopen and old, once buried memories come into the light.',
    Language: 'English',
    Country: 'USA',
    Awards: '1 nomination.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.1/10'
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '100%'
      }
    ],
    Metascore: 'N/A',
    imdbRating: '8.1',
    imdbVotes: '48,042',
    imdbID: 'tt1569923',
    Type: 'movie',
    DVD: '27 Jul 2010',
    BoxOffice: 'N/A',
    Production: 'WARNER BROTHERS PICTURES',
    Website: 'N/A',
    Response: 'True'
  }, {
    Title: 'Batman: The Killing Joke',
    Year: '2016',
    Rated: 'R',
    Released: '25 Jul 2016',
    Runtime: '76 min',
    Genre: 'Animation, Action, Crime, Drama, Sci-Fi, Thriller',
    Director: 'Sam Liu',
    Writer: 'Brian Azzarello, Brian Bolland (based on the graphic novel illustrated by), Bob Kane (Batman created by), Bill Finger (Batman created by)',
    Actors: 'Kevin Conroy, Mark Hamill, Tara Strong, Ray Wise',
    Plot: 'As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.',
    Language: 'English',
    Country: 'USA',
    Awards: '1 win & 2 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '6.5/10'
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '39%'
      }
    ],
    Metascore: 'N/A',
    imdbRating: '6.5',
    imdbVotes: '42,091',
    imdbID: 'tt4853102',
    Type: 'movie',
    DVD: '02 Aug 2016',
    BoxOffice: '$442,331',
    Production: 'The Answer Studio',
    Website: 'N/A',
    Response: 'True'
  }, {
    Title: 'Batman',
    Year: '1989',
    Rated: 'PG-13',
    Released: '23 Jun 1989',
    Runtime: '126 min',
    Genre: 'Action, Adventure',
    Director: 'Tim Burton',
    Writer: 'Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)',
    Actors: 'Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl',
    Plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.',
    Language: 'English, French, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 8 wins & 26 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '7.5/10'
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '71%'
      },
      {
        Source: 'Metacritic',
        Value: '69/100'
      }
    ],
    Metascore: '69',
    imdbRating: '7.5',
    imdbVotes: '309,868',
    imdbID: 'tt0096895',
    Type: 'movie',
    DVD: '25 Mar 1997',
    BoxOffice: 'N/A',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  }, {
    Title: 'Batman: The Dark Knight Returns, Part 1',
    Year: '2012',
    Rated: 'PG-13',
    Released: '25 Sep 2012',
    Runtime: '76 min',
    Genre: 'Animation, Action, Adventure, Crime, Drama, Horror, Sci-Fi, Thriller',
    Director: 'Jay Oliva',
    Writer: 'Bob Kane (character created by: Batman), Frank Miller (comic book), Klaus Janson (comic book), Bob Goodman',
    Actors: 'Peter Weller, Ariel Winter, David Selby, Wade Williams',
    Plot: 'Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?',
    Language: 'English',
    Country: 'USA',
    Awards: '5 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.0/10'
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '100%'
      }
    ],
    Metascore: 'N/A',
    imdbRating: '8.0',
    imdbVotes: '46,479',
    imdbID: 'tt2313197',
    Type: 'movie',
    DVD: '25 Sep 2012',
    BoxOffice: 'N/A',
    Production: 'WARNER BROTHERS PICTURES',
    Website: 'https://www.facebook.com/BatmanTheDarkKnightReturns',
    Response: 'True'
  }
].map( m => new OmdbMediaObject(m) );

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent, MovieDecadePickerComponent, FilterByDecadePipe, MovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    component.movieData = movieData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set decade choices in descending order', () => {
    const sortedDecades = (component as any).getIncludedDecades(movieData);
    expect(sortedDecades.length).toEqual(2);
    expect(sortedDecades[0]).toEqual(2010);
    expect(sortedDecades[1]).toEqual(1980);
  });

  it('should set movies in descending order', () => {
    const sortedMovies = (component as any).sortMoviesByYearDescending(movieData);
    expect(sortedMovies[0].Year).toEqual('2016');
    expect(sortedMovies[1].Year).toEqual('2012');
    expect(sortedMovies[2].Year).toEqual('2010');
    expect(sortedMovies[3].Year).toEqual('1989');
  });

});
