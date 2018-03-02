import { TestBed, inject } from '@angular/core/testing';

import { MatosService } from './matos.service';

describe('MatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatosService]
    });
  });

  it('should be created', inject([MatosService], (service: MatosService) => {
    expect(service).toBeTruthy();
  }));
});
