import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { IndexAuthComponent } from './index-auth/index-auth.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    LogInComponent,
    SingUpComponent,
    IndexAuthComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports:[
    IndexAuthComponent
  ]
})
export class AutentificacionModule { }
