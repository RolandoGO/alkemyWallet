import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyFormComponent } from './money-form/money-form.component';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { UserDisplayComponent } from './user-display/user-display.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    MoneyFormComponent,
    UserDisplayComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule
  ],
  exports:[
    MoneyFormComponent,
    UserDisplayComponent,

    
  ]
})
export class ShareModule { }
