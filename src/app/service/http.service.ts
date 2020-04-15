import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

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
    console.log(endereco._cep);
    return this.http.get<viacep>(urlAPI + endereco._cep + "/json/").pipe(retry(2));
  }
  
}
