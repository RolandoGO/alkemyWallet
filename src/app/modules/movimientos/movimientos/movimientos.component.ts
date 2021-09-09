import {  Component, OnInit} from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';
import { MovimientosService } from '../service/movimientos.service';



@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})



export class MovimientosComponent implements OnInit{

  //array tha will hold the data from the  withdrawalMoney array in the 'currentUser' key
  withdrawalMoneyHistory : moneyData[]=[]

  //array tha will hold the data from the addMoney  array in the 'currentUser' key
  addMoneyHistory : moneyData[] =[]

  
  //boolean for conditionali show the add list or the withdrawal list component.
  carga:boolean=false

  constructor(private service:MovimientosService) { }

  
  

  ngOnInit(): void {
    //on init fecth the data in the 'currentUser' key and pass it to the arrays above.
    this.withdrawalMoneyHistory = this.service.getMoneyMovements().withdrawalHistory
    this.addMoneyHistory = this.service.getMoneyMovements().addMoneyHistory

    
  }

}



// interface use in each of the components of this module 
export interface moneyData {
  money:number;
  date: string;
  concept:string;
  moneyType:string;
  
}