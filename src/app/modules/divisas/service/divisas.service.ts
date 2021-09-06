import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private httpClient:HttpClient) { }

  getDolarValue(){

    return this.httpClient.get<DolarData>("https://www.dolarsi.com/api/api.php?type=valoresprincipales")

  }
}

interface DolarData{
  casa:{
    agencia: number
    compra: number
    decimales: number
    nombre: string
    variacion:number
    venta: number
    ventaCero: boolean
  }}