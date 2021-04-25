import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInComponent } from './components/log-in/log-in.component';

import { LogInRoutingModule } from './log-in-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LogInModule {}
