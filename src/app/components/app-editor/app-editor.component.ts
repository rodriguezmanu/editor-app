import { Component, ViewChild } from '@angular/core';
import { StyleService } from '../../services/style-service/style.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'app-app-editor',
  templateUrl: './app-editor.component.html',
  styleUrls: ['./app-editor.component.scss']
})
export class AppEditorComponent {
  @ViewChild(FormGroupDirective) myForm;
  editorForm: FormGroup;

  constructor(
    private styleService: StyleService,
    private formBuilder: FormBuilder
  ) {
    this.editorForm = formBuilder.group({
      backgroundColor: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^#[0-9a-fA-F]{6}$/)
        ])
      ],
      size: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(3)])
      ],
      borderRadius: [{
        value: 0,
        disabled: true
      }]
    });
  }

  /**
   * Clear styles inputs
   *
   * @memberof AppEditorComponent
   */
  clearStyles(): void {
    if (this.myForm) {
      // reset form
      this.myForm.resetForm();

      // reset slider
      this.editorForm.patchValue({
        borderRadius: 0
      });
    }
  }

  /**
   * Save styles
   *
   * @memberof AppEditorComponent
   */
  saveStyles(): void {
    const param = {
      backgroundColor: this.editorForm.get('backgroundColor').value,
      size: this.editorForm.get('size').value,
      borderRadius: this.editorForm.get('borderRadius').value
    };
    // save style in serviceStyle
    this.styleService.saveStyle(param);

    // clear styles form
    this.clearStyles();
  }

  /**
   * Handler user can only insert positive digits inputs
   *
   * @param {KeyboardEvent} event
   * @memberof AppEditorComponent
   */
  keyPressDigit(event: KeyboardEvent): void {
    // digits pattern
    const pattern = /^\d*[0-9]\d*$/;
    const inputChar = String.fromCharCode(event.charCode);
    const isValid = this.editorForm.get('size').value
      ? String(this.editorForm.get('size').value).length >= 3
      : false;

    if (!pattern.test(inputChar) || isValid) {
      event.preventDefault();
    }
  }

  /**
   * On changle slider border radius
   *
   * @param {MatSliderChange} event
   * @memberof AppEditorComponent
   */
  changeSliderBorderRadius(event) {
    this.editorForm.patchValue({
      borderRadius: event.value
    });
  }
}
