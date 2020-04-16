import { Component, OnInit } from '@angular/core';
import { FaturamentoService } from 'src/app/service/faturamento.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { PedidoFaturamento } from 'src/app/model/pedidoFaturamento';

@Component({
  selector: 'app-faturamento-config',
  templateUrl: './faturamento-config.component.html',
  styleUrls: ['./faturamento-config.component.css']
})
export class FaturamentoConfigComponent implements OnInit {
 
  login: boolean
  usuario: any
  contatos: any []=[]
  pedidos:any[]=[]
  faturamento:any[]=[]
  constructor(private faturamentoService : FaturamentoService) { }

  ngOnInit(): void {
    this.verificarLogin()
    this.puxarContatos()
    this.puxarPedidos()
  }

  
  verificarLogin(){
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.login = true
    }
    else {
      this.login = false
    }
  }

  puxarContatos(){
this.faturamentoService.buscarContatos().subscribe((data:any[])=>{
   this.contatos=data} )
  }
   cancelado=0
   valorCancelado=0
   concluido=0
   valorConcluido=0
   pendente=0
   valorPendente=0
  puxarPedidos(){
    this.faturamentoService.buscarPedidos().subscribe((data:any[])=>{
      this.pedidos=[]
      data.forEach((data)=>{
        let status = data.statusRequest.length-1
        this.pedidos.push(new PedidoFaturamento(data.price,1,data.statusRequest[status].statusRequest))
      })
      this.pedidos.forEach(data=>{
        console.log(data)
        if(data.status=="cancelado"){
          console.log("cancelado funcionando")
          this.cancelado+=1
          this.valorCancelado+=data.valor
        }
        if(data.status=="entregue"){
          console.log("concluido funcionando")
          this.concluido+=1
          this.valorConcluido=+data.valor
        }
        else{
          console.log("pendente funcionando")
          this.pendente+=1
          this.valorPendente+=data.valor
        }
      })
      return this.faturamento=[{status:"cancelado",total:this.cancelado,totalValor:this.valorCancelado},
      {status:"concluido",total:this.concluido,totalValor:this.valorConcluido},
      {status:"pendente",total:this.pendente,totalValor:this.valorPendente}]
    })
  }

}
