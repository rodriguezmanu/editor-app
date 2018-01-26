import { Component } from '@angular/core';
import { StyleService } from '../services/style-service/style.service';

@Component({
  selector: 'app-app-editor',
  templateUrl: './app-editor.component.html',
  styleUrls: ['./app-editor.component.scss']
})
export class AppEditorComponent {
  backgroundColor = '';
  size;
  borderRadius;

  constructor(private styleService: StyleService) {}

  /**
   * Clear styles inputs
   *
   * @memberof AppEditorComponent
   */
  clearStyles(): void {
    this.backgroundColor = '';
    this.size = 0;
    this.borderRadius = 0;
  }

  /**
   * Save styles
   *
   * @memberof AppEditorComponent
   */
  saveStyles(): void {
    const param = {
      backgroundColor: this.backgroundColor,
      size: this.size,
      borderRadius: this.borderRadius
    };
    // save style in serviceStyle
    this.styleService.saveStyle(param);

    // clear styles form
    this.clearStyles();
  }

  /**
   * Handler user can only insert hexa inputs
   *
   * @param {KeyboardEvent} event
   * @memberof AppEditorComponent
   */
  keyPress(event: KeyboardEvent): void {
    // Hex pattern
    const pattern = /[#a-fA-F\d]+/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar) || this.backgroundColor.length > 6) {
      event.preventDefault();
    }
  }
}
