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
      console.log(data)
    })
    this.dolar = this.userService.getUserData().dolar
    this.pesos = this.userService.getUserData().pesos
  }

  handleDolarValues(value:any){

    const {compra:buy, venta:sell} = value[0].casa
    this.dolarData = {buy, sell}
    
    
  }

  dolarTransaction(value:string){

    const dolarBuyValue = Number(this.dolarData.buy.replace(",","."))
    const dolarSellValue =Number(this.dolarData.sell.replace(",", ".")) 
    const amount = this.moneyInputFiled.value.money

    const user = this.userService.getUserData()
    const pesosInAcount = user.pesos
    const dolarsInAcount = user.dolar
    
    if(value === "buy"){

      
      const operation = pesosInAcount - (amount * dolarSellValue)
      
      if(operation < 0)alert ("no tenes fondos suficientes")

      else{
        const finalPesosInAcount = operation
        const finalDolarsInAcount = dolarsInAcount + amount
        const newUserData = {...user,dolar:finalDolarsInAcount,pesos:finalPesosInAcount}

        window.localStorage.setItem("currentUser", JSON.stringify(newUserData))
        this.dolar = finalDolarsInAcount
        this.pesos = finalPesosInAcount

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

      }
    }

    this.moneyInputFiled.setValue({
      money:0
    })

  }
}


