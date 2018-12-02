import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component'
import {HeaderComponent} from './header/header.component';
import { UserNameComponent } from './user-name/user-name.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    UserNameComponent,
    DetailsComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
