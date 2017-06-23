import { Injectable } from '@angular/core';
import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Store} from '@ngrx/store';
import {State} from './state-management/state/main.state';

@Injectable()
export class MessagesService {

   items: FirebaseListObservable<any[]>;
  	
  	constructor(private store: Store<State>, db: AngularFireDatabase) {

    	this.items = db.list('/messages');
    	this.items.subscribe(messages => {
    		this.store.dispatch({ type: 'SEND_MESSAGE', payload: messages});
    	});
  	}


  	setItems(name, message) {
  		this.items.push({
  			'username': name,
  			'message': message
  		})
  	}


}
