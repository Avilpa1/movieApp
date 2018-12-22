import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent {

  constructor( private maService: ApiService, private uService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.maService.fullResults == undefined) {
      this.router.navigate(['home'])
    }
  }

  clickLike() {
    this.uService.favObj.title = this.maService.fullResults.title;
    this.uService.favObj.movieId = '' + this.maService.fullResults.id + '';
    this.uService.favObj.userId = this.uService.activeId;
    this.uService.favObj.results = this.maService.fullResults;
    
    this.uService.saveFav()
    this.maService.setLike()
    this.uService.getFav()
      // var x = document.getElementById('liked');
      // if (x.style.color === 'red') {
      //     x.style.color = 'inherit';
      // } else {
      //     x.style.color = 'red';
      // }
  }
  

}
