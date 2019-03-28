import { Pipe, PipeTransform } from '@angular/core';

import { getDecadeForYear } from '../helpers';
import { OmdbMediaObject } from '../movie.model';

@Pipe({
  name: 'filterByDecade'
})
export class FilterByDecadePipe implements PipeTransform {

  transform(movies: OmdbMediaObject[], decade: number): any {

    if (!decade) { return movies; }

    if (movies) {
      return movies.filter( (movie) => {
        // Some media has a range, test them all
        return movie.Year.split(/[^0-9]/).some( (date) => {
          return decade === getDecadeForYear(+date);
        });
      });
    }

    return null;
  }

}
