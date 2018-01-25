import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './/app-routing.module';
import { AppOutputComponent } from './app-output/app-output.component';
import { AppEditorComponent } from './app-editor/app-editor.component';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
