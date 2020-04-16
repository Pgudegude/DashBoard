import { Injectable } from '@angular/core';
import { map, retry } from "rxjs/operators";

const urlProdutos: string = '/api/ecommerce/find-product';
const urlAdicionarCliente: String = '/api/ecommerce/create-client';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';
import { Observable } from 'rxjs';


const urlAPI: string = 'http://viacep.com.br/ws/';

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

export class HttpService {

  constructor(private http: HttpClient) { }

  getCep(endereco: Endereco): Observable<viacep> {

    return this.http.get<viacep>(urlAPI + endereco._cep + "/json/").pipe(retry(2));

  }



  public getCategory(value:any){
    return this.http.get(`/api/ecommerce/product-category/${value}`)
  }


}
