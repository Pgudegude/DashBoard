import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { map } from 'rxjs/operators';
import { EnderecoService } from './endereco.service';
import { Endereco } from '../model/endereco';



function adaptarCliente(client: any[]) {
  let cliente: Cliente[] = []
  console.log(client)
  client.map(data => {
    cliente.push(new Cliente(data.name,
      data.cpf,
      data.birthDate,
      data.phone,
      data.mail,
      data.password,
      data.idClient))
  })
  return cliente
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listarClientes() {
    return this.http.get("/api/find-client/list").pipe(map(adaptarCliente))
  }
  constructor(private http: HttpClient, private httpAddress: EnderecoService) { }


  clienteBanco = (cliente: Cliente) => {
    return {
      idClient: cliente.idClient,
      name: cliente.name,
      cpf: cliente.cpf,
      birthDate: cliente.birthDate,
      phone: cliente.phone,
      mail: cliente.mail,
      password: cliente.password
    }
  }


  public findById(idClient: number) {
    return this.http.get(`/api/find-client-address/${idClient}`)
  }


  public alterar(client: Cliente) {
    console.log(client);
    let cliente = {
      idClient: client.idClient,
      name: client.name,
      cpf: client.cpf,
      birthDate: client.birthDate,
      phone: client.phone,
      mail: client.mail,
      password: client.password
    }
    return this.http.put(`/api/client`, cliente)
  }


  public insertCliente(cliente: Cliente, endereco: Endereco) {
    let client = this.clienteBanco(cliente)
    let address = this.httpAddress.enderecoBanco(endereco)
    let comunicacao = { client, address }
    let url = this.http.post<any>("/api/ecommerce/create-client-address", comunicacao);
    return url
  }


  listarCliente() {
    return this.http.get(`/api/find-client/list`)
  }
}
