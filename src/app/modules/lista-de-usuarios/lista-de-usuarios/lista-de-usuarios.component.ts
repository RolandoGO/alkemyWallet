import { Component, OnInit } from '@angular/core';
import { ListarUsuariosService } from '../service/listar-usuarios.service';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['name', 'gender'];
  
  usersList:Array<User>=[]

  
  constructor(private userListService:ListarUsuariosService) { }

  ngOnInit(): void {

    this.usersList = this.userListService.getUsersList()
    
  }

}

export interface User {
  
    userName:string,
    password:string,
    gender:string,
    pesos:number,
    dolar:number,
    moneyHistory:{}

}
