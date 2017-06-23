import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './modules/+chat/components/text-editor/text-editor.component';
import { ChatBoardComponent } from './modules/+chat/components/chat-board/chat-board.component';
import { UsersService } from './modules/+contact/users.service';

import { routes } from './app.routes';
import { PreloadAllModules, RouterModule } from "@angular/router";
import { PreloadCustom } from "./modules/+lazy/preload-custom.service";

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
      preloadingStrategy: PreloadCustom
    })
  ],
  providers: [
    UsersService,
    PreloadCustom
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
