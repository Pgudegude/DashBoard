  
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(`http://localhost:8080/dash/find-product`)
  }

  public findByProductsCode(code: number) {
    return this.http.get(`http://localhost:8080/dash/product-id/${code}`)
  }

}