import { StyleValues } from './../../models/style';
import { Injectable } from '@angular/core';

@Injectable()
export class StyleService {
  style: StyleValues;

  constructor() {}

  /**
   * Save style service
   *
   * @param {StyleValues} style
   * @memberof StyleService
   */
  saveStyle(style: StyleValues): void {
    this.style = style;
    if (style.backgroundColor) {
      this.style.backgroundColor = style.backgroundColor;
    }

    if (style.borderRadius) {
      this.style.borderRadius = this.concatPixel(style.borderRadius);
    }

    if (style.size) {
      this.style.width = this.concatPixel(style.size);
      this.style.height = this.concatPixel(style.size);
    }

    this.setLocalStorage();
  }

  /**
   * Get Style
   *
   * @returns {StyleValues} style
   * @memberof StyleService
   */
  getStyle(): StyleValues {
    return this.style;
  }

  /**
   * Concat pixel tag at end of string
   *
   * @param {string} value
   * @returns {string}
   * @memberof StyleService
   */
  concatPixel(value): string {
    return `${value}px`;
  }

  /**
   * Set localStorage styles
   *
   * @memberof StyleService
   */
  setLocalStorage(): void {

    const stylesCollection = this.getLocalStorage();

    stylesCollection.push(this.style);
    localStorage.setItem('styles', JSON.stringify(stylesCollection));
  }

  /**
   * Get localStorage styles
   *
   * @returns {Object}
   * @memberof StyleService
   */
  getLocalStorage() {
    return localStorage.styles ? JSON.parse(localStorage.styles) : [];
  }
}
