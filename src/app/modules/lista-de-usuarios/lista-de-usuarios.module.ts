import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaDeUsuariosComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
    ListaDeUsuariosComponent
  ]
})
export class ListaDeUsuariosModule { }
