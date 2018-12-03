import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { PosterNavComponent } from './poster-nav/poster-nav.component';

export const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'poster', component: PosterNavComponent }
  ];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
