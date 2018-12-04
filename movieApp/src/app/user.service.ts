import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http : HttpClient) { }
  
  user = {
  "firstName": '',
  "lastName": '',
  "email": '',
  "password": ''
  }
  
  signUpResult: any;
  dbURL: string = "http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers"
  
  signUp() {
      return this._http.post(this.dbURL, { 
        firstName: 'ehigusdsasasfe454e', 
        lastName: '22111easwe', 
        email: '112asas1@yahoo.com', 
        password: '111dsds' 
        
      })
    }
  
  signUpUser() {
        this.signUp()
        .subscribe(
        (response) =>  {
        this.signUpResult = response
        console.log(response)
  })
  
}
}