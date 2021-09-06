import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  @Output() singUpAprobe= new EventEmitter<boolean>()

  constructor(private singUpFormBuilder:FormBuilder, private singUpService:AuthService) { }

  singUpForm = this.singUpFormBuilder.group({

    userName:["", [Validators.required,Validators.pattern(/^[A-Z,a-z]{3,10}$/)]],
    password:["",[Validators.required, Validators.pattern(/^\w{5,10}$/)]],
    gender:["",Validators.required]
  })

  

  ngOnInit(): void {
  }

  // method that validate true or false acording to the validation return of singUp method in authService, and do the switch to the logIn page
  handleSingUp(){

    if(this.singUpService.singUp(this.singUpForm.value)) {this.singUpAprobe.emit(false)}
    
    
  }
}
