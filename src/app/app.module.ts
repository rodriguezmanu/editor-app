import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppOutputComponent } from './app-output/app-output.component';
import { AppEditorComponent } from './app-editor/app-editor.component';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { StyleService } from './services/style-service/style.service';

@NgModule({
  declarations: [
    AppComponent,
    AppOutputComponent,
    AppEditorComponent,
    AppGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ColorPickerModule,
    FormsModule
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
