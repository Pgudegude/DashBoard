import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faturamento-config',
  templateUrl: './faturamento-config.component.html',
  styleUrls: ['./faturamento-config.component.css']
})
export class FaturamentoConfigComponent implements OnInit {

  login: boolean
  usuario: any

  constructor() { }

  ngOnInit(): void {
    this.verificarLogin()
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
