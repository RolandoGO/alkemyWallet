import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //conection to the local storage of the window browser
  storage=window.localStorage
  

  constructor() {
    
  }

  

  // method for validating the creation of a user; take the object whit data from the sing up component form;
// it returns true if the user have been created
  singUp(value:any){
    const {userName,password,gender}=value

    // transfrm to lowercase to compare and avoid uppercase problems
    const userLowcase= userName.toLowerCase()

    // creation object for the map of the data of each user
    const infoUser={
      userName,
      password,
      gender,
      pesos:0,
      dolar:0,
      moneyHistory:{
        withdrawalHistory:[],
        addMoneyHistory:[]
      }
    }

    //filtering the word 'user'
    if(userLowcase ==="user" || userLowcase ==="currentuser"){
      alert("`user` es una palabra reservada")
      return false
    }

    //cheking if the user already exist
    else if(window.localStorage.getItem(userName)){
      alert("usuario ya existente")
      return false
    }

    //creating the user if the two conditions above dont match

    else{
      window.localStorage.setItem(userName,JSON.stringify(infoUser) )
      return true
      
    }
  }


  //method  that takes an object from the login form, and validate if the user exist  or the password is incorrect;
  //it dosent return anything, what it does is create the 'isLogIn' and the 'user' key in the local storage and that allows the enter in the principla page.
  logIn(value:any){
    
   
    const {userName,password}=value
    const user = this.storage.getItem(userName)?this.storage.getItem(userName):null
    
    if(user && JSON.parse(user).password===password){

      //create the variable isLogIn in local storage to allow the display of the content. See conditional rendering in app component 

      this.storage.setItem("isLogIn", "true")
      
      //setin the data of the user that is login in the user Key of the local storage
      
        this.storage.setItem("currentUser", user)

      
      
      
    
     }
     else if(user && JSON.parse(user).password!==password){
       alert("password o user incorrecto")
     }
    else{
      alert("no resgistrado")
      }
  }

  
// method that update the user data whit the current user data and  remove the keys 'isLogIn' and 'currentUser' form the local storage, returning to the loging page.
  logOut(){
    //search the user key that holds tha data from the sesion
    const user = this.storage.getItem("currentUser")
    if(user){
      //search that user and update the data whit the one of the sesion
      this.storage.setItem(JSON.parse(user).userName,user)
    }


    this.storage.removeItem("isLogIn")
    this.storage.removeItem("currentUser")
   
  }

}
