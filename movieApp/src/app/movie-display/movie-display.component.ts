import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  constructor( private maService: ApiService, private uService: UserService) { }

  // ngOnInit() {
  // }

  clickLike() {
    this.uService.favObj.title = this.maService.fullResults.title;
    this.uService.favObj.movieId = '' + this.maService.fullResults.id + '';
    this.uService.favObj.userId = this.uService.activeId;
    this.uService.favObj.results = this.maService.fullResults;
    
    this.uService.saveFav()
      var x = document.getElementById('liked');
      if (x.style.color === 'red') {
          x.style.color = 'inherit';
      } else {
          x.style.color = 'red';
      }
  }
  

}
