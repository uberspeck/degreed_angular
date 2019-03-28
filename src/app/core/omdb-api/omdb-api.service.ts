import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { OmdbMediaCollection, OmdbMediaObject } from 'src/app/shared/movie.model';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public getMedia(queryParams: any): Observable<any> {
    const params = {
      apikey: environment.omdbApiKey,
      ...queryParams
    };
    return this.http
      .get<OmdbMediaCollection | OmdbMediaObject>(environment.omdbApiUrl, {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response | any) {
    return observableThrowError(error);
  }
}
