import { ProductAPI } from './../model/productAPI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

img: string = "../../../assets/Imagem/"

  constructor(private http: HttpClient) { }


  public delete(id){
    return this.http.delete(`/api/product/${id}`)
  }

  public create(product: ProductAPI){
  let produto = {
    description: product.description,
    name: product.name,
    image: this.img+product.image.slice(12, product.image.length),
    category:{
      id :product.category,
    },
    valueProduct: product.valueProduct,
    valueDiscount: product.valueProduct * 0.7,
    brand: product.brand,
    model: product.model,
  }
    return this.http.post(`/api/create-product`, produto)
  }
}
