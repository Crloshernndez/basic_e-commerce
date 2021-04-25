import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormComponent } from './components/register-form.component';

import { RegisterFormRoutingModule } from './register-form-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RegisterFormRoutingModule,
    ReactiveFormsModule,
  ],
})
export class RegisterFormModule {}
