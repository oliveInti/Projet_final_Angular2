import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import{Commande} from '../entities/commande';
import{COMMANDES} from './mock-commande';

@Injectable()
export class CommandesService {

  getCommandes():Commande []{
    return COMMANDES;
  }

  creer(commande: Commande){
    
      let link='http://localhost:8080/projet_final/mvc/commandes/ajout/';
      return this.http.post(link,commande).map(res => res.json());
  }

  constructor(private http : Http) { }

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
