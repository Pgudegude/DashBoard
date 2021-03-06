import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Detalhe } from 'src/app/model/detalhe';
import { PedidoService } from 'src/app/service/pedido.service';
import { StatusRequest } from 'src/app/model/StatusRequest';
import { Pedido } from 'src/app/model/Pedido';
import { Pagamento } from 'src/app/model/Pagamento';


@Component({
  selector: 'app-alterar-pedido',
  templateUrl: './alterar-pedido.component.html',
  styleUrls: ['./alterar-pedido.component.css']
})


export class AlterarPedidoComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: PedidoService) { }
  alterarPedido: FormGroup
  ngOnInit(): void {
    this.alteracao()
  }
  enviarAlteracao(pedido: Detalhe) {
    return new FormGroup({
      request: new FormControl(pedido.request.statusRequest),
      payment: new FormControl(pedido.request.payment.status)
    })
  }
  data: Date = new Date()
  mes = this.data.getUTCMonth()
  dia = this.data.getUTCDate()
  date: any
  request: Pedido
  puxarPedido() {
    let dados = this.alterarPedido.value.Detalhe
    this.service.buscarPedidoId(this.alterarPedido.value.code).subscribe((data: any) => {
      this.request = data
      this.alterarPedido.controls["address"].patchValue(data.address.logradouro + ", " + data.address.number)
      if (this.mes < 10 && this.dia < 10) {
        this.date = this.data.getFullYear() + "-0" + this.mes + "-0" + this.dia
        this.alterarPedido.controls["date"].patchValue(this.date)
      }
      if (this.mes > 9 && this.dia < 10) {
        this.date = this.data.getFullYear() + "-" + this.mes + "-0" + this.dia
        this.alterarPedido.controls["date"].patchValue(this.date)
      }
      if (this.mes < 10 && this.dia > 9) {
        this.date = this.data.getFullYear() + "-0" + this.mes + "-" + this.dia
        this.alterarPedido.controls["date"].patchValue(this.date)
      }
      if (this.mes > 9 && this.dia > 9) {
        this.date = this.data.getFullYear() + "-" + this.mes + "-" + this.dia
        this.alterarPedido.controls["date"].patchValue(this.date)
      }
      console.log(data)
      this.alterarPedido.controls["valueProduct"].patchValue(data.price)
      this.alterarPedido.controls["status"].patchValue(data.payment.status)
      this.alterarPedido.controls["statusRequest"].patchValue(data.statusRequest[data.statusRequest.length - 1].statusRequest)
    })
  }
  alteracao() {
    this.alterarPedido = this.fb.group({
      code: [
        '',
        Validators.compose([
          Validators.required
        ])],
      address: [
        '',
        Validators.compose([
          Validators.required
        ])],
      date: [
        '',
        Validators.compose([
          Validators.required
        ])],
      valueProduct: [
        '',
        Validators.compose([
          Validators.required
        ])],
      status: [
        '',
        Validators.compose([
          Validators.required
        ])],
      statusRequest: [
        '',
        Validators.compose([
          Validators.required
        ])],
    })
  }
  alterarStatus() {
    if (confirm("Confirme suas alterações!")) {
      let statusPedido: StatusRequest = new StatusRequest(null,
        this.alterarPedido.value.date, this.alterarPedido.value.statusRequest,
        new Pedido(this.alterarPedido.value.valueProduct,
          this.request.priceFreight,
          this.request.date,
          this.request.client, new Pagamento(this.alterarPedido.value.status),
          this.request.name
          , this.request.phone,
          this.request.address,
          null, this.request.id)
      )
      this.service.alterar(statusPedido).subscribe(() => {
        alert("Pedido alterado!")
        this.alterarPedido.reset()
      })
    }
  }


 
}