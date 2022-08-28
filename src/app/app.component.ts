import { Component } from '@angular/core';
import { TranferenciaService } from './services/tranferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TranferenciaService){

  }

  transferir(event: any) {
    this.service.adicionar(event)
  }
}
