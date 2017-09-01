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

  client : Client=new Client();
  constructor(private clientService: ClientsService ) { }

  ngOnInit() {
  }
creer(){

      this.clientService.creer(this.client).subscribe(rep=>{console.log("Client créer : "+rep)});
      //this.clientService.creer(this.client);
      console.log(this.client);

  }
}
