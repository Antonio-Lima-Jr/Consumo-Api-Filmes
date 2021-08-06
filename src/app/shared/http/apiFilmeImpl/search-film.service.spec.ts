import { TestBed } from '@angular/core/testing';

import { SearchFilmService } from './search-film.service';

describe('SearchFilmService', () => {
  let service: SearchFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
