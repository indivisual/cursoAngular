import { Component } from '@angular/core';

@Component({
  selector: 'chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  /**
   * Repository of messages sended by text-editor component
   */
  messageList: Array<Object>;
  usersList: any;

  constructor() {
    this.messageList = [];
  }

  /**
   * Update messages array from event
   * @param ev
   */
  handleMessage(ev) {
    this.messageList.push(ev);
  }
}
