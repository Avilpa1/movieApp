import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  constructor(public _api : ApiService, private maService: ApiService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
