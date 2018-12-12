import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  constructor(public _api : ApiService, private maService: ApiService, private uService: UserService) { }

  ngOnInit() {
    this.maService.getPopData()
  }
  
  ngAfterViewInit() {
    likeCheck()
  }


    likeCheck() {
      console.log(this.maService.fullResults.id)
      // console.log(this.uService.getFavResult[3].movieId)
      
      for(let x=0; x < this.uService.getFavResult.length; x++ ) {
      
        if (this.maService.fullResults.id == this.uService.getFavResult[x].movieId ) {
          console.log('liked')
          document.getElementById('liked').style.color = 'red'
        } else { 
          console.log('not liked')
        }
      }
    }

}
