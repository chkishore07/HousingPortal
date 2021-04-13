import { Component, Input } from '@angular/core';
import { IProperty } from '../IProerty.interface';

@Component({
  selector: 'app-property-card',
  //template: '<h1>This is from card</h1>',
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight:normal;}'],
  styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent{
 @Input() property : IProperty

}

