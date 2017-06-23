import {Routes} from "@angular/routes;"
import {TextEditorComponent} from "./chat-board/chat-board.component";


export const routes: Routes = [
	{
		path: "",
		component: TextEditorComponent
	},
	{
		path: "board",
		component: ChatBoardComponent
	},
	{
		path: "chat";
		component: TextEditorComponent
	},
	{
		path: "lazy",
		loadChildren: './modules/+lazy/lazy.module#LazyModule',
		data: {
			
		}
	}
]
