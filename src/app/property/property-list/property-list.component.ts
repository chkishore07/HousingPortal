import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : Array<any> = [
    {
      "Id": 1,
      "Name" : "H1",
      "Type": "House",
      "Price": 7000
    },
    {
      "Id": 2,
      "Name" : "H2",
      "Type": "Flat",
      "Price": 8000
    },
    {
      "Id": 3,
      "Name" : "H3",
      "Type": "Villa",
      "Price": 9000
    },
    {
      "Id": 4,
      "Name" : "H4",
      "Type": "Studio",
      "Price": 10000
    },
    {
      "Id": 5,
      "Name" : "H5",
      "Type": "Independent",
      "Price": 11000
    },
    {
      "Id": 6,
      "Name" : "H6",
      "Type": "Shared",
      "Price": 12000
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
