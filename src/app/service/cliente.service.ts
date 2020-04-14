import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { EnderecoService } from './endereco.service';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private httpAddress : EnderecoService) { }


  clienteBanco = (cliente: Cliente) => {
    return {
      "name": cliente.name,
      "cpf": cliente.cpf,
      "birthDate": cliente.birthDate,
      "mail": cliente.mail,
      "phone": cliente.phone,
      "password": cliente.password
    }
  }


public findById(idClient: number){
  return this.http.get(`/api/find-client-address/${idClient}`)
}


public alterar(client: Cliente){
  let cliente = {
    "idClient": client.idClient,
    "name": client.name,
    "cpf": client.cpf,
    "birthDate": client.birthDate,
    "phone": client.phone,
    "mail": client.mail,
    "password": client.password
  }
  return this.http.put(`/api/client`,cliente)
  }


  public insertCliente(cliente: Cliente, endereco:Endereco) {
    let client = this.clienteBanco(cliente)
    let address = this.httpAddress.enderecoBanco(endereco)
    let comunicacao = {client,address}
    let url = this.http.post<any>("http://localhost:8080/ecommerce/create-client-address", comunicacao);
    return url
  }


  listarCliente(){
    return this.http.get(`/api/find-client/list`)
  }
}
