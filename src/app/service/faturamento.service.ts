import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {
  constructor(private http: HttpClient) { }
  

  buscarContatos(){
    return this.http.get("/api/contato")
  }
  buscarPedidos(){
    return this.http.get("/api/buscarTodosPedidos")
  }
}
