import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PosterNavComponent } from './poster-nav/poster-nav.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainDisplayComponent } from './main-display/main-display.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'poster', component: PosterNavComponent },
  { path: 'movieDisplay', component: MovieDisplayComponent },
  { path: 'searchNav', component: SearchNavComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'main', component: MainDisplayComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
