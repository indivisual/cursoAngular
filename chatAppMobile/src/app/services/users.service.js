var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get('https://randomuser.me/api/?results=10')
            .map(this.extractData);
    };
    UsersService.prototype.extractData = function (res) {
        return res.json();
    };
    return UsersService;
}());
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map