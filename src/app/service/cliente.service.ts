import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { map } from 'rxjs/operators';



function adaptarCliente(client: any[]){
 let cliente : Cliente[] = []
  console.log(client)
   client.map(data=>{
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

  constructor(private http: HttpClient) { }


  listarClientes(){
    return this.http.get("http://localhost:8080/dash/find-client/list").pipe(map(adaptarCliente))
  }
}
