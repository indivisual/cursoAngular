import {Routes} from "@angular/router";
import {TextEditorComponent} from "./modules/+chat/components/text-editor/text-editor.component";
import {ChatBoardComponent} from "./modules/+chat/components/chat-board/chat-board.component";
import {ContactComponent} from "./modules/+contact/contact.component";

export const routes: Routes = [
  {
    path: '',
    component: TextEditorComponent
  },
  {
    path: 'board',
    component: ChatBoardComponent
  },
  {
    path: 'chat',
    component: TextEditorComponent
  },
  {
    path: 'contact',
    loadChildren: './modules/+contact/contact.module#ContactModule',
    data: {
      preload: false
    }
  },
  {
    path: 'lazy',
    loadChildren: './modules/+lazy/lazy.module#LazyModule',
    data: {
      preload: false
    }
  },
  {
    path: '**',
    component: ChatBoardComponent
  }
];
