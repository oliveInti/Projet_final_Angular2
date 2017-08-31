import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router'; 

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ClientComponent } from '../components/client/client.component';
import { VoyageComponent } from '../components/voyage/voyage.component';


const routes: Route [] = [
{ path: '', redirectTo:'tableaudebord', pathMatch:'full',}, // component: DashboardComponent,
{ path: 'dashboard', redirectTo: 'tableaudebord',},
{ path: 'tableaudebord', component: DashboardComponent,},
{ path: 'clients/listeClient', component: ClientComponent},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
