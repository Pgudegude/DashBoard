import { ProductService } from './../../service/product.service';
import { ProductAPI } from './../../model/productAPI';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto-config',
  templateUrl: './produto-config.component.html',
  styleUrls: ['./produto-config.component.css']
})
export class ProdutoConfigComponent implements OnInit {

  login: boolean
  usuario: any

  constructor() { }

  ngOnInit() {
    this.verificarLogin();
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


}
