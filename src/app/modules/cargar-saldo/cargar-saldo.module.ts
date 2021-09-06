import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarSaldoComponent } from './cargar-saldo/cargar-saldo.component';
import { ShareModule } from "../../share/share.module";



@NgModule({
  declarations: [
    CargarSaldoComponent
  ],
  imports: [
    CommonModule,
    ShareModule
    
  ],
  exports:[
    CargarSaldoComponent
  ]
})
export class CargarSaldoModule { }
