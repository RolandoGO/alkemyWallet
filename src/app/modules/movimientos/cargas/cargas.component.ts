import { Component, Input, OnInit } from '@angular/core';
import { moneyData } from '../movimientos/movimientos.component';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent implements OnInit {

  public page = 1
  public pageSize = 3

  @Input() data: Array<moneyData>=[]
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
