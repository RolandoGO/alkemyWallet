import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../service/user-data-service.service';
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  userData:any

  constructor(private service:UserDataServiceService) { }

  ngOnInit(): void {

    this.userData = this.service.getUserData()
    
  }

}
