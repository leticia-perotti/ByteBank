import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Transferencia } from '../models/transferencia.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listaTransferencia: any[]
  private url = "http://localhost:3000/transferencias"

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []
   }

   get transferencias(){
    return this.listaTransferencia
   }

   todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
   }
   adicionar(transferenciaNova: Transferencia): Observable<Transferencia>{
    this.hidratar(transferenciaNova)
    return this.httpClient.post<Transferencia>(this.url, transferenciaNova)
   }

   private hidratar(tranferencia: any){
    tranferencia.data = new Date()
   }
}
