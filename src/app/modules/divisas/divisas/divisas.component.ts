import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';
import { DivisasService } from '../service/divisas.service';
import { Validators, FormBuilder  } from '@angular/forms';


@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {

  dolarData:any
  dolar:number=0
  pesos:number=0

  moneyInputFiled = this.formBuilder.group({
    money:["",[Validators.required,Validators.pattern(/^[+]?([.]\d+|\d+[.]?\d*)$/)]],
  })

  

  constructor(private service:DivisasService, public userService:UserDataServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.service.getDolarValue().subscribe(data=>{
      this.handleDolarValues(data)
       
    })
    this.dolar = this.userService.getUserData().dolar
    this.pesos = this.userService.getUserData().pesos
  }

  handleDolarValues(value:any){

    const {compra:buy, venta:sell} = value[0].casa
    this.dolarData = {buy, sell}
    
    
  }

  //preparing obj for the handleMoneyHistory method.

  handleDivisasHistory(flag:string, divisaObj:any){

    let objModel ={
      money:0,
      date:divisaObj.date,
      concept:divisaObj.concept,
      moneyType:""
    }

    if(flag==="buy"){

      const expendPesosObj ={
        ...objModel,
        money:divisaObj.pesos,
        moneyType:"pesos"
      }

      this.userService.handleMoneyHistory(expendPesosObj,"whitdrawl")

      const gainDolarObj = {
        ...objModel,
        money:divisaObj.dolar,
        moneyType:"dolar"
      }

      this.userService.handleMoneyHistory(gainDolarObj, "add")
    }

    else{

      const expendDolarObj ={
        ...objModel,
        money:divisaObj.dolar,
        moneyType:"dolar"
      }

      this.userService.handleMoneyHistory(expendDolarObj,"whitdrawl")

      const gainPesosObj = {
        ...objModel,
        money:divisaObj.pesos,
        moneyType:"pesos"
      }

      this.userService.handleMoneyHistory(gainPesosObj, "add")

    }
  }
  

  //method for calculate the  final amount and adding it to the local storage currentUser data

  dolarTransaction(value:string){
    //converting the dolar value of the api in a number 
    const dolarBuyValue = Number(this.dolarData.buy.replace(",","."))
    const dolarSellValue =Number(this.dolarData.sell.replace(",", ".")) 

    //grabing the amount of dolars in the input filed
    const amount = this.moneyInputFiled.value.money

    //grabing the current user pesos and dolars in the local storage
    const user = this.userService.getUserData()
    const pesosInAcount = user.pesos
    const dolarsInAcount = user.dolar

    //varible for saving the history of this transaction and passing it to the handlHistory method.
   let divisasHistory;

    
    if(value === "buy"){

      
      const operation = pesosInAcount - (amount * dolarSellValue)
      
      if(operation < 0)alert ("no tenes fondos suficientes")

      else{
        //CALCULATE THE FINAL AMOUNT OF DOLARS AND PESOS AND ADD IT TO THE CURRENT USER.
        const finalPesosInAcount = operation
        const finalDolarsInAcount = dolarsInAcount + amount
        const newUserData = {...user,dolar:finalDolarsInAcount,pesos:finalPesosInAcount}

        window.localStorage.setItem("currentUser", JSON.stringify(newUserData))
        this.dolar = finalDolarsInAcount
        this.pesos = finalPesosInAcount
        //CREATING THE OBJECT WHIT THE INFO FOR THE DIVISAS HISTORY AND PASSING IT TO THE handleHistory method
        divisasHistory = {
          concept:"compra divisas",
          pesos: amount*dolarSellValue,
          dolar:amount,
          date: new Date().toString().split("GMT")[0]
          
        }

        
        //passing the divisas Object to the handleDivisasHistory

        this.handleDivisasHistory(value,divisasHistory)

       

      }
     
    }

    else{
      
      const operation = dolarsInAcount - amount

      if(operation < 0)alert ("no tenes fondos suficientes")

      else{
        const finalPesosInAcount = (amount * dolarBuyValue) + pesosInAcount

        const finalDolarsInAcount = operation

        const newUserData = {...user,dolar:finalDolarsInAcount,pesos:finalPesosInAcount}

        window.localStorage.setItem("currentUser", JSON.stringify(newUserData))
        this.dolar = finalDolarsInAcount
        this.pesos = finalPesosInAcount

      
        divisasHistory = {
          concept:"venta divisas",
          pesos:amount * dolarBuyValue,
          dolar:amount,
          date: new Date().toString().split("GMT")[0]
          
        }
        //passing the divisas Object to the handleDivisasHistory

        this.handleDivisasHistory(value,divisasHistory)

      }
    }
// reseting the form
    this.moneyInputFiled.setValue({
      money:0
    })
    

  }
}


