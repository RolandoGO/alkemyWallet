import { Injectable } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  storage = window.localStorage
  
  constructor(private service:UserDataServiceService) { }

  // method that gets all the users store in the local store, avoiding the 'currentUser' and the 'isLogIn' keys
  getUsersList(){

    const currentUser = this.service.getUserData().userName

    let keys = Object.keys(localStorage)
    const filterUsersList = keys.filter(user=> user!=="currentUser" && user !=="isLogIn" && user !== currentUser)
    
    const newUsersList = filterUsersList.map(user=>{
     const userData = this.storage.getItem(user)
     if(userData){
       return JSON.parse(userData)
     }
      
    })

    return(newUsersList)
  }
}
