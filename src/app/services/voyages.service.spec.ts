/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoyagesService } from './voyages.service';

describe('VoyagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoyagesService]
    });
  });

  it('should ...', inject([VoyagesService], (service: VoyagesService) => {
    expect(service).toBeTruthy();
  }));
});
