import {Routes} from "@angular/router";
import {LazyLoadComponent} from "./lazy-load/lazy-load.component";

export const lazyRoutes: Routes = [
  {
    path: '',
    component: LazyLoadComponent
  }
];
