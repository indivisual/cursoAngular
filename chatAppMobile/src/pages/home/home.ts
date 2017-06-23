import { NavController } from 'ionic-angular';
import {MessagesService} from '../../app/services/message.service';
import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../app/state-management/state/main.state";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

	username:String;
	message:String;
	usernameLabel: String;
	messageLabel: String;
	buttonLabel: String;
	messagesArray: Array<Object>;
  messages: Array<any>;

  constructor(public navCtrl: NavController, private messagesService: MessagesService, private store: Store<State>) {
  	this.usernameLabel = 'Username';
    this.messageLabel = 'Message';
    this.buttonLabel = 'Send';
    this.messages = [];
    this.resetForm();
  }

  sendMessage(): void {
    if(this.validateMessage()) {
      this.messagesService.pushMessage({
        message: this.message,
        username: this.username
      });
      this.resetForm();
    }
  };

  resetForm(): void {
    this.username = '';
    this.message = '';
  }

  validateMessage(): boolean {
    return this.message != '' && this.username != '';
  }

  ngOnInit() {
    this.store.select('mainStoreReducer').subscribe((state) => {
      console.log(state);
      this.messages = state['messages'];
    });
  }

}
