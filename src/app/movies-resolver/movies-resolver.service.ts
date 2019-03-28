import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

import { OmdbDataService } from '../core/omdb-data/omdb-data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<any> {

  constructor(
    private omdbData: OmdbDataService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
    return this.omdbData
      .search(route.queryParams.s, {type: 'movie'})
      .pipe(
        switchMap( (collection) => {
          const requests = [];
          collection.Search.forEach( (movie) => {
            requests.push(this.omdbData.getMediaById(movie.imdbID));
          });
          return forkJoin(...requests);
        })
      );
  }
}
