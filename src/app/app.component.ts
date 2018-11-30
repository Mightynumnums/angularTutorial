import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //this is what is being rendered in the browser!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Aleks';
}
