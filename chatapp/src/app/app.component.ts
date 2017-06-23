import { Component } from '@angular/core';
import { UsersService } from './users.service';

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
  usersList: any;

  constructor(private usersService: UsersService) {
    this.messageList = [];
    usersService.getUsers().subscribe((data) => {
      this.usersList = data.results;
    });
  }

  /**
   * Update messages array from event
   * @param ev
   */
  handleMessage(ev) {
    this.messageList.push(ev);
  }
}
