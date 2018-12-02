import { Component } from '@angular/core';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{
  details = 'secret is tuna'
  showText = false
  instructions = 'Show Details'
  log=[]


  constructor() { }

 toggleTextVisibility() {
   this.showText = !this.showText
   this.instructions = 'Hide Details'
   this.log.push(this.log.length +1)
 }
}
