import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarDineroComponent } from './enviar-dinero/enviar-dinero.component';



@NgModule({
  declarations: [
    EnviarDineroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EnviarDineroComponent
  ]
})
export class EnviarDineroModule { }
