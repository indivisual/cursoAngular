import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes);
  ],
  declarations: [LazyLoadComponent]
})
export class lazyModule { }
