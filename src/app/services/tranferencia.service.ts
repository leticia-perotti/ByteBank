import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listaTransferencia: any[]

  constructor() {
    this.listaTransferencia = []
   }

   get transferencias(){
    return this.listaTransferencia
   }

   adicionar(transferenciaNova: any){
    this.hidratar(transferenciaNova)
    this.listaTransferencia.push(transferenciaNova)
   }

   private hidratar(tranferencia: any){
    tranferencia.data = new Date()
   }
}
