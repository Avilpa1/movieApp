import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poster-nav',
  templateUrl: './poster-nav.component.html',
  styleUrls: ['./poster-nav.component.css']
})
export class PosterNavComponent implements OnInit {

  constructor(public _api : ApiService, private maService: ApiService) { }

  ngOnInit() {
  }

}
