import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './modules/app-material/app-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppOutputComponent } from './components/app-output/app-output.component';
import { AppEditorComponent } from './components/app-editor/app-editor.component';
import { AppGalleryComponent } from './components/app-gallery/app-gallery.component';
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
