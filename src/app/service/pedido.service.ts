import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from 'src/app/model/Pedido';
import { map } from 'rxjs/operators';
import { EnderecoService } from './endereco.service';
import { Carrinho } from 'src/app/model/carrinho';
import { Detalhe } from 'src/app/model/detalhe';



function adaptar(data: any[]) {
  return data.map(
    elem => new Pedido(elem.price,
      elem.priceFreight,
      elem.statusRequest,
      elem.date,
      elem.client,
      elem.payment,
      elem.name,
      elem.phone,
      elem.address,
      elem.id
    )
  )
}

function adaptar3(data:any[]){
  return data.map(
    elem=> new Detalhe(elem.code,
    elem.valueProduct,
    elem.valueFreight,
    elem.amount, 
    elem.codProduct, 
    new Pedido(elem.request.price, elem.request.priceFreight, elem.request.statusRequest, elem.request.date
      ,elem.request.client, elem.request.payment, elem.request.name, elem.request.phone,
      elem.request.address, elem.request.id)
      )
  )
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient, private httpAddress: EnderecoService) { }

  adaptador2 = (pedido: Pedido) => {
    return {
      "price": pedido.price,
      "priceFreight": pedido.priceFreight,
      "statusRequest": pedido.statusRequest,
      "date": pedido.date,
      "client": pedido.client,
      "payment": pedido.payment,
      "name": pedido.name,
      "phone": pedido.phone,
      "address": this.httpAddress.enderecoBanco(pedido.address)
    }

  }


  public envPedido(pedido: Pedido) {
    let comunicacao = this.adaptador2(pedido)
    let url = this.http.post('http://localhost:8080/dash/request', comunicacao);
    return url.pipe(map(
      dados => dados
    ));
  }


  public envItemCart(pedido: Pedido, carrinho: Carrinho[]) {
    for (let i = 0; i < carrinho.length; i++) {
      let comunicacao = {
        "codProduct": carrinho[i].produto,
        "amount": carrinho[i].quantidade,
        "valueFreight": pedido.priceFreight,
        "valueProduct": carrinho[i].produto.valueProduct,
        "request": pedido
      }
      let url = this.http.post('http://localhost:8080/dash/create-itemcart', comunicacao)
      url.pipe(
        map(
          dados => dados
        )
      ).subscribe(
        elemento => {
          elemento
        }
      )
    }
  }

details(code: number){
  return this.http.get(`http://localhost:8080/dash/find-itemcart/${code}`).pipe(
    map(adaptar3)
  )
  }
buscarPedidos(){
  return this.http.get("http://localhost:8080/dash/buscarRequest").pipe(
    map(adaptar3)
  )
}


}
