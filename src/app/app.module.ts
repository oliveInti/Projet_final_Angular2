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


@NgModule({

  declarations: [
    AppComponent,
    headerComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
    menuComponent,
    navComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
