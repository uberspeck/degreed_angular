import { Pipe, PipeTransform } from '@angular/core';
import * as naturalSort from 'object-property-natural-sort';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: Array<any>, sortKey: string) {

    if (!sortKey) { return items; }

    if (items) {
      return [...items].sort(naturalSort(sortKey));
    }

    return;
  }

}
