import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})

export class ListarProdutosComponent implements OnInit {

  produtos: any = []
  formularioCategoria: FormGroup
  categoria: number


  constructor(private service: ProductService, private fb: FormBuilder, private emissor : EmissorDeEventosService) {
    this.listar()
    this.emissor.emissor.subscribe(()=>this.listar())
  }

  criandoForm() {
    this.formularioCategoria = this.fb.group({
      categoria: [
        '',
        Validators.compose([
          Validators.required
        ])]
    })
  }

  listarCategoria() {
    let id = this.formularioCategoria.value.categoria
    this.service.listarPorCategoria(id).subscribe((categoria) => {
      if (id == 11 ) {
        this.listar()
      } else {
        this.produtos = categoria
      }
    })




  }


  listar() {
    this.service.getProducts().subscribe((prod) => {
      this.produtos = prod
    })
  }


  ngOnInit() {
    this.criandoForm()
  }

}
