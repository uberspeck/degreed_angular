import { TestBed } from '@angular/core/testing';

import { MoviesResolverService } from './movies-resolver.service';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MoviesResolverService = TestBed.get(MoviesResolverService);
    expect(service).toBeTruthy();
  });
});
