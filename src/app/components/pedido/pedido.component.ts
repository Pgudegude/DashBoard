
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { Detalhe } from 'src/app/model/detalhe';
import { PedidoDetalhe } from 'src/app/model/pedidoDetalhe';
import { StatusRequest } from 'src/app/model/StatusRequest';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  formularioStatus: FormGroup


  constructor(private http: PedidoService, private fb: FormBuilder) {
  }
  detalhe: Detalhe[]
  carregar: boolean
  // pedido: PedidoDetalhe[] = []
  pedido: any = []

  adaptar(det: Detalhe) {
    return {
      "detalhe": det,
      "quantidade": det.request.statusRequest.length
    }
  }

  criandoForm() {
    this.formularioStatus = this.fb.group({
      status: [
        '',
        Validators.compose([
          Validators.required
        ])],
        pagamento: [
          '',
          Validators.compose([
            Validators.required
          ])],
    })
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
    this.mostrarPedidos()
    this.criandoForm()
  }


  dets: any[] = []
  posicao: any
  details(pedido) {
    this.dets = []
    this.detalhe
    this.posicao = this.pedido.indexOf(pedido), console.log(this.posicao)
    this.dets.push(pedido)
    console.log(this.dets)
  }


  listarStatus(){
    let stt = this.formularioStatus.value.status
    this.pedido=[]
    let pedidoFiltrado=[]
    this.http.buscarPedidos().subscribe(
      (data: any) => {
      pedidoFiltrado=  data.filter((event) => {
        console.log(event.request.statusRequest[event.request.statusRequest.length-1].statusRequest)
        console.log(stt)
          return event.request.statusRequest[event.request.statusRequest.length-1].statusRequest == stt
        });
        console.log(pedidoFiltrado)
        pedidoFiltrado.forEach(d=>{this.pedido.push(new PedidoDetalhe(d,d.request.statusRequest.length-1))
        console.log(this.pedido)})
        
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
//     this.http.listarStatus(stt).subscribe((status)=>{
//       if(stt == 1){
//         this.mostrarPedidos()
//       }else{
// console.log(status)




        // this.pedido.push(new PedidoDetalhe(status,status.request.statusRequest.length-1))
        // this.pedido = status
  //     }
  //   })
  // }
  // listarStatusPagamento(){
  //   let pagamento = this.formularioStatus.value.pagamento
  //   this.http.listarStatus(pagamento).subscribe((dados)=>{
  //     if(pagamento == 1){
  //       this.mostrarPedidos()
  //     }else{
  //       this.pedido = dados
  //     }
  //   })
  // }

}