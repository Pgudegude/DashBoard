import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ProductAPI } from 'src/app/model/productAPI';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  
  formularioProduto: FormGroup
  imagem: any

  constructor(private construirForm: FormBuilder, private service: ProductService) { }

  ngOnInit(): void {
    this.criarDadosProduto();
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

  mostrarImagem(){
    let caminho = "../../../assets/Imagem/" + this.formularioProduto.value.image.slice(12, this.formularioProduto.value.image.length)
    this.imagem = caminho
  }

  criarProduto(){
    this.service.create(this.formularioProduto.value).subscribe(()=>{
      alert("Produto criado com sucesso!")
      this.formularioProduto.reset()
      this.imagem = ""
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
}