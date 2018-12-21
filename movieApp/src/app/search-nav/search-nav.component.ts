import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  constructor(private maService: ApiService, private uService: UserService) { }

  ngOnInit() {
    this.maService.getPopData()
    this.uService.logInCheck()
  }
  
  ngAfterViewInit() {

  }




}
