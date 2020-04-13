import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Detalhe } from 'src/app/model/detalhe';
import { PedidoDetalhe } from 'src/app/model/pedidoDetalhe';
                


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  constructor(private http: PedidoService) {
  }
 
  detalhe: Detalhe[]
  carregar: boolean
  pedido:PedidoDetalhe[] = []
  

  adaptar( det: Detalhe){
return {
  "detalhe":det,
  "quantidade":det.request.statusRequest.length
}
  }

  mostrarPedidos() {
    this.http.buscarPedidos().subscribe(data => {
      data.forEach(d =>{
        console.log(this.pedido)
        this.pedido.push(new PedidoDetalhe(d,d.request.statusRequest.length-1))
        console.log(d)
      }
      )
      console.log(this.pedido)
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