/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommandesService } from './commandes.service';

describe('CommandesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommandesService]
    });
  });

  it('should ...', inject([CommandesService], (service: CommandesService) => {
    expect(service).toBeTruthy();
  }));
});
