import { TestBed } from '@angular/core/testing';

import { BreedsService } from './breeds.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BreedsService', () => {
  let service: BreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(BreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
