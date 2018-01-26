import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppOutputComponent } from './components/app-output/app-output.component';
import { AppEditorComponent } from './components/app-editor/app-editor.component';
import { AppGalleryComponent } from './components/app-gallery/app-gallery.component';

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
