import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import {RouterModule} from "@angular/router";
import {lazyRoutes} from "app/modules/+lazy/lazy.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes)
  ],
  declarations: [ LazyLoadComponent ]
})
export class LazyModule { }
