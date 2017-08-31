import { Component, OnInit } from '@angular/core';

import { VoyagesService } from '../../services/voyages.service';
import { Voyage } from '../../entities/voyage';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {

  voyages : Voyage[];

  constructor(private voyageService : VoyagesService) { }

  ngOnInit() {
    this.voyages = this.voyageService.getVoyages();
  }

}
