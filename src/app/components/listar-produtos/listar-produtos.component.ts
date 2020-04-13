import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: any = []

  listar(){
    this.service.getProducts().subscribe((prod)=>{
      this.produtos = prod
    })
  }

  constructor( private service: ProductService) { 
    this.listar()
  }

  ngOnInit(){
  }

}
