import { Component, OnInit } from '@angular/core';

import{Client} from '../../entities/client';
import{ClientsService} from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  idClient : Number;

  clients : Client[];
  client : Client;

  constructor(private clientService : ClientsService) { }

  ngOnInit() {
  
    this.clientService.getClients()
    .subscribe(clts => this.clients = clts);

  }
/**ngOnInit(): void {
  this.clients=this.clientService.getClients();

}
*/

}
