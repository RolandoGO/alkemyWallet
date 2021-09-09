import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//methods that are share in more than one component and handle the information of the 'currentUser' key in the local STORAGE
export class UserDataServiceService {

  storage=window.localStorage

  constructor() { }

  // method that gets the current user data
  getUserData(){
  
    const user =this.storage.getItem("currentUser")

    if(user){
      return JSON.parse(user)
    }
    

  }

  

  
  

  //method that add the transactions to the currentUser moneyHistory
  handleMoneyHistory(value:any, flag:string){

    const user = this.getUserData()
    const {withdrawalHistory, addMoneyHistory} = user.moneyHistory

    

    if(flag==="add"){
      const newAddMoneyHistory= [value, ... addMoneyHistory]
      
      const newUserHistory = {...user, moneyHistory:{addMoneyHistory:newAddMoneyHistory, withdrawalHistory}}

      

      this.storage.setItem("currentUser", JSON.stringify(newUserHistory))
      
    }

    
    else {
      const newWithdrawalHistory = [ value,...withdrawalHistory]
      const newUserHistory = {...user, moneyHistory:{addMoneyHistory, withdrawalHistory:newWithdrawalHistory}}

      
      this.storage.setItem("currentUser", JSON.stringify(newUserHistory))
    }

  }


  
}
