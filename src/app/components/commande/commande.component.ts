import { Component, OnInit } from '@angular/core';

import{Commande} from '../../entities/commande';
import{CommandesService} from '../../services/commandes.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  idCommande : Number;
  
    commandes : Commande[];
    commande : Commande;
  
    constructor(private commandeService : CommandesService) { }

  ngOnInit() {
   // this.commandeService.getCommandes().subscribe(commandes => this.commandes = commandes);

  }

}
