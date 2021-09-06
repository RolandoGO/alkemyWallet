import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisasComponent } from './divisas/divisas.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DivisasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DivisasComponent
  ]
})
export class DivisasModule { }
