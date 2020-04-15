
  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ProductAPI } from 'src/app/model/productAPI';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  formularioAlterar: FormGroup
  imagem: any
  desc: any

  constructor(private construirForm: FormBuilder, private service: ProductService) { }

  ngOnInit(): void {
    this.criarAlteracao();
  }

  mostrarImagem(){
    let caminho = "../../../assets/Imagem/" + this.formularioAlterar.value.image.slice(12, this.formularioAlterar.value.image.length)
    this.imagem = caminho
  }

  enviarAlteracao(produto: ProductAPI){
    return new FormGroup({
      codProduct: new FormControl(produto.codProduct),
      description: new FormControl(produto.description),
      image: new FormControl(produto.image),
      category: new FormControl(produto.category),
      valueProduct: new FormControl(produto.valueProduct),
      valueDiscount: new FormControl(produto.valueDiscount),
      brand: new FormControl(produto.brand),
      model: new FormControl(produto.model)
    })
  }

  desconto(){
    this.desc =  (this.formularioAlterar.value.valueProduct * 0.3).toLocaleString()
    this.formularioAlterar.controls['valueDiscount'].patchValue(this.desc)
  }


  puxarProduto(){
    let dados = this.formularioAlterar.value.codProduct
      this.service.findByProductsCode(dados).subscribe((data: any)=>{
        this.formularioAlterar.controls['name'].patchValue(data[0].name)
        this.formularioAlterar.controls['description'].patchValue(data[0].description)
        this.formularioAlterar.controls['category'].patchValue(data[0].category.id)
        this.formularioAlterar.controls['valueProduct'].patchValue(data[0].valueProduct)
        this.formularioAlterar.controls['brand'].patchValue(data[0].brand)
        this.formularioAlterar.controls['model'].patchValue(data[0].model)
        this.formularioAlterar.controls['valueDiscount'].patchValue(data[0].valueDiscount)
        this.imagem = data[0].image
      })
  }


  criarAlteracao() {
    this.formularioAlterar = this.construirForm.group({
      codProduct:[
        '',
        Validators.compose([
          Validators.required
        ])],
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
        {value:'',disabled: true},
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

  alterarProduto(){
    if (confirm("Confirme suas alterações!")) {
      this.service.alterar(this.formularioAlterar.value).subscribe(()=>{
        alert("Produto alterado!")
        this.formularioAlterar.reset()
        this.imagem = ""
      })
    }
  }

}

