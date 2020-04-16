import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http: HttpClient) { }

  contatos(){
    return this.http.get("/api/elogio");
  }

  listarStatus(){
   return this.http.get("/api/status_valor");
  }

}
