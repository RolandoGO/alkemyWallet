import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagarComponent } from './pagar/pagar.component';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [
    PagarComponent
  ],
  imports: [
    CommonModule,
    ShareModule
    
    
  ],
  exports:[
    PagarComponent
  ]
})
export class PagarModule { }
