import { Component, OnInit, Input } from '@angular/core';
import { moneyData } from '../movimientos/movimientos.component';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  public page = 1
  public pageSize = 10

  @Input() data:Array<moneyData>=[]

  constructor() { }

  ngOnInit(): void {
  }

}
