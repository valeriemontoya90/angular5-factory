import { TestBed, inject } from '@angular/core/testing';

import { VideoprojService } from './videoproj.service';

describe('VideoprojService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoprojService]
    });
  });

  it('should be created', inject([VideoprojService], (service: VideoprojService) => {
    expect(service).toBeTruthy();
  }));
});
