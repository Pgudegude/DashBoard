import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiProduct } from 'src/app/model/apiProduct';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  
  getter() {
    this.productService.getProducts().subscribe(
      (data: apiProduct) => {
        this.apiProduct = data;
        this.product = this.apiProduct
        this.productDisplay = this.product
      }, (error: any) => {
        console.error("ERROR", error)
      })
    }
    
    public product: any = [];
    
    public productDisplay: any = [];
    
    apiProduct: apiProduct
    erro: any
    
    constructor(private router: Router,private productService: ProductService) {
      this.getter();
    }
  
  
  ngOnInit(){
    for(let i = 0; i < this.product.length; i++){
      this.productDisplay.push(this.product[i])
    }
  }
  
}