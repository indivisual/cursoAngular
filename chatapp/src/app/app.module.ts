import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ChatBoardComponent } from './chat-board/chat-board.component';
import {UsersService} from './users.service';

import {Routes} from "./app.routes;"
import {RouterModule} from "@angular/router;"


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    });
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
