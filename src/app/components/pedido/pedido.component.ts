import { Component, OnInit } from '@angular/core';
import{ Pedido} from 'src/app/model/Pedido'
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  constructor(private http: PedidoService) {
  }
 
  pedido: Pedido[] = []
  carregar: boolean
  vazio = []
  detalhe: any


  

  mostrarPedidos() {
    this.http.acompanhar().subscribe(data => {
      data.forEach(d =>
        this.pedido.push(d)
      )
    })
    if (this.pedido) {
      this.carregar = true;
    }
    else { this.carregar = false }
    return this.pedido
  }

  ngOnInit(): void {
   
    this.mostrarPedidos()
  }


 

}


