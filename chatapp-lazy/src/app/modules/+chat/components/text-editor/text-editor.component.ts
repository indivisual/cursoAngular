import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {

  @Output() messageSended = new EventEmitter<Object>();
  /**
   * The username alias
   */
  username: String;
  /**
   * The message sended by the user
   */
  message: String;

  /**
   * The username label
   */
  usernameLabel: String;

  /**
   * The send button label
   */
  buttonLabel: String;

  /**
   * The text-area input label
   */
  messageLabel: String;
  messagesArray: Array<Object>;
  isActive: Boolean;

  constructor() {
    this.usernameLabel = 'Username';
    this.messageLabel = 'Message';
    this.buttonLabel = 'Send';
    this.username = '';
    this.message = '';
    this.isActive = true;
    this.messagesArray = [
      {
        name: 'Juan',
        male: true
      },
      {
        name: 'Juana',
        male: false
      }
    ];
  }
  /**
   * Emit an event with the message information
   */
  sendMessage(): void {
    this.isActive = !this.isActive;
    this.messageSended.emit({
      username: this.username,
      message: this.message
    });
  }

}
