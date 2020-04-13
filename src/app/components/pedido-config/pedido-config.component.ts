import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-config',
  templateUrl: './pedido-config.component.html',
  styleUrls: ['./pedido-config.component.css']
})
export class PedidoConfigComponent implements OnInit {
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
