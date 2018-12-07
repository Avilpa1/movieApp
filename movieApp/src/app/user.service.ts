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
  
  signUpResult: any;
  logInResult: any;
  userName: any = ''
  
  dbURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers"
  lgURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers/logout?access_token="
  liURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers/login"
  findDataURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers/"
  
  signUp() {
      return this._http.post(this.dbURL, this.user)
      }
  
  logIn() {
    return this._http.post(this.liURL, this.userCred)
  }
  
  logOut() {
    let tokenItem = window.sessionStorage.getItem('token')
    return this._http.post(this.lgURL + tokenItem,'')
  }
  
  findData(id, token) {
    return this._http.get(this.findDataURL + id + "?access_token=" + token)
    
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
        this.clearForm()
        this.logIn()
        .subscribe(
        (response) =>  {
        this.logInResult = response
        
        console.log(this.logInResult)
        
        window.sessionStorage.setItem('token', this.logInResult.token);
        window.sessionStorage.setItem('userId', this.logInResult.userId);
        
        this.findUserData()
        this.hideButton()
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
        .subscribe(
        (response) =>  {
        this.signUpResult = response
        console.log(this.signUpResult)
        this.clearForm()
        

    })
  }
  
  saveFav () {
    
  }
  
  clearForm() {
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.password = '';
  }
  
  hideButton() {
    
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("innerButton").style.transform = "translateX(90px)";
    document.getElementById("login").innerHTML = '<a id="signup" (click)="uService.logOutUser()">Sign Out</a>'

  }
  
    openLogin() {
    this.closeSignUp()
      var x = document.getElementById('logInForm');
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
    // document.getElementById("logInForm").style.display = "block";
}

  closeLogin() {
    document.getElementById("logInForm").style.display = "none";
}

  openSignUp() {
    this.closeLogin()
      var x = document.getElementById('signUpForm');
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
    // document.getElementById("signUpForm").style.display = "block";
}

  closeSignUp() {
    document.getElementById("signUpForm").style.display = "none";
}

}