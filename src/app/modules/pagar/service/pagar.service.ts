import { Injectable } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PagarService {

  storage = window.localStorage

  constructor(private service:UserDataServiceService) { }

  //method that takes money from the currentUser and pass the transaction to de method 'handleMoneyHistory' to save it in the history
  withdrawalMoney(value:any){

    const user =this.service.getUserData()

    let newUserInfo;

    if(user && value.moneyType==="pesos"){

      
      let pesos = user.pesos - value.money
      
      if(pesos < 0) alert("fondos insuficientes")
      else{

        

        const newMoneyData = {...user,pesos}
        this.storage.setItem("currentUser", JSON.stringify(newMoneyData))
      
        this.service.handleMoneyHistory(value,"withdrawal")

        newUserInfo = {newMoneyData,moneyType:"pesos"}
      }
    }

    else if (user && value.moneyType==="dolar"){

      
      let dolar = user.dolar - value.money
      
      if(dolar < 0) alert("fondos insuficientes")
      else{
        const newMoneyData = {...user,dolar}
        this.storage.setItem("currentUser", JSON.stringify(newMoneyData))
      
        this.service.handleMoneyHistory(value,"withdrawal")

        newUserInfo = {newMoneyData,moneyType:"dolar"}

      }

    }
    return newUserInfo
    

  }
}
