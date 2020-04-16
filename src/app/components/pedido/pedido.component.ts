import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  pedido: PedidoDetalhe[] = []


  adaptar(det: Detalhe) {
    return {
      "detalhe": det,
      "quantidade": det.request.statusRequest.length
    }
  }

  


  mostrarPedidos() {
    this.http.buscarPedidos().subscribe(data => {
   
      data.forEach(d =>{
      
        this.pedido.push(new PedidoDetalhe(d,d.request.statusRequest.length-1))

      }
      )
     
    })
    if (this.pedido) {
      this.carregar = true;
    }
    else { this.carregar = false }
    return this.pedido
  }
  ngOnInit(): void {
    
    this.mostrarPedidos();
  }
  
  dets : any [] = []
  posicao: any 
  details(pedido) {
    this.dets = []
    this.detalhe
    this.posicao = this.pedido.indexOf(pedido), console.log(this.posicao)
    this.dets.push(pedido)
    console.log(this.dets)
  }

 
}