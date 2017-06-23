var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { GET_MESSAGES } from "../state-management/actions/main.actions";
var MessagesService = (function () {
    function MessagesService(store, db) {
        var _this = this;
        this.store = store;
        this.store.select('mainStoreReducer');
        this.items = db.list('/messages');
        this.items.subscribe(function (data) {
            console.log(data);
            _this.store.dispatch({ type: GET_MESSAGES, payload: data });
        });
    }
    MessagesService.prototype.pushMessage = function (message) {
        this.items.push(message);
    };
    return MessagesService;
}());
MessagesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store, AngularFireDatabase])
], MessagesService);
export { MessagesService };
//# sourceMappingURL=message.service.js.map