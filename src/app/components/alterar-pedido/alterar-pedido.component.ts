import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Detalhe } from 'src/app/model/detalhe';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-alterar-pedido',
  templateUrl: './alterar-pedido.component.html',
  styleUrls: ['./alterar-pedido.component.css']
})
export class AlterarPedidoComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PedidoService) { }
  alterarPedido: FormGroup

  ngOnInit(): void {
    this.alteraçao()
  }

  enviarAlteracao(pedido: Detalhe) {
    return new FormGroup({
      status: new FormControl(pedido.request.statusRequest),
      payment: new FormControl(pedido.request.payment.status)
    })
  }
  puxarPedido() {
    let dados = this.alterarPedido.value.codProduct
    this.service.buscarPedidos().subscribe((data: any) => {
      this.alterarPedido.controls["code"].patchValue(data[0].code)
      this.alterarPedido.controls["name"].patchValue(data[0].detalhe.codProduct.name)
      this.alterarPedido.controls["address"].patchValue(data[0].address)
      this.alterarPedido.controls["date"].patchValue(data[0].date)
      this.alterarPedido.controls["amount"].patchValue(data[0].amount)
      this.alterarPedido.controls["valueProduct"].patchValue(data[0].valueProduct)
      this.alterarPedido.controls["payment"].patchValue(data[0].payment.status)
      this.alterarPedido.controls["request"].patchValue(data[0].request.statusRequest)
    })
  }
  alteraçao() {
    this.alterarPedido = this.fb.group({
      code: [
        '',
        Validators.compose([
          Validators.required
        ])],
      name: [
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
      amount: [
        '',
        Validators.compose([
          Validators.required
        ])],
      valueProduct: [
        '',
        Validators.compose([
          Validators.required
        ])],
      payment: [
        '',
        Validators.compose([
          Validators.required
        ])],
      request: [
        '',
        Validators.compose([
          Validators.required
        ])],
    })
  }
  alterarStatus() {
    if (confirm("Confirme suas alterações!")) {
      this.service.alterar(this.alterarPedido.value).subscribe(() => {
        alert("Produto alterado!")
        this.alterarPedido.reset()

      })
    }
  }
}