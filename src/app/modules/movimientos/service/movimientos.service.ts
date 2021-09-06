import { Injectable } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(private userService:UserDataServiceService) { }

  //method that gets the currentUser moneyHistory
  getMoneyMovements(){
    const userMoneyMovements = this.userService.getUserData().moneyHistory

    const userMoneyHistory ={
      withdrawalHistory : userMoneyMovements.withdrawalHistory,
      addMoneyHistory : userMoneyMovements.addMoneyHistory

    }

    return userMoneyHistory

  }
}
