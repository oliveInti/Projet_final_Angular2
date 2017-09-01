import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { menuComponent } from './menu/app.menuComponent';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditionClientComponent } from './components/edition-client/edition-client.component';
import { ClientComponent } from './components/client/client.component';
import{ClientsService} from './services/clients.service';
import { VoyageComponent } from './components/voyage/voyage.component';
import { VoyagesService } from './services/voyages.service';
import { AjoutClientComponent } from './components/ajout-client/ajout-client.component';
import { LoginComponent } from './components/login/login.component';
import { AuthentificationService } from './services/authentification.service';

@NgModule({

  declarations: [
    AppComponent,
    headerComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
    menuComponent,
    navComponent,
    DashboardComponent,
    EditionClientComponent,
    ClientComponent,
    VoyageComponent,
    AjoutClientComponent,
    LoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
      path:'about',
      component:aboutComponent
      },
      {
      path:'',
      component:contentAreaComponent
      }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [
    ClientsService,
    VoyagesService,
    AuthentificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
