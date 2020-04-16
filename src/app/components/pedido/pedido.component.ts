<<<<<<< HEAD
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
=======
import { StatusRequest } from 'src/app/model/StatusRequest';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
>>>>>>> 8f38c34621d85d0a3e555a252401cb636884503b
import { PedidoService } from 'src/app/service/pedido.service';
import { Detalhe } from 'src/app/model/detalhe';
import { PedidoDetalhe } from 'src/app/model/pedidoDetalhe';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
<<<<<<< HEAD
  


  
  constructor(private http: PedidoService) {
  }
=======
>>>>>>> 8f38c34621d85d0a3e555a252401cb636884503b

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

<<<<<<< HEAD
  


  mostrarPedidos() {
    this.http.buscarPedidos().subscribe(data => {
   
      data.forEach(d =>{
      
        this.pedido.push(new PedidoDetalhe(d,d.request.statusRequest.length-1))

      }
      )
     
=======
  criandoForm() {
    this.formularioStatus = this.fb.group({
      status: [
        '',
        Validators.compose([
          Validators.required
        ])]
    })
  }

  mostrarPedidos() {
    this.http.buscarPedidos().subscribe(data => {
      data.forEach(d =>{
        this.pedido.push(new PedidoDetalhe(d,d.request.statusRequest.length-1))
      }
      )
>>>>>>> 8f38c34621d85d0a3e555a252401cb636884503b
    })
    if (this.pedido) {
      this.carregar = true;
    }
    else { this.carregar = false }
    return this.pedido
  }
<<<<<<< HEAD
  ngOnInit(): void {
    
    this.mostrarPedidos();
  }
  
  dets : any [] = []
  posicao: any 
=======


  ngOnInit(): void {
    this.mostrarPedidos()
    this.criandoForm()
  }


  dets: any[] = []
  posicao: any
>>>>>>> 8f38c34621d85d0a3e555a252401cb636884503b
  details(pedido) {
    this.dets = []
    this.detalhe
    this.posicao = this.pedido.indexOf(pedido), console.log(this.posicao)
    this.dets.push(pedido)
    console.log(this.dets)
  }

<<<<<<< HEAD
 
=======

  listarStatus(){
    let stt = this.formularioStatus.value.status
    this.http.listarStatus(stt).subscribe((dados)=>{
      if(stt == 1){
        this.mostrarPedidos()
      }else{
        this.pedido = dados
      }
    })
  }


>>>>>>> 8f38c34621d85d0a3e555a252401cb636884503b
}