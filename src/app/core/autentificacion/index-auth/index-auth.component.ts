import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-auth',
  templateUrl: './index-auth.component.html',
  styleUrls: ['./index-auth.component.css']
})
export class IndexAuthComponent implements OnInit {

  //boolean controled from the logIn and singUp components in the autentificacion module, to change between them.
  errorLogIn:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
