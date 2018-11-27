"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.api_key = 'c9bd3497000b71346920ffc2b16d1e37';
        this.youtube_key = 'AIzaSyClmq7p10MpgPEwc0HE-8V9fKd5uD_cRNM';
    }
    ApiService.prototype.getInfo = function () {
        // return this._http.get("https://api.themoviedb.org/3/movie/76341?api_key=" + this.api_key );
        // return this._http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.api_key + "&query=" + this.search + '&page=2');
        return this._http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.api_key + "&query=" + this.search);
    };
    ApiService.prototype.getPop = function () {
        return this._http.get("https://api.themoviedb.org/3/movie/popular?api_key=" + this.api_key + "&language=en-US&page=1");
    };
    ApiService.prototype.getYoutube = function (title) {
        return this._http.get("https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&q=" + title + " trailer" + "&key=" + this.youtube_key);
    };
    ApiService.prototype.getPopData = function () {
        var _this = this;
        this.getPop()
            .subscribe(function (response) {
            _this.results = response;
            console.log(response);
        });
    };
    ApiService.prototype.getData = function () {
        var _this = this;
        this.getInfo()
            .subscribe(function (response) {
            _this.results = response;
            console.log(response);
        });
        this.getYoutube()
            .subscribe(function (response) {
            _this.resultsYouTube = response;
        });
    };
    ApiService.prototype.clickLoad = function (bdPath, title) {
        this.bgChange(bdPath);
        this.getYoutubeVideo(title);
    };
    ApiService.prototype.bgChange = function (bdPath) {
        this.bg = document.getElementById('background_wrap');
        var bdFull = 'url(https://image.tmdb.org/t/p/w1280/' + bdPath + ')';
        this.bg.style.backgroundImage = this.bg.style.backgroundImage = bdFull;
    };
    ApiService.prototype.getYoutubeVideo = function (title) {
        var _this = this;
        this.getYoutube(title)
            .subscribe(function (response) {
            _this.resultsYouTube = response;
            _this.youtubeUrl = "https://www.youtube.com/embed/" + _this.resultsYouTube.items[0].id.videoId;
            _this.videoInset = '<iframe id="iframeBox" width="560" height="315" src="' + _this.youtubeUrl + '" frameborder="0" allowfullscreen></iframe>';
            document.getElementById('youTube').innerHTML = _this.videoInset;
        });
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
