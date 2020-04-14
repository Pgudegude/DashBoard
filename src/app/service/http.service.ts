import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, retry } from "rxjs/operators";

import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';


const urlAPI: string = 'http://viacep.com.br/ws/';
const urlProdutos: string = '/api/ecommerce/find-product';
const urlAdicionarCliente: String = '/api/ecommerce/create-client';
interface viacep {
  cep: string,
  logradouro: string,
  bairro: string,
  uf: string,
  localidade: string
}

@Injectable({
  providedIn: 'root'
})

// function AdaptadorDeProduto(data: any[]) {
//   return data.map(
//     elem => new Produtos(elem.COD_PRODUTO, elem.DESC, elem.REG_ANVISA, elem.FL_CONTROLADO, elem.COD_GRUPO)
//   )
// }
export class HttpService {

  constructor(private http: HttpClient) { }

  getCep(endereco: Endereco): Observable<viacep> {

    return this.http.get<viacep>(urlAPI + endereco.cep + "/json/").pipe(retry(2));

  }



  public getCategory(value:any){
    return this.http.get(`/api/ecommerce/product-category/${value}`)
  }


}


// getProdutos(){
//   let prod = this.http.get(urlProdutos)
//   return console.log(prod)

// }

  // getProdutos() {
  //   let prod = this.http.get(`${urlAPI}/produtos`)

//     return prod.pipe(
//       map(AdaptadorDeProduto
//         // (data: any[]) => {
//         //   return data.map(elem => {
//         //     return new Produto(elem.COD_PRODUTO, elem.DESC, elem.REG_ANVISA, elem.FL_CONTROLADO, 1)
//         //   })
//         // }
//       )
//     )
//   }

//   addProduto(p: Produtos) {
//     let produtoParaEnviar = {
//       COD_PRODUTO: p.code, 
//       DESC: p.desc, 
//       REG_ANVISA: p.reg_anvisa,
//       FL_CONTROLADO: p.controlado, 
//       COD_GRUPO: p.cod_grupo
//     }

//     return this.http.post(`${urlAPI}/produtos`, produtoParaEnviar)
//   }
// }


