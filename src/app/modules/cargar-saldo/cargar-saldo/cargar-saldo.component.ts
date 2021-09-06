import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';
import { CargarService } from '../service/cargar.service';

@Component({
  selector: 'app-cargar-saldo',
  templateUrl: './cargar-saldo.component.html',
  styleUrls: ['./cargar-saldo.component.css']
})
export class CargarSaldoComponent implements OnInit {

  pesosMoneyBalance:number=0
  dolarMoneyBalance:number=0

  constructor(private userDataService:CargarService, private service:UserDataServiceService) { }

  ngOnInit(): void {
    this.pesosMoneyBalance = this.service.getUserData().pesos
    this.dolarMoneyBalance = this.service.getUserData().dolar
  }

  // methods that pass the data from the child form to the userDataService that holds the method for adding the money
  addMoney(value:any){

    
    const newData = this.userDataService.addMoney(value)
    if(newData?.moneyType==="pesos") {this.pesosMoneyBalance = newData.newMoneyData.pesos}
    else {this.dolarMoneyBalance = newData?.newMoneyData.dolar}
  }

}
