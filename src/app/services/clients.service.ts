import { Injectable } from '@angular/core';

import{Client} from '../entities/client';
import{CLIENTS} from './mock-clients';

@Injectable()
export class ClientsService {

  getClients():Client []{
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

}
