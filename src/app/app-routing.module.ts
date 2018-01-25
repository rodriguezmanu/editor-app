import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppOutputComponent } from './app-output/app-output.component';
import { AppEditorComponent } from './app-editor/app-editor.component';
import { AppGalleryComponent } from './app-gallery/app-gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/output', pathMatch: 'full' },
  { path: 'output', component: AppOutputComponent },
  { path: 'editor', component: AppEditorComponent },
  { path: 'gallery', component: AppGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
