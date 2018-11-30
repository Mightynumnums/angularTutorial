import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component'
import {HeaderComponent} from './header/header.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UserNameComponent } from './user-name/user-name.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserNameComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
