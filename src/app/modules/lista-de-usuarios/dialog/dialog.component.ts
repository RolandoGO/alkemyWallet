import {Component} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { UserDataServiceService } from 'src/app/share/service/user-data-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  amount:number=0
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private currentUserService:UserDataServiceService) {}

    checkingAmount(){
      const currentUser = this.currentUserService.getUserData()
      const operation = currentUser.pesos - Number(this.amount)
      
      if(operation<0){
        
      return false
      }
      else{
        return this.amount
      }
      
      

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
