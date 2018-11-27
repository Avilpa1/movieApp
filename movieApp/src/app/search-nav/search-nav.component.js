"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SearchNavComponent = /** @class */ (function () {
    function SearchNavComponent(_api, maService) {
        this._api = _api;
        this.maService = maService;
    }
    SearchNavComponent.prototype.ngOnInit = function () {
        var x = maService.results.results;
        console.log("test");
        this.maService.getPopData();
        this.maService.clickLoad(x.backdrop_path, x.title);
    };
    SearchNavComponent = __decorate([
        core_1.Component({
            selector: 'app-search-nav',
            templateUrl: './search-nav.component.html',
            styleUrls: ['./search-nav.component.css']
        })
    ], SearchNavComponent);
    return SearchNavComponent;
}());
exports.SearchNavComponent = SearchNavComponent;
