import {Routes} from "@angular/routes;"
import {TextEditorComponent} from "./text-editor/text-editor.component";
import {ChatBoardComponent} from "./chat-board/chat-board.component";


export const lazyRoutes: Routes = [
	{
		path: "chat",
		component: LazyLoadComponent;
	}
];
