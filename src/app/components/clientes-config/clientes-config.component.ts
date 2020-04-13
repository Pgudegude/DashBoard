import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-config',
  templateUrl: './clientes-config.component.html',
  styleUrls: ['./clientes-config.component.css']
})
export class ClientesConfigComponent implements OnInit {
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
