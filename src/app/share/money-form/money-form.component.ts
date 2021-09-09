import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css']
})
export class MoneyFormComponent implements OnInit {

  addMoneyForm = this.formBuilder.group({
    money:["",[Validators.required,Validators.pattern(/^[+]?([.]\d+|\d+[.]?\d*)$/)]],
    concept:["",[Validators.required,Validators.pattern(/^[a-z,A-Z]{1,10}$/)]],
    moneyType:["",[Validators.required]],
    date:""

  })



  @Output() moneyData= new EventEmitter<any>()

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {}
  

  //method that adds the date to the form date propertie and emit the values of the validated form to the parents that use this child (cargar-saldo module and pagar module), and reset the form
  passingMoney(){

    //creating the date in the form when the submition is valid
    const date = new Date()
    this.addMoneyForm.value.date = date.toString().split("GMT")[0]

    //passing the values of the submited form to the father
    this.moneyData.emit(this.addMoneyForm.value)

    //reseting the form
    this.addMoneyForm.setValue({
      money:0,
      concept:"concepto",
      moneyType:"$",
      date:""

    })

    

  }

}
