import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Repository of messages sended by text-editor component
   */
  messageList: Array<Object>;
  

  constructor() {
    this.messageList = [];
    
  }

  handleMessage(ev) {
    this.messageList.push(ev);
  }
}
