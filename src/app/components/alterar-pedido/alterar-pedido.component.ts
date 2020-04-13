import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alterar-pedido',
  templateUrl: './alterar-pedido.component.html',
  styleUrls: ['./alterar-pedido.component.css']
})
export class AlterarPedidoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  alterarUsuario :FormGroup
  ngOnInit(): void {
    this.criarFormulario()
  }
  criarFormulario(){
    this.alterarUsuario = this.fb.group({
      
    })
  }
alterarStatus(){
  console.log("estou alterando")
}
}
