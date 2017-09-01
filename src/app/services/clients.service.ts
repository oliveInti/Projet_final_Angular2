import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import{Client} from '../entities/client';
//import{CLIENTS} from './mock-clients';

@Injectable()
export class ClientsService {

  constructor(private http : Http) { }

  getClients(){

    let link = 'http://localhost:8080/projet_final/mvc/clients/listeClient/';

    return this.http.get(link).map(res => res.json());
  }
creer(client: Client){

  let link='http://localhost:8080/projet_final/mvc/clients/ajout/';
  return this.http.post(link,client).map(res => res.json());
}


/**  getClients():Client []{
    return CLIENTS;
  }

  getById(idClient:Number): Client {
    let resultat : Client = undefined
      for (let clt of CLIENTS){
        if(clt.id===idClient)
          return clt;
      }
      //si aucun client trouvé avec l'id
      return resultat;
  }


  constructor() { }
*/
}
