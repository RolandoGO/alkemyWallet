import { Injectable } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class CargarService {

  storage = window.localStorage

  constructor(private service:UserDataServiceService) { }

  //method that add money to the currentUser and pass the transaction to de method 'handleMoneyHistory' to save it in the history
  addMoney(value:any){

    const user =this.service.getUserData()

    
    let newUserInfo;

    if(user && value.moneyType==="pesos"){
      
      let pesos = user.pesos + value.money
      
      const newMoneyData = {...user,pesos}
      this.storage.setItem("currentUser", JSON.stringify(newMoneyData))

      this.service.handleMoneyHistory(value,"add")

      newUserInfo = {newMoneyData,moneyType:"pesos"}
    }

    else if(user && value.moneyType==="dolar"){



      
      let dolar = user.dolar + value.money
      
      const newMoneyData = {...user,dolar}

      this.storage.setItem("currentUser", JSON.stringify(newMoneyData))

      this.service.handleMoneyHistory(value,"add")

      newUserInfo = {newMoneyData,moneyType:"dolar"}
    }
    
    return newUserInfo
  }

}
