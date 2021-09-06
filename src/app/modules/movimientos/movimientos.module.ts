import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos/movimientos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GastosComponent } from './gastos/gastos.component';
import { CargasComponent } from './cargas/cargas.component';



@NgModule({
  declarations: [
    MovimientosComponent,
    GastosComponent,
    CargasComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    MovimientosComponent
  ]
})
export class MovimientosModule { }
