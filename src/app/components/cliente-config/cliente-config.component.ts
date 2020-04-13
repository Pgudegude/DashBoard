import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-config',
  templateUrl: './cliente-config.component.html',
  styleUrls: ['./cliente-config.component.css']
})
export class ClienteConfigComponent implements OnInit {

  login: boolean
  usuario: any

  constructor() { }


  ngOnInit() {
    this.verificarLogin();
  }


  verificarLogin() {
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.login = true
    }
    else {
      this.login = false
    }
  }


}
