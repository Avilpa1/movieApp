import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient) { }
  search: any;
  results: any;
  api_key: string = 'c9bd3497000b71346920ffc2b16d1e37'
  
    getInfo() {
    // return this._http.get("https://api.themoviedb.org/3/movie/76341?api_key=" + this.api_key );
    return this._http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.api_key + "&query=" + this.search );

    
  }
  
    getData() {
    this.getInfo()
    .subscribe(
      (response) =>  {
        this.results = response
        console.log(response)
      
      })
  }
  
}
