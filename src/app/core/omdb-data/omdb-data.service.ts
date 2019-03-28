import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OmdbApiService } from '../omdb-api/omdb-api.service';
import { OmdbMediaCollection, OmdbMediaObject } from 'src/app/shared/movie.model';
import { OmdbIdQuery, OmdbSearchQuery } from 'src/app/shared/omdb.interfaces';

@Injectable({
  providedIn: 'root'
})
export class OmdbDataService {

  constructor(
    private api: OmdbApiService
  ) { }

  public search(search: string, queryParams: OmdbSearchQuery | {} = {}): Observable<OmdbMediaCollection> {
    return this.api
      .getMedia( {s: search, ...queryParams} )
      .pipe(
        map( movies => new OmdbMediaCollection(movies) )
      );
  }

  public getMediaById(id: string, queryParams: OmdbIdQuery | {} = {}): Observable<OmdbMediaObject> {
    return this.api
      .getMedia( {i: id, ...queryParams} )
      .pipe(
        map( movie => new OmdbMediaObject(movie) )
      );
  }

}
