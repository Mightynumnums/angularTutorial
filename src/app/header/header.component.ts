import {Component} from '@angular/core'

@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'],

})

export class HeaderComponent {
  allowClick = false;
  serverCreationStation = 'No server was created'
  serverName ='Please enter your server name here'
  serverUpdated = false

  constructor() {
    setTimeout(() => {
      this.allowClick = true
    },2000)
  }

  onCreateServer() {
    this.serverCreationStation = 'Server was created. You called it ' + this.serverName
    this.serverUpdated = true
  }

  onUpdateServerName(event: Event) {
   this.serverName =(<HTMLInputElement>event.target).value
  }
}


