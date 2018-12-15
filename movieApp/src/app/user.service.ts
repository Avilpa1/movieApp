import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( public _http : HttpClient) { }
  
  logoutResult: any
  userDataResult: any
  postFavResult: any
  getFavResult: any
  activeId = sessionStorage.getItem("userId")
  activeToken = sessionStorage.getItem("token")
  
  user = {
    "firstName": '',
    "lastName": '',
    "email": '',
    "password": ''
  }
  
  userCred = {
    "email": '',
    "password": ''
  }
  
  favObj = {
    "title": '',
    "movieId": '',
    "userId": '',
    "results": ''
  }
  
  signUpResult: any;
  logInResult: any;
  userName: any = ''
  
  dbURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers"
  lgURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers/logout?access_token="
  liURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers/login"
  findDataURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers/"
  
  signUp() {
      return this._http.post( this.dbURL, this.user )
  }
  
  logIn() {
    return this._http.post( this.liURL, this.userCred )
  }
  
  logOut() {
    let tokenItem = window.sessionStorage.getItem('token')
    return this._http.post( this.lgURL + tokenItem,'' )
  }
  
  findData(id, token) {
    return this._http.get( this.findDataURL + id + "?access_token=" + token )
    
  }

  postFav(id, token) {
    return this._http.post( this.findDataURL + id + '/favs?access_token=' + token, this.favObj  )
  }
  
  getFavData(id, token) {
    return this._http.get( this.findDataURL + id + '/favs?access_token=' + token )
  }
  
  findUserData() {
    this.findData(this.logInResult.userId, this.logInResult.token)
      .subscribe( (response) =>  {
        this.userDataResult = response
        console.log(this.userDataResult)
        document.getElementById("userNameDisplay").innerHTML = 'Welcome, ' + this.userDataResult.firstName
    })
  }
  
  logInUser() {
    this.closeLogin()
      this.logIn()
        .subscribe( (response) =>  {
        this.logInResult = response
      
        console.log(this.logInResult)
        
        window.sessionStorage.setItem('token', this.logInResult.token);
        window.sessionStorage.setItem('userId', this.logInResult.userId);
        
        this.findUserData()
        this.getFav()
        this.hideButton()
        this.clearForm()
    })
  }
  
  logOutUser() {
    this.logOut()
      .subscribe(
        (response) =>  {
        this.logoutResult = response
  
        window.sessionStorage.clear()
      
        document.getElementById("userNameDisplay").innerHTML = '<a id="userNameDisplay" (click)="uService.logOutUser()"></a>'
        console.log('User logged out')
    })
  }
  
  signUpUser() {
    this.closeSignUp()
      this.signUp()
        .subscribe( (response) =>  {
          this.signUpResult = response
          console.log(this.signUpResult)
          this.clearForm()
    })
  }
  
  saveFav () {
    console.log(this.activeId + " " + this.activeToken)
    this.postFav(this.activeId, this.activeToken)
      .subscribe( (response) =>  {
        this.postFavResult = response
        console.log(this.postFavResult)
    })
    
  }
  
  clearForm() {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.email = '';
    this.user.password = '';
    this.userCred.email = '';
    this.userCred.password = '';
  }
  
  hideButton() {
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("innerButton").style.transform = "translateX(90px)";
    document.getElementById("login").innerHTML = '<a id="signup" (click)="uService.logOutUser()">Sign Out</a>'

  }
  
  openLogin() {
    this.closeSignUp()
      var x = document.getElementById('logInForm');
      if (x.style.display === 'block') {
          x.style.display = 'none';
      } else {
          x.style.display = 'block';
      }
  }

  closeLogin() {
    document.getElementById("logInForm").style.display = "none";
  }

  openSignUp() {
    this.closeLogin()
      var x = document.getElementById('signUpForm');
      if (x.style.display === 'block') {
          x.style.display = 'none';
      } else {
          x.style.display = 'block';
      }
  }

  closeSignUp() {
    document.getElementById("signUpForm").style.display = "none";
  }

  getFav() {
    this.getFavData(this.activeId, this.activeToken)
      .subscribe( (response) =>  {
        this.getFavResult = response
        console.log(this.getFavResult)
      
    })
  }
  
  
}





