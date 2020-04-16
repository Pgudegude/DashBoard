import { FaturamentoService } from './../../service/faturamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faturamento-config',
  templateUrl: './faturamento-config.component.html',
  styleUrls: ['./faturamento-config.component.css']
})
export class FaturamentoConfigComponent implements OnInit {

  login: boolean
  usuario: any
  assuntos: any = []
  status: any = []

  constructor(private service: FaturamentoService) { }

  ngOnInit(): void {
    this.verificarLogin()
    this.listarAssuntos()
    this.listarStatus()
  }

  listarAssuntos(){
    this.service.contatos().subscribe((dados)=>{
      this.assuntos = dados
    })
  }


  listarStatus(){
    this.service.listarStatus().subscribe((dados)=>{
      console.log(dados);
      
      this.status = dados
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
}
