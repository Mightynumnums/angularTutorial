import { Component} from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})

export class UserNameComponent {
  allowClick = false
  createUserName = 'no user name has been changed'
  username=''
  userWasUpdated = false

  constructor() {
   }

   onCreateUserName() { 
     this.createUserName = 'User name updated. It is ' + this.username
     this.userWasUpdated = true
  }

  onUpdateUserName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value
  }
}
