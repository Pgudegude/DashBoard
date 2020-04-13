import { Endereco } from './../model/endereco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  enderecoBanco = (endereco: Endereco) => {
    return {
      "zipCode": endereco._cep,
      "logradouro": endereco._endereco,
      "neighborhood": endereco._bairro,
      "state": endereco._estado,
      "city": endereco._cidade,
      "number": endereco._numero,
      "complement": endereco._complemento,
      "idAddress": endereco._id
    }
  }

  public insertEndereco(endereco: Endereco, cliente: Cliente) {
    let comunicacao = this.enderecoBanco(endereco)
    let url = this.http.post<any>(`http://localhost:8080/ecommerce/create-address/${cliente.idClient}`, comunicacao);
    return url.pipe(map(
      dados => dados
    ));
  }

  pegarEndereco(cliente: Cliente) {
    return this.http.post(`/api/find-Client-Address`, cliente)
      .pipe(
        map(this.adaptar
        )
      )
  }

adaptar(data: any[]) {
  console.log(data)
  return data.map(
    elem =>
      new Endereco(elem.zipCode,
        elem.logradouro,
        elem.neighborhood,
        elem.number,
        elem.state,
        elem.city,
        elem.complement,
        elem.idAddress
      ))
}

  alterar(address: Endereco){
    let endereco = {
      zipCode: address._cep,
      logradouro: address._endereco,
      complement: address._complemento,
      number: address._numero,
      state: address._estado,
      city: address._cidade,
      neighborhood: address.bairro
    }
    return this.http.put(`/api/find-address/alter`,endereco)
  }
  
}
