import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent {

  @Input() messages: Array<any>;
  @Input() currentUser: String;

  constructor() {
    this.messages = [];
    this.currentUser = 'Fran';
  }

}
