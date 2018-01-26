import { StyleValues } from './../../models/style';
import { Component, OnInit } from '@angular/core';
import { StyleService } from '../../services/style-service/style.service';

@Component({
  selector: 'app-app-output',
  templateUrl: './app-output.component.html',
  styleUrls: ['./app-output.component.scss']
})
export class AppOutputComponent implements OnInit {
  style: StyleValues;

  constructor(private styleService: StyleService) {}

  ngOnInit(): void {
    this.style = this.styleService.getStyle();
  }
}
