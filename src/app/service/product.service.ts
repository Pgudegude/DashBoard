import { ProductAPI } from './../model/productAPI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

img: string = "../../../assets/"

  constructor(private http: HttpClient) { }


  public create(product: ProductAPI){
  let produto = {
    description: product.description,
    name: product.name,
    image: this.img+product.image.slice(12, product.image.length),
    category:{
      id :product.category,
    },
    valueProduct: product.valueProduct,
    valueDiscount: product.valueDiscount,
    brand: product.brand,
    model: product.model,
  }
    return this.http.post(`http://localhost:8080/ecommerce/create-product`, produto)
  }
}
