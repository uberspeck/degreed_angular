import { TestBed } from '@angular/core/testing';

import { OmdbDataService } from './omdb-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('OmdbDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: OmdbDataService = TestBed.get(OmdbDataService);
    expect(service).toBeTruthy();
  });
});
