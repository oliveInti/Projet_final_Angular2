import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import{Client} from '../../entities/client';
import{ClientsService} from '../../services/clients.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  client : Client;
  constructor(private clientService: ClientsService ) { }

  ngOnInit() {
  }
creer(){
//this.client.nom="oooo";
//this.client.prenom="erty";
//this.client.mail="r@r";
//this.client.mdp="edzcsc";
//this.client.admin=true;

this.clientService.creer(this.client).subscribe(rep=>{console.log("Client créer : "+rep)});


}
}
