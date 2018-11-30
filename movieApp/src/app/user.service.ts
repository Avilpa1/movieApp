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
  
  signUp() {
      return this._http.post("http://meanstack-2018-5-paul-phortonssf.c9users.io:8080/api/AppUsers",   { firstName: 'efee', lastName: 'ewe', email: 'wewe2@yahoo.com', password: 'dsds' })
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