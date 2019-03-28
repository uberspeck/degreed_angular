import { FilterByDecadePipe } from './filter-by-decade.pipe';
import { OmdbMediaObject } from '../movie.model';

const movies = [
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
  },
  {
    Title: 'Batman v Superman: Dawn of Justice',
    Year: '2016',
    imdbID: 'tt2975590',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    Title: 'Batman',
    Year: '1989',
    imdbID: 'tt0096895',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg'
  },
  {
    Title: 'Batman Returns',
    Year: '1992',
    imdbID: 'tt0103776',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg'
  },
  {
    Title: 'Batman Forever',
    Year: '1995',
    imdbID: 'tt0112462',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    Title: 'Batman & Robin',
    Year: '1997',
    imdbID: 'tt0118688',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg'
  },
  {
    Title: 'The Lego Batman Movie',
    Year: '2017',
    imdbID: 'tt4116284',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg'
  },
  {
    Title: 'Batman: Under the Red Hood',
    Year: '2010',
    imdbID: 'tt1569923',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
  },
  {
    Title: 'Batman: The Dark Knight Returns, Part 1',
    Year: '2012',
    imdbID: 'tt2313197',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg'
  },
  {
    Title: 'Batman: The Killing Joke',
    Year: '2016',
    imdbID: 'tt4853102',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
  }
].map( m => new OmdbMediaObject(m) );

describe('FilterByDecadePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByDecadePipe();
    expect(pipe).toBeTruthy();
  });
  it('filter by 1980', () => {
    const filteredMovies = new FilterByDecadePipe().transform(movies, 1980);
    expect(filteredMovies.length).toBe(1);
  });
  it('filter by 1990', () => {
    const filteredMovies = new FilterByDecadePipe().transform(movies, 1990);
    expect(filteredMovies.length).toBe(3);
  });
  it('filter by 2000', () => {
    const filteredMovies = new FilterByDecadePipe().transform(movies, 2000);
    expect(filteredMovies.length).toBe(1);
  });
  it('filter by 2010', () => {
    const filteredMovies = new FilterByDecadePipe().transform(movies, 2010);
    expect(filteredMovies.length).toBe(5);
  });
});
