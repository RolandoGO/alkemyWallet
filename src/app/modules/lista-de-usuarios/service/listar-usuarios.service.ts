import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  storage = window.localStorage
  
  constructor() { }

  // method that gets all the users store in the local store, avoiding the 'currentUser' and the 'isLogIn' keys
  getUsersList(){
    let keys = Object.keys(localStorage)
    const filterUsersList = keys.filter(user=> user!=="currentUser" && user !=="isLogIn")
    
    const newUsersList = filterUsersList.map(user=>{
     const userData = this.storage.getItem(user)
     if(userData){
       return JSON.parse(userData)
     }
      
    })

    return(newUsersList)
  }
}
