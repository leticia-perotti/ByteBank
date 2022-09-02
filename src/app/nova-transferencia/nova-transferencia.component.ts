import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { TranferenciaService } from '../services/tranferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>()

  valor!: number;
  destino!: number

  constructor(private service: TranferenciaService) { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('Solicitada nova transferencia')
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }
    this.service.adicionar(valorEmitir).subscribe(resultado =>{
      this.limparCampos()
    }, error => console.log(error))
  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }
}
