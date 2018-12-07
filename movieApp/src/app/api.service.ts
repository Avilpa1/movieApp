import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public _http : HttpClient, private uService: UserService ) { }
  
  mdbURL: string = 'https://api.themoviedb.org/3'
  ytURL
  search: any;
  popResults: any;
  results: any;
  resultsYouTube: any;
  resultsActors: any;
  resultsSimilar: any;
  api_key: string = 'c9bd3497000b71346920ffc2b16d1e37'
  youtube_key: string = 'AIzaSyClmq7p10MpgPEwc0HE-8V9fKd5uD_cRNM'
  youtubeUrl: string = 'https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&q='
  youtubeVideoUrl: any
  bg: any
  inset: any
  random = Math.floor(( Math.random() * 20) + 1)
  posterInset: any
  videoInset: any

  
    ngOnInit() {
  }
  
    getInfo() {
    return this._http.get( this.mdbURL + "/search/movie?api_key=" + this.api_key + "&query=" + this.search );
  }
  
    getPop() {
    return this._http.get( this.mdbURL + "/movie/popular?api_key=" + this.api_key + "&language=en-US&page=1" );
  }
      
    getYoutube(title) {
    return this._http.get( this.youtubeUrl + title + " trailer" + "&key=" + this.youtube_key )
  }
  
    getActorsData(id) {
    return this._http.get( this.mdbURL + "/movie/" + id + "/credits?api_key=" + this.api_key );
  }
  
    getSimilarData(id) {
      return this._http.get( this.mdbURL + '/movie/' + id + '/recommendations?api_key=' + this.api_key )
    }
  

      
    getPopData() {
    this.getPop()
    .subscribe(
      (response) =>  {
        this.results = response

        let x = this.results.results[this.random]
        this.clickLoad(x.backdrop_path, x.title, x.overview, x.poster_path, x.id, x)
      })
  }
  
    getData() {
    this.getInfo()
    .subscribe(
      (response) =>  {
        this.results = response
        console.log(response)
        
        let x = this.results.results[0]
        this.clickLoad(x.backdrop_path, x.title, x.overview, x.poster_path, x.id, x)
      })
  }

  getYoutubeVideo(title) {
        this.getYoutube(title)
        .subscribe(
        (response) =>  {
        this.resultsYouTube = response
        
        this.youtubeVideoUrl = "https://www.youtube.com/embed/" + this.resultsYouTube.items[0].id.videoId
        this.videoInset = '<iframe id="iframeBox" width="560" height="315" src="' + this.youtubeVideoUrl + '" frameborder="0" allowfullscreen></iframe>'
        document.getElementById('youTube').innerHTML = this.videoInset
    })
  }
  
  getActors(id) {
        this.getActorsData(id)
        .subscribe(
        (response) =>  {
        this.resultsActors = response
    })
  }
  
    getSimilar(id) {
        this.getSimilarData(id)
        .subscribe(
        (response) =>  {
        this.resultsSimilar = response
        console.log(this.resultsSimilar)
    })
  }
  
  clickLoad(bdPath, title, overview, poster, id, fullResults) {
      this.bgChange(bdPath)
      this.getYoutubeVideo(title)
      this.loadInfo(poster, overview, title, fullResults)
      this.getActors(id)
      this.getSimilar(id)
  }
    
    
  bgChange(bdPath) {
      this.bg = document.getElementById('background_wrap');
      let bdFull = 'url(https://image.tmdb.org/t/p/w1280/' + bdPath + ')'
      this.bg.style.backgroundImage = this.bg.style.backgroundImage = bdFull
  }
  
  loadInfo(poster, overview, title, fullResults) {
    
      let year = fullResults.release_date.substr(0, 4)
      document.getElementById('title').innerHTML = title + '(' + year + ')'
      this.posterInset = 'https://image.tmdb.org/t/p/w500' + poster
      document.getElementById('poster').innerHTML = this.posterInset
      document.getElementById('overview').innerHTML = overview
      document.getElementById('rating').innerHTML = fullResults.vote_average
  }
  
}
