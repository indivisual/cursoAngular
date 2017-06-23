import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { ChatBoardComponent } from './components/chat-board/chat-board.component';
import { ChatComponent } from './chat.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	TextEditorComponent,
    ChatBoardComponent,
    ChatComponent
    ]
})
export class ChatModule { }
