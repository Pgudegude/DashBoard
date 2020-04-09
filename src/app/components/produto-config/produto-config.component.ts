import { ProductService } from './../../service/product.service';
import { ProductAPI } from './../../model/productAPI';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatNumber, formatCurrency } from '@angular/common';

@Component({
  selector: 'app-produto-config',
  templateUrl: './produto-config.component.html',
  styleUrls: ['./produto-config.component.css']
})
export class ProdutoConfigComponent implements OnInit {

  login: boolean
  usuario: any
  formularioProduto: FormGroup
  formDelete: FormGroup

  constructor(private construirForm: FormBuilder, private service: ProductService) { }

  ngOnInit() {
    this.criarDadosProduto();
    this.verificarLogin();
    this.criarDelete();
  }

enviarProduto(produto: ProductAPI){
  return new FormGroup({
    name: new FormControl(produto.name),
    description: new FormControl(produto.description),
    image: new FormControl(produto.image),
    category: new FormControl(produto.category),
    valueProduct: new FormControl(produto.valueProduct),
    valueDiscount: new FormControl(produto.valueDiscount),
    brand: new FormControl(produto.brand),
    model: new FormControl(produto.model)
  })
}

criarProduto(){
  this.service.create(this.formularioProduto.value).subscribe(()=>{
    alert("Produto criado com sucesso!")
    this.formularioProduto.reset()
  })
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

  criarDadosProduto() {
    this.formularioProduto = this.construirForm.group({
      name: [
        '',
        Validators.compose([
          Validators.required
        ])],
      description: [
        '',
        Validators.compose([
          Validators.required
        ])],
      image: [
        '',
        Validators.compose([
          Validators.required
        ])],
      category: [
        '',
        Validators.compose([
          Validators.required
        ])],
      valueProduct: [
        '',
        Validators.compose([
          Validators.required
        ])],
      valueDiscount: [
        '',
        Validators.compose([
          Validators.required
        ])],
      brand: [
        '',
        Validators.compose([
          Validators.required
        ])],
      model: [
        '',
        Validators.compose([
          Validators.required
        ])]
    })
  }

  verificarLogin(){
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.login = true
    }
    else {
      this.login = false
    }
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

}
