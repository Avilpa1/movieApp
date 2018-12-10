import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { PosterNavComponent } from './poster-nav/poster-nav.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { SearchNavComponent } from './search-nav/search-nav.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    PosterNavComponent,
    MovieDisplayComponent,
    SearchNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
