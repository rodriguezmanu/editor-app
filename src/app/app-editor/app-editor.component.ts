import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-editor',
  templateUrl: './app-editor.component.html',
  styleUrls: ['./app-editor.component.scss']
})
export class AppEditorComponent implements OnInit {
  color = '';
  size;
  border;

  constructor() { }

  ngOnInit() { }

  /**
   * Clear styles inputs
   *
   * @memberof AppEditorComponent
   */
  clearStyles(): void {
    this.color = '';
    this.size = 0;
    this.border = 0;
  }

  /**
   * Save styles
   *
   * @memberof AppEditorComponent
   */
  saveStyles(): void {
    console.log(this.color, this.size, this.border);
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

    if (!pattern.test(inputChar) || this.color.length > 6) {
      event.preventDefault();
    }
  }
}
