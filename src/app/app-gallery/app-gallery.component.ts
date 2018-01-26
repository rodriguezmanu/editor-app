import { StyleValues } from './../models/style';
import { Component, OnInit } from '@angular/core';
import { StyleService } from '../services/style-service/style.service';

@Component({
  selector: 'app-app-gallery',
  templateUrl: './app-gallery.component.html',
  styleUrls: ['./app-gallery.component.scss']
})
export class AppGalleryComponent implements OnInit {
  styles;

  constructor(private styleService: StyleService) { }

  ngOnInit(): void {
    this.styles = this.styleService.getLocalStorage();
    console.log(this.styles);
  }

}
