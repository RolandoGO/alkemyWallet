import { Component, OnInit } from '@angular/core';
import { ListarUsuariosService } from '../service/listar-usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})

export class ListaDeUsuariosComponent implements OnInit {

  storage = window.localStorage

  displayedColumns: string[] = ['name', "sendMoney"];
  
  usersList:Array<User>=[]

  
  constructor(private userListService:ListarUsuariosService, public dialog:MatDialog, private currentUserService:UserDataServiceService) { }

  ngOnInit(): void {

    this.usersList = this.userListService.getUsersList()
    
  }

  //method for sending money to other users
  openDialog(name:string){

    
   
    
    const dialogRef = this.dialog.open(DialogComponent,{})
    dialogRef.afterClosed().subscribe(res=>{

      const currentUser = this.currentUserService.getUserData()
      const userToSend =  this.storage.getItem(name)
      
      
      

     if (userToSend && res){
        //addition to the target user
        const amount = Number(res)
        const operation = JSON.parse(userToSend).pesos + amount
        const newUser = {...JSON.parse(userToSend),pesos:operation}
        this.storage.setItem(name,JSON.stringify(newUser))

        //sustraction of the current User
        
        const newCurrentUser = JSON.stringify({...currentUser, pesos: currentUser.pesos - amount})
        this.storage.setItem(currentUser.userName,newCurrentUser)
        this.storage.setItem("currentUser", newCurrentUser)
        
        //sending info to the handleHistory method

        const objInfo = {
          money:amount,
          concept:"envio de dinero",
          date: new Date().toString().split("GMT")[0],
          moneyType:"pesos"

        }
        this.currentUserService.handleMoneyHistory(objInfo,"whitdrawl")
      }

      else alert("fondos insuficientes")

     
      

     
    })
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
