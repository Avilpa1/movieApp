import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PosterNavComponent } from './poster-nav/poster-nav.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { SearchNavComponent } from './search-nav/search-nav.component';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'poster', component: PosterNavComponent },
  { path: 'movieDisplay', component: MovieDisplayComponent },
  { path: 'searchNav', component: SearchNavComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
