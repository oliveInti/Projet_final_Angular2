import { Injectable } from '@angular/core';

import { VOYAGES} from './mock-voyages';
import { Voyage } from '../entities/voyage';

@Injectable()
export class VoyagesService {

  getVoyages() : Voyage[] {
    return VOYAGES;
  }

  constructor() { }

}
