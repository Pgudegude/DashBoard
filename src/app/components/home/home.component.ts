import { Component, OnInit, ViewChild } from '@angular/core';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: boolean
  usuario: any

  constructor(private emissor: EmissorDeEventosService,private route: Router) { }

  deslogar() {
    sessionStorage.removeItem("usuario")
    alert("Você saiu do DashBoard")
    this.emissor.emitirUsuarioLogado()
    this.route.navigate([""])
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

  ngOnInit(){
    this.verificarLogin()
  }

}
