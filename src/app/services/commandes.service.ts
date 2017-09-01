import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

//import 'rxjs/add/operator/map';

import{Commande} from '../entities/commande';
import{COMMANDES} from './mock-commande';

@Injectable()
export class CommandesService {

  getCommandes():Commande []{
    return COMMANDES;
  }

  constructor() { }


/** 
  constructor(private http : Http) { }
  
    getCommandes(){
  
      let link = 'http://localhost:8080/projet_final/mvc/commandes/listeCommande/';
  
      return this.http.get(link).map(res => res.json());
    }
  creer(commande: Commandes){
  
    let link='http://localhost:8080/projet_final/mvc/commandes/ajout/';
    return this.http.post(link,client).map(res => res.json());
  }

  */

}
