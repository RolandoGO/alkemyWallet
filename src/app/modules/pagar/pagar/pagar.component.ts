import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';
import { PagarService } from '../service/pagar.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {


  pesosMoneyBalance:number=0
  dolarMoneyBalance:number=0

  constructor(private service:UserDataServiceService, private pagarService:PagarService) { }

  ngOnInit(): void {
    this.pesosMoneyBalance = this.service.getUserData().pesos
    this.dolarMoneyBalance = this.service.getUserData().dolar
  }
  // methods that pass the data from the child form to the userDataService that holds the method for expende the money

  sustractMoney(value:any){

    
    const newData = this.pagarService.withdrawalMoney(value)

    if(newData?.moneyType==="pesos") {this.pesosMoneyBalance = newData.newMoneyData.pesos}
    else {this.dolarMoneyBalance = newData?.newMoneyData.dolar}
    
    
  }
}
