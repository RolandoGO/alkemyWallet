import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListaDeUsuariosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[
    ListaDeUsuariosComponent
  ]
})
export class ListaDeUsuariosModule { }
