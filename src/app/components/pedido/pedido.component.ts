import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Detalhe } from 'src/app/model/detalhe';
                


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  constructor(private http: PedidoService) {
  }
 
  pedido: Detalhe[] = []
  carregar: boolean
  vazio = []
  detalhe: any


  

  mostrarPedidos() {
    this.http.buscarPedidos().subscribe(data => {
      data.forEach(d =>
        this.pedido.push(d)
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


