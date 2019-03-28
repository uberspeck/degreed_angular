import { TestBed } from '@angular/core/testing';

import { OmdbApiService } from './omdb-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('OmdbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: OmdbApiService = TestBed.get(OmdbApiService);
    expect(service).toBeTruthy();
  });
});
