import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state-management/state/main.state";
import {MessagesService} from "../../../services/messages.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';




@Component({
  selector: 'app-chat-board',
  templateUrl: 'chat-board.component.html',
  styleUrls: ['chat-board.component.css'],
  animations: [
    trigger('anim', [
      state('inactive', style({
        backgroundColor: 'red',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'yellow',
        transform: 'scale(1.5)'
      })),
      transition('void => *', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ChatBoardComponent implements OnInit {

  field: String;
  messages: Array<any>;

  constructor(private store: Store<State>, private messagesService: MessagesService) {
    this.field = 'active';
    this.messages = [];
  }

  changer() {
    this.field = this.field == 'active' ? 'inactive' : 'active';
  }

  goNext(i) {
    console.log(i);
  }

  ngOnInit() {
    this.store.select('mainStoreReducer').subscribe((state) => {
      this.messages = state['messages'];
    });
  }

}
