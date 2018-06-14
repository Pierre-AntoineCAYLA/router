import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {ROUTES} from "./app.routes";
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';
import { FormationComponent } from './formation/formation.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';
import { FormationsResolvers } from './FormationResolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FormationComponent,
    ConnaissancesComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
    ],
  providers: [
    FormationsResolvers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
