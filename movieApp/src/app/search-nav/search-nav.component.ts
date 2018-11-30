import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  constructor(public _api : ApiService, private maService: ApiService) { }

  ngOnInit() {
    this.maService.getPopData()
  }
  
  openLogin() {
    document.getElementById("logInForm").style.display = "block";
}

  closeLogin() {
    document.getElementById("logInForm").style.display = "none";
}

  openSignUp() {
    document.getElementById("signUpForm").style.display = "block";
}

  closeSignUp() {
    document.getElementById("signUpForm").style.display = "none";
}

  

}
