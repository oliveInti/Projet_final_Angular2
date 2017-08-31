import { Component, OnInit } from '@angular/core';

import{Client} from '../../entities/client';
import{ClientsService} from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients : Client[];

  constructor(private clientService : ClientsService) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

}
