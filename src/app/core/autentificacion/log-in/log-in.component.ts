import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Output() errorLogIn= new EventEmitter<boolean>()

  logInForm = this.formBuilder.group({

    userName:["", [Validators.required,Validators.pattern(/^[A-Z,a-z]{3,10}$/)]],
    password:["",[Validators.required, Validators.pattern(/^\w{5,10}$/)]],
    
  })


  

  constructor(private formBuilder:FormBuilder, public userService:AuthService) { }

  ngOnInit(): void {

    
  }


}
