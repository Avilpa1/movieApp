import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient, public sanitizer: DomSanitizer) { }
  sanitizer = sanitizer;   
  search: any;
  results: any;
  resultsYouTube: any;
  api_key: string = 'c9bd3497000b71346920ffc2b16d1e37'
  youtube_key: string = 'AIzaSyClmq7p10MpgPEwc0HE-8V9fKd5uD_cRNM'
  youtubeUrl: any
  bg: any
  inset: any
  
    getInfo() {
    // return this._http.get("https://api.themoviedb.org/3/movie/76341?api_key=" + this.api_key );
    // return this._http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.api_key + "&query=" + this.search + '&page=2');
    return this._http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.api_key + "&query=" + this.search );
    return this._http.get("https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&q=" + this.search + "&key=" + this.youtube_key)
  }
  
    getYoutube(title) {
    return this._http.get("https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&q=" + title + " trailer" + "&key=" + this.youtube_key)
  }
  
    getData() {
    this.getInfo()
    .subscribe(
      (response) =>  {
        this.results = response
        console.log(response)
      
      })
      
    this.getYoutube()
    .subscribe(
      (response) =>  {
        this.resultsYouTube = response
      })
  }


  clickLoad(bdPath, title) {
    this.bgChange(bdPath)
    this.getYoutubeVideo(title)
  }
    
    
  bgChange(bdPath) {
      this.bg = document.getElementById('background_wrap');
      let bdFull = 'url(https://image.tmdb.org/t/p/w1280/' + bdPath + ')'
      this.bg.style.backgroundImage = this.bg.style.backgroundImage = bdFull
  }
  
  getYoutubeVideo(title) {
        this.getYoutube(title)
        .subscribe(
        (response) =>  {
        this.resultsYouTube = response
        
        this.youtubeUrl = "https://www.youtube.com/embed/" + this.resultsYouTube.items[0].id.videoId
        this.videoInset = '<iframe id="iframeBox" width="560" height="315" src="' + this.youtubeUrl + '" frameborder="0" allowfullscreen></iframe>'
        document.getElementById('youTube').innerHTML = this.videoInset
    }
  
  
}

