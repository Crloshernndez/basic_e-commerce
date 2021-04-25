import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found.component';

import { PageNotFoundRoutingModule } from './pageNotFound-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule],
  providers: [],
})
export class PageNotFountModule {}
