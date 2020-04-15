import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ProductAPI } from 'src/app/model/productAPI';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  formDelete: FormGroup

  constructor(private construirForm: FormBuilder, private service: ProductService) { }

  ngOnInit(): void {
    this.criarDelete();
  }
  
  deletar() {
    let id = this.formDelete.value.codProduct
    if (confirm("Produto sera excluido permanentemente")) {
      this.service.delete(id).subscribe(()=>{
        alert("Produto deletado!")
    this.formDelete.reset()
      })
    }
  }

  enviarDelete(produto: ProductAPI){
    return new FormGroup({
      codProduct: new FormControl(produto.codProduct)
    })
  }


  criarDelete(){
    this.formDelete = this.construirForm.group({
      codProduct:[
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    })
  }
}
