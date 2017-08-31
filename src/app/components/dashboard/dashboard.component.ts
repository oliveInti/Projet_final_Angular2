import { Component, OnInit } from '@angular/core';

import { Client } from '../../entities/client';
import{ CLIENTS } from '../../services/mock-clients';
import {ClientsService} from '../../services/clients.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private clientService: ClientsService) { }


  ngOnInit(): void {
    this.clientService.getClients().subscribe(res => this.clients = res);

  }
  clients: Client []=[];
}
