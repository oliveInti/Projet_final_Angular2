import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import{Commande} from '../../entities/commande';
import{CommandesService} from '../../services/commandes.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  commande : Commande = new Commande();
  constructor(private commandeService : CommandesService) { }

  ngOnInit() {
  }

  creerCommande()
  {
    
      this.commandeService.creer(this.commande).subscribe(rep => {console.log("Commande créée : " + rep)});

      console.log(this.commande);
  }

}
