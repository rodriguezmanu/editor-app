import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-output',
  templateUrl: './app-output.component.html',
  styleUrls: ['./app-output.component.scss']
})
export class AppOutputComponent implements OnInit {
  style = {
    'background-color': 'red',
    'border-radius': '10px',
    'width': '100px',
    'height': '100px'
  };
  constructor() { }

  ngOnInit() {
  }

}
