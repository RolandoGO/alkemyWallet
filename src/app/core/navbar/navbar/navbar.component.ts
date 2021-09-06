import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../autentificacion/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service:AuthService) { }

  ngOnInit(): void {
    
  }

}
