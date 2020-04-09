import { ProductAPI } from './../model/productAPI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  

img: string = "../../../assets/Imagem/"




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
